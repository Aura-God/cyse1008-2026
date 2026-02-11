"use client";

export default function HackerLayout({ children }) {
  return (
    <div className="hacker-root">
      <div className="scanlines"></div>
      <div className="glow"></div>

      <section className="terminal">
        <header className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">root@akash:~#</span>
        </header>

        <div className="terminal-body">
          <p className="boot-text">
            Initializing secure environment…
            <br />
            Bypassing firewall…
            <br />
            <span className="success">ACCESS GRANTED</span>
          </p>

          {children}
        </div>
      </section>

      <style jsx>{`
        .hacker-root {
          min-height: 100vh;
          background: radial-gradient(circle at top, #02110a, #000000);
          color: #00ff9c;
          font-family: "Courier New", monospace;
          position: relative;
          overflow: hidden;
        }

        .glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(0, 255, 150, 0.08),
            transparent 70%
          );
          pointer-events: none;
        }

        .scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.03),
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 3px
          );
          animation: scan 8s linear infinite;
          pointer-events: none;
        }

        @keyframes scan {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 100px;
          }
        }

        .terminal {
          max-width: 900px;
          margin: 60px auto;
          border: 2px solid #00ff9c;
          box-shadow: 0 0 25px rgba(0, 255, 156, 0.4);
          background: rgba(0, 0, 0, 0.85);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px;
          background: #021b12;
          border-bottom: 1px solid #00ff9c;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .red {
          background: #ff5f56;
        }

        .yellow {
          background: #ffbd2e;
        }

        .green {
          background: #27c93f;
        }

        .title {
          margin-left: 12px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .terminal-body {
          padding: 24px;
        }

        .boot-text {
          font-size: 0.95rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .success {
          color: #00ff9c;
          font-weight: bold;
          text-shadow: 0 0 8px rgba(0, 255, 156, 0.8);
        }
      `}</style>
    </div>
  );
}
