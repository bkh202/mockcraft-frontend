import React from "react";

const CertificationsSection = ({ certificates }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-2">
        <span className="h-6 w-1.5 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full" />
        Certifications
      </h2>
      <div className="space-y-4">
        {certificates.map((cert, i) => (
          <div key={i} className="rounded-2xl bg-white p-5 ring-1 ring-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
              <span className="text-lg">🏆</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">{cert.name || cert.title || cert}</h3>
              {cert.issuer && <p className="text-gray-500 text-xs mt-1">{cert.issuer} {cert.date && `• ${cert.date}`}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;