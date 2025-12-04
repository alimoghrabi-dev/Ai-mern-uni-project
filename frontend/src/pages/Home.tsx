import TypingAnime from "@/components/home/TypingAnime";

const Home: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-16 mb-20 gap-16 overflow-hidden px-4">
      <div className="w-full text-center mx-auto px-4">
        <TypingAnime />
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 mt-4 font-light">
          Your AI-powered assistant — fast, smart, and always here to help.
        </p>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
      </div>
      <div className="flex items-center gap-32 sm:gap-48 md:gap-60">
        <img
          src="robot.png"
          alt="robot1"
          className="size-[125px] md:size-[150px] animate-float-slow"
        />
        <img
          src="openai.png"
          alt="openai"
          className="w-16 md:w-24 invert opacity-90 animate-float-fast"
        />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-purple-600/30 blur-3xl rounded-3xl opacity-40" />
        <img
          src="chat.png"
          alt="chat"
          className="relative max-w-full rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl p-2"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2 pt-10 border-t border-white/10">
        <span className="text-white/90 text-lg md:text-xl font-semibold">
          Made With ❤️ By <span className="text-primary">Ali Moghrabi</span>
        </span>

        <a
          href="https://github.com/alimoghrabi-dev"
          target="_blank"
          className="text-primary text-center text-lg font-semibold hover:underline hover:text-primary/80 transition-all"
        >
          Visit My GitHub For More Projects →
        </a>
      </div>
    </section>
  );
};

export default Home;
