import { TypeAnimation } from "react-type-animation";

const TypingAnime = () => {
  return (
    <TypeAnimation
      sequence={[
        "Your Personal AI Assistant",
        2000,
        "Powered by Advanced Intelligence ⚡",
        2000,
        "Fast Answers. Smart Insights.✨",
        2000,
        "Chat Naturally — Anytime",
        2000,
        "Your Own Custom Chatbot",
        2000,
      ]}
      speed={50}
      className="text-2xl sm:text-3xl md:text-5xl text-center font-bold text-white w-full"
      repeat={Infinity}
    />
  );
};

export default TypingAnime;
