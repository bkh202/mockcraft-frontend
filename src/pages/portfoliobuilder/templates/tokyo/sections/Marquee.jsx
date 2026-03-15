function Marquee({ text }) {
  return (
    <div className="tn-marquee mb-12">
      <div className="tn-marquee-text">{Array(6).fill(text).join('')}</div>
    </div>
  );
}

export default Marquee;