export default function MockCraftLogo({ size = "md" }) {
  const sizes = {
    sm: { w: 160, h: 36, scale: 0.8 },
    md: { w: 200, h: 44, scale: 1 },
    lg: { w: 260, h: 56, scale: 1.3 },
  };
  const { w, h } = sizes[size];

  return (
    <svg width={w} height={h} viewBox="0 0 200 44" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(4, 4)">
        <path d="M16 2 C16 2 7 2 5 8 C3 14 6 19 6 19 C4 21 2 25 4 29 C6 33 11 34 14 33 C15 36 16 38 18 38 L18 2 Z"
          fill="#e0e7ff" stroke="#3730a3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 2 C20 2 29 2 31 8 C33 14 30 19 30 19 C32 21 34 25 32 29 C30 33 25 34 22 33 C21 36 20 38 18 38 L18 2 Z"
          fill="#e0e7ff" stroke="#3730a3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="18" y1="2" x2="18" y2="38" stroke="#4338ca" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2.5 2.5"/>
        <path d="M16 10 C11 9 9 12 10 15"  fill="none" stroke="#4338ca" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M20 10 C25 9 27 12 26 15"  fill="none" stroke="#4338ca" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M16 21 C10 20 8 24 10 27"  fill="none" stroke="#4338ca" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M20 21 C26 20 28 24 26 27"  fill="none" stroke="#4338ca" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="13" cy="17" r="1.8" fill="#3730a3" opacity="0.7"/>
        <circle cx="18" cy="23" r="1.8" fill="#6366f1" opacity="0.8"/>
        <circle cx="23" cy="17" r="1.8" fill="#3730a3" opacity="0.7"/>
        <line x1="13" y1="17" x2="18" y2="23" stroke="#6366f1" strokeWidth="0.8" opacity="0.7"/>
        <line x1="23" y1="17" x2="18" y2="23" stroke="#6366f1" strokeWidth="0.8" opacity="0.7"/>
      </g>
      <text x="46" y="30"
        style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: 700, fill: "#3730a3", letterSpacing: "-0.5px" }}>
        Mock<tspan fill="#6366f1">Craft</tspan>
      </text>
    </svg>
  );
}