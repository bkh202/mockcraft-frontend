function NebulaBlobs() {
  return (
    <>
      <div
        className="sp-nebula"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(80,40,180,1)",
          top: "-10%",
          left: "-10%",
          animationDuration: "12s",
        }}
      />
      <div
        className="sp-nebula"
        style={{
          width: "400px",
          height: "400px",
          background: "rgba(20,80,200,1)",
          top: "30%",
          right: "-10%",
          animationDuration: "15s",
          animationDelay: "3s",
        }}
      />
      <div
        className="sp-nebula"
        style={{
          width: "600px",
          height: "300px",
          background: "rgba(10,40,120,1)",
          bottom: "10%",
          left: "20%",
          animationDuration: "18s",
          animationDelay: "6s",
        }}
      />
    </>
  );
}

export default NebulaBlobs;