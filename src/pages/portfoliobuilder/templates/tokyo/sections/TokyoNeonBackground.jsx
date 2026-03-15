function TokyoNeonBackground() {
  return (
    <>
      <div className="tn-grid-bg" />

      {/* Rain drops */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="tn-rain-drop"
          style={{
            left: `${5 + i * 6.5}%`,
            height: `${60 + (i % 5) * 30}px`,
            animationDuration: `${1.5 + (i % 4) * 0.5}s`,
            animationDelay: `${(i % 3) * -0.7}s`,
            opacity: 0.2 + (i % 3) * 0.1,
          }}
        />
      ))}

      {/* Kanji decorations */}
      {['東', '京', '夢', '光', '星', '技'].map((k, i) => (
        <div
          key={i}
          className="tn-kanji"
          style={{
            fontSize: `${8 + (i % 3) * 4}rem`,
            top: `${5 + i * 14}%`,
            [i % 2 === 0 ? 'left' : 'right']: `${1 + (i % 3) * 2}%`,
          }}
        >
          {k}
        </div>
      ))}
    </>
  );
}

export default TokyoNeonBackground;