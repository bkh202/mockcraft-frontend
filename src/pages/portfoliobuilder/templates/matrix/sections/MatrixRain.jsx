function MatrixRain() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="mx-rain-col"
          style={{
            left: `${i * 5.2}%`,
            animationDuration: `${6 + (i % 7) * 1.5}s`,
            animationDelay: `${(i % 5) * -2}s`,
            fontSize: `${12 + (i % 3) * 2}px`,
          }}
        >
          {'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF'
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('')}
        </div>
      ))}
    </>
  );
}

export default MatrixRain;