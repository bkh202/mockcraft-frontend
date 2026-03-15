import { useEffect, useRef } from "react";

function AuroraCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let t = 0, raf;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 5; i++) {
        const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        const h1 = (120 + i * 40 + t * 0.3) % 360;
        const h2 = (180 + i * 30 + t * 0.2) % 360;
        g.addColorStop(0, `hsla(${h1},80%,50%,0)`);
        g.addColorStop(0.5, `hsla(${h2},90%,60%,0.055)`);
        g.addColorStop(1, `hsla(${h1},70%,40%,0)`);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((t * 0.002 + i * 0.5) * Math.PI);
        ctx.scale(1 + Math.sin(t * 0.01 + i) * 0.1, 0.3);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(0, 0, canvas.width * 0.8, canvas.height * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

export default AuroraCanvas;