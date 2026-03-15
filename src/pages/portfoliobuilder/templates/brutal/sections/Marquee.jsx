function Marquee({ text, reverse = false }) {
  return (
    <div className="bt-marquee">
      <div
        className="bt-marquee-inner"
        style={reverse ? { animationDirection: 'reverse' } : {}}
      >
        {Array(8).fill(text).join('')}
      </div>
    </div>
  );
}

export default Marquee;