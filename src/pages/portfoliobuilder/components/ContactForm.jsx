import { useState, useRef } from "react";
import axios from "../../../api/axiosInstance"; // Dhyan rakhna path sahi ho tumhare project ke hisaab se
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm({ data }) {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // 1. Backend ke hisaab se Payload (Data) taiyar karna
    const payload = {
      portfolioOwnerEmail: data?.email,        // Jiska portfolio hai (jisko mail jayega)
      senderName: e.target.from_name.value,    // Jisne form bhara
      senderEmail: e.target.from_email.value,  // Sender ka email
      message: e.target.message.value          // Actual message
    };

    // 2. Validation: Agar owner ne email set nahi kiya hai toh error dikhao
    if (!payload.portfolioOwnerEmail) {
      alert("Contact form is currently disabled (Owner email missing).");
      setIsSubmitting(false);
      return;
    }

    // 3. Spring Boot Backend ko hit karna
    try {
      // Endpoint wahi hai jo humne Spring Boot controller me banaya tha
      const res = await axios.post("/api/portfolio/contact", payload);
      
      // Backend success response handle karna
      setStatus("success");
      formRef.current.reset(); // Form clear kar do
      
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      // 5 second baad success/error message hide kar do
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto backdrop-blur-xl rounded-3xl overflow-hidden relative z-10 border border-gray-500/20 shadow-xl bg-gray-500/5">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* LEFT COLUMN: Contact Details */}
        <div className="lg:w-2/5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-500/20 flex flex-col justify-between bg-gray-500/10">
          <div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight opacity-90">Let's Talk</h3>
            <p className="mb-10 leading-relaxed opacity-70 text-sm md:text-base">
              Have a project in mind or just want to say hi? Fill out the form and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6 overflow-hidden">
              {data?.email && (
                <div className="flex items-start gap-4 group min-w-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-gray-500/30 bg-gray-500/5 opacity-80 group-hover:opacity-100 transition-opacity mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium opacity-60 mb-1">Email</p>
                    <a href={`mailto:${data.email}`} className="text-base md:text-lg font-semibold opacity-90 hover:opacity-100 transition-opacity break-all block">
                      {data.email}
                    </a>
                  </div>
                </div>
              )}

              {data?.phone && (
                <div className="flex items-start gap-4 group min-w-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-gray-500/30 bg-gray-500/5 opacity-80 group-hover:opacity-100 transition-opacity mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium opacity-60 mb-1">Phone</p>
                    <a href={`tel:${data.phone}`} className="text-base md:text-lg font-semibold opacity-90 hover:opacity-100 transition-opacity break-all block">
                      {data.phone}
                    </a>
                  </div>
                </div>
              )}

              {data?.location && (
                <div className="flex items-start gap-4 group min-w-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-gray-500/30 bg-gray-500/5 opacity-80 group-hover:opacity-100 transition-opacity mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium opacity-60 mb-1">Location</p>
                    <p className="text-base md:text-lg font-semibold opacity-90 break-words">
                      {data.location}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="lg:w-3/5 p-8 md:p-12">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-80">Your Name</label>
                <input
                  type="text"
                  name="from_name" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-500/30 bg-transparent opacity-80 hover:bg-gray-500/5 focus:bg-gray-500/10 focus:ring-1 focus:ring-current outline-none transition-all placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-80">Your Email</label>
                <input
                  type="email"
                  name="from_email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-500/30 bg-transparent opacity-80 hover:bg-gray-500/5 focus:bg-gray-500/10 focus:ring-1 focus:ring-current outline-none transition-all placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold opacity-80">Message</label>
              <textarea
                name="message" 
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-500/30 bg-transparent opacity-80 hover:bg-gray-500/5 focus:bg-gray-500/10 focus:ring-1 focus:ring-current outline-none transition-all resize-none placeholder-gray-500"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 p-4 rounded-xl border border-green-500/50 bg-green-500/10 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <p className="font-medium text-sm">Message sent successfully!</p>
              </div>
            )}
            
            {status === "error" && (
              <div className="flex items-center gap-2 p-4 rounded-xl border border-red-500/50 bg-red-500/10 text-red-600">
                <AlertCircle className="w-5 h-5" />
                <p className="font-medium text-sm">Failed to send message. Please try again.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 mt-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform border border-gray-500/30 bg-gray-500/10 hover:bg-gray-500/20 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-1"
              }`}
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}