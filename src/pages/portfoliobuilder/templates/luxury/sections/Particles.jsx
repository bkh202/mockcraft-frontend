function Particles() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="lx-particle"
          style={{
            left: `${8 + i * 8}%`,
            top: `${10 + (i % 5) * 15}%`,
            animationDuration: `${8 + i * 1.5}s`,
            animationDelay: `${i * 0.7}s`,
            opacity: 0.2 + (i % 3) * 0.1,
          }}
        />
      ))}
    </>
  );
}

export default Particles;