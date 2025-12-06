import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F111A] flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[160px] -top-24 -left-24 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[140px] bottom-0 right-0 animate-pulse"></div>
      </div>
      <h1 className="text-[140px] font-extrabold text-white select-none leading-none tracking-tight relative">
        <span className="relative inline-block glitch" data-text="404">
          404
        </span>
      </h1>
      <p className="mt-4 text-gray-400 text-lg max-w-md">
        Oops... The page you're looking for doesn't exist.
      </p>

      <a
        href="/"
        className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-lg shadow-lg"
      >
        Go Home
      </a>

      <style>{`
        .glitch {
          position: relative;
          color: white;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.7;
        }
        .glitch::before {
          animation: glitchTop 1s infinite linear alternate-reverse;
          color: #7f5af0;
          z-index: -1;
        }
        .glitch::after {
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
          color: #ff4d4d;
          z-index: -2;
        }
        @keyframes glitchTop {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-3px, -2px); }
          40% { transform: translate(3px, -1px); }
          60% { transform: translate(-2px, 1px); }
          80% { transform: translate(2px, 0); }
          100% { transform: translate(0, 0); }
        }
        @keyframes glitchBottom {
          0% { transform: translate(0, 0); }
          20% { transform: translate(3px, 2px); }
          40% { transform: translate(-3px, 1px); }
          60% { transform: translate(2px, -1px); }
          80% { transform: translate(-2px, 0); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
