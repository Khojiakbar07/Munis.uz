import React, { useEffect, useState } from "react";
import logoIcon from "../assets/logo icon.png";


const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl
        px-10 py-3 flex items-center backdrop-blur-sm justify-between rounded-full transition-all duration-300
        border ${
          scrolled
            ? "bg-white/60 border-white/30 backdrop-blur-md shadow-md"
            : "bg-white/80 border-gray-200 shadow"
        }`}
    >
      {/* Left menu */}
      <div className="flex items-center gap-8 text-lg text-black font-semibold">
        <a href="#" className="hover:text-green-700 transition">Продукция</a>
        <a href="#" className="hover:text-green-700 transition">О компании</a>
        <a href="#" className="hover:text-green-700 transition">Пресс-центр</a>
      </div>

      {/* Center logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-[32px] text-green-800 font-extrabold font-teko leading-none tracking-wide">
          MUNIS
        </span>
        <img src={logoIcon} alt="Tea Icon" className="h-6 left-3 object-contain mt-1" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <span className="text-base font-semibold text-black">RU</span>
        <button className="bg-neutral-700 hover:bg-neutral-800 text-white text-base px-6 py-2 rounded-full transition font-semibold">
          Контакты
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
