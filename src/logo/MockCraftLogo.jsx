export default function MockCraftLogo({ size = "md" }) {
  const sizes = {
    sm: { w: 160, h: 36, scale: 0.8 },
    md: { w: 200, h: 44, scale: 1 },
    lg: { w: 260, h: 56, scale: 1.3 },
  };
  const { w, h } = sizes[size];

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 200 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(4, 4)">
        {/* Left hemisphere – gray fill & stroke */}
        <path
          d="M16 2 C16 2 7 2 5 8 C3 14 6 19 6 19 C4 21 2 25 4 29 C6 33 11 34 14 33 C15 36 16 38 18 38 L18 2 Z"
          fill="#e5e7eb"
          stroke="#6b7280"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right hemisphere – gray fill & stroke */}
        <path
          d="M20 2 C20 2 29 2 31 8 C33 14 30 19 30 19 C32 21 34 25 32 29 C30 33 25 34 22 33 C21 36 20 38 18 38 L18 2 Z"
          fill="#e5e7eb"
          stroke="#6b7280"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center dashed line – gray */}
        <line
          x1="18"
          y1="2"
          x2="18"
          y2="38"
          stroke="#6b7280"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="2.5 2.5"
        />
        {/* Neural connections – left */}
        <path
          d="M16 10 C11 9 9 12 10 15"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M16 21 C10 20 8 24 10 27"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Neural connections – right */}
        <path
          d="M20 10 C25 9 27 12 26 15"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M20 21 C26 20 28 24 26 27"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Synaptic dots – gray */}
        <circle cx="13" cy="17" r="1.8" fill="#9ca3af" opacity="0.9" />
        <circle cx="18" cy="23" r="1.8" fill="#9ca3af" opacity="0.9" />
        <circle cx="23" cy="17" r="1.8" fill="#9ca3af" opacity="0.9" />
        {/* Connection lines – gray */}
        <line
          x1="13"
          y1="17"
          x2="18"
          y2="23"
          stroke="#9ca3af"
          strokeWidth="0.8"
          opacity="0.7"
        />
        <line
          x1="23"
          y1="17"
          x2="18"
          y2="23"
          stroke="#9ca3af"
          strokeWidth="0.8"
          opacity="0.7"
        />
      </g>
      {/* Text: Mock (black), Craft (gray) */}
      <text
        x="46"
        y="30"
        style={{
          fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
          fontSize: "26px",
          fontWeight: 700,
          fill: "#000000",
          letterSpacing: "-0.5px",
        }}
      >
        Mock
        <tspan fill="#6b7280">Craft</tspan>
      </text>
    </svg>
  );
}