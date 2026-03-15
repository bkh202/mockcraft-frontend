import { useState, useEffect } from "react";

function TerminalIntro({ text }) {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, [text]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mx-card p-8 rounded-sm mb-8 mx-reveal">
      <div className="mx-section-header mb-4">terminal v4.2.1 — authenticated session</div>
      <pre className="mx-mono text-sm text-green-400 whitespace-pre-wrap leading-relaxed">
        {typed}
        {showCursor ? "█" : " "}
      </pre>
    </div>
  );
}

export default TerminalIntro;