function ArtDecoBackground() {
  return (
    <>
      <div className="ad-geo-bg" />

      {/* Decorative spinning circles */}
      <div
        className="ad-hex"
        style={{
          top: "5%",
          right: "5%",
          width: "300px",
          height: "300px",
          border: "1px solid rgba(218,165,32,1)",
          borderRadius: "50%",
          animation: "spinSlow 40s linear infinite",
        }}
      />
      <div
        className="ad-hex"
        style={{
          top: "5%",
          right: "5%",
          width: "200px",
          height: "200px",
          border: "1px solid rgba(218,165,32,1)",
          borderRadius: "50%",
          margin: "50px",
          animation: "spinSlow 30s linear infinite reverse",
        }}
      />
      <div
        className="ad-hex"
        style={{
          bottom: "10%",
          left: "3%",
          width: "250px",
          height: "250px",
          border: "1px solid rgba(218,165,32,1)",
          borderRadius: "0",
          transform: "rotate(45deg)",
          animation: "spinSlow 50s linear infinite",
        }}
      />
    </>
  );
}

export default ArtDecoBackground;