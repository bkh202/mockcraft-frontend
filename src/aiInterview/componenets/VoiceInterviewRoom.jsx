import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, Play, ChevronRight, Loader2, AlertCircle, WifiOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VoiceInterviewRoom({ questions, jobRole, company, experienceLevel }) {
  const navigate = useNavigate();
  
  // States
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSpeakingAI, setIsSpeakingAI] = useState(false);
  const [isRecordingUser, setIsRecordingUser] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentTranscript, setCurrentTranscript] = useState('');
  
  // Error States (THE FIXES)
  const [micError, setMicError] = useState('');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const recognitionRef = useRef(null);

  // Internet Connection Monitor
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Proactive Mic Permission Check & Setup
  useEffect(() => {
    const setupMic = async () => {
      try {
        // Explicitly demand mic access
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setMicError(''); // Permission granted
        
        // Setup Speech Recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
          recognitionRef.current = new SpeechRecognition();
          recognitionRef.current.continuous = true;
          recognitionRef.current.interimResults = true;

          recognitionRef.current.onresult = (event) => {
            let transcript = '';
            for (let i = 0; i < event.results.length; i++) {
              transcript += event.results[i][0].transcript;
            }
            setCurrentTranscript(transcript);
          };

          recognitionRef.current.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            if (event.error === 'not-allowed') {
              setMicError("Microphone access blocked. Please allow mic permissions in your browser.");
            }
            setIsRecordingUser(false);
          };
        } else {
          setMicError("Speech Recognition not supported in this browser. Please use Google Chrome.");
        }
      } catch (err) {
        setMicError("Microphone access denied or no microphone found. We cannot proceed.");
      }
    };

    setupMic();

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
      window.speechSynthesis.cancel();
    };
  }, []);

  // AI Speaking Logic
  const speakQuestion = (text) => {
    if (!text || micError) return;
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    
    utterance.onstart = () => setIsSpeakingAI(true);
    utterance.onend = () => setIsSpeakingAI(false);
    
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (questions && questions[currentIdx] && !micError) {
      speakQuestion(questions[currentIdx]);
      setCurrentTranscript(userAnswers[currentIdx] || '');
    }
  }, [currentIdx, questions, micError]);

  const toggleRecording = () => {
    if (micError) return; // Guard
    
    if (isRecordingUser) {
      recognitionRef.current?.stop();
      setIsRecordingUser(false);
      setUserAnswers(prev => ({ ...prev, [currentIdx]: currentTranscript }));
    } else {
      setCurrentTranscript(userAnswers[currentIdx] || '');
      recognitionRef.current?.start();
      setIsRecordingUser(true);
    }
  };

  const handleNextOrFinish = () => {
    window.speechSynthesis.cancel();
    
    const savedAnswer = currentTranscript || userAnswers[currentIdx] || "";
    
    if (isRecordingUser) {
      recognitionRef.current?.stop();
      setIsRecordingUser(false);
    }

    const updatedAnswers = { ...userAnswers, [currentIdx]: savedAnswer };
    setUserAnswers(updatedAnswers);

    if (currentIdx === questions.length - 1) {
      const finalAnswersArray = questions.map((_, index) => {
         return updatedAnswers[index]?.trim() ? updatedAnswers[index] : "User remained silent or skipped.";
      });

      navigate('/evaluation', { 
        state: { 
            questions: questions, 
            answers: finalAnswersArray, 
            jobRole: jobRole, 
            experienceLevel: experienceLevel || 'Mid-level'
        } 
      });
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  // Guard Clauses (Bina data ya bina internet ke app fatna nahi chahiye)
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-cyan-400 font-bold p-6">
        <Loader2 className="w-12 h-12 animate-spin mb-4" />
        <p className="text-xl">Setting up the interview room...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* 🛑 INTERNET CHECK BANNER */}
      {isOffline && (
        <div className="absolute top-0 left-0 w-full bg-rose-500 text-white p-3 text-center font-bold flex items-center justify-center gap-2 z-50">
          <WifiOff className="w-5 h-5" /> You are offline! Speech recognition and Evaluation will fail. Reconnect immediately.
        </div>
      )}

      <div className="w-full max-w-3xl bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
        
        {/* 🛑 MIC ERROR OVERLAY */}
        {micError && (
          <div className="absolute inset-0 bg-slate-900/95 z-40 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
            <AlertCircle className="w-16 h-16 text-rose-500 mb-4" />
            <h2 className="text-2xl font-black text-white mb-2">Microphone Blocked!</h2>
            <p className="text-slate-400 mb-6">{micError}</p>
            <p className="text-sm text-cyan-400 font-bold bg-cyan-950/50 p-4 rounded-lg border border-cyan-800">
              Go to your browser's URL bar, click the lock icon 🔒, allow Microphone access, and reload the page.
            </p>
          </div>
        )}

        {/* Header Details */}
        <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
          <div>
            <h2 className="text-xl font-black text-white">{jobRole || "Technical"} Interview</h2>
            <p className="text-sm text-cyan-400 font-bold">@ {company || "MockCraft"}</p>
          </div>
          <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-700 font-mono text-sm text-slate-400">
            Q {currentIdx + 1} / {questions.length}
          </div>
        </div>

        {/* AI Avatar Area */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className={`w-32 h-32 rounded-full bg-slate-900 flex items-center justify-center border-4 transition-all duration-300 ${isSpeakingAI ? 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-pulse' : 'border-slate-700'}`}>
            <span className="text-6xl">🤖</span>
          </div>
          <div className="h-6 mt-4">
            {isSpeakingAI && <span className="text-xs text-cyan-400 font-bold tracking-widest uppercase animate-pulse">AI is speaking...</span>}
          </div>
        </div>

        {/* Current Question */}
        <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 mb-8 min-h-30 flex items-center justify-center text-center shadow-inner">
          <p className="text-xl font-medium text-white leading-relaxed">"{questions[currentIdx]}"</p>
        </div>

        {/* User Answer Transcript Box */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Answer</h3>
            {isRecordingUser && <span className="text-xs font-bold text-rose-500 animate-pulse flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Recording</span>}
          </div>
          <div className="w-full h-40 p-5 bg-slate-950 text-slate-300 border border-slate-700 rounded-xl overflow-y-auto font-mono text-sm leading-relaxed shadow-inner">
            {currentTranscript || (userAnswers[currentIdx]) || <span className="text-slate-600 italic">Click the mic and start speaking your answer...</span>}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => speakQuestion(questions[currentIdx])}
            disabled={isRecordingUser}
            className="w-full sm:w-auto px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition disabled:opacity-50 flex justify-center items-center gap-2"
          >
            <Play className="w-5 h-5" /> Repeat
          </button>
          
          <button 
            onClick={toggleRecording}
            className={`w-full flex-1 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg ${
              isRecordingUser 
                ? 'bg-rose-500/10 text-rose-500 border border-rose-500/50 hover:bg-rose-500/20' 
                : 'bg-cyan-600 text-white hover:bg-cyan-500 border border-cyan-500/50'
            }`}
          >
            {isRecordingUser ? <><Square className="w-5 h-5" /> Stop Answer</> : <><Mic className="w-5 h-5" /> Answer Question</>}
          </button>
          
          <button 
            onClick={handleNextOrFinish}
            disabled={(isRecordingUser && !currentTranscript) || isSpeakingAI}
            className="w-full sm:w-auto px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {currentIdx === questions.length - 1 ? 'Finish Interview' : 'Next'} <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}