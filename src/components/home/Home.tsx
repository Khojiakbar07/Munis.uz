import { lineSpinner } from 'ldrs'
import { LineSpinner } from 'ldrs/react';
lineSpinner.register()
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import CarouselBanner from '../CarouselBanner';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll visibility for "Back to Top" button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-white/50 backdrop-blur-sm z-50">
            <LineSpinner size="40" stroke="3" speed="1" color="green" />
        </div>
      ) : (
        <>
          <CarouselBanner />
          {/* <About />



          {/* Back to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-24 sm:bottom-6 right-6 p-3 w-16 h-16 bg-[#d4f4f2] text-teal-700 rounded-full shadow-md transition flex items-center justify-center"
            >
              <FaArrowUp className="text-teal-700 text-xl" />
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default Home;
