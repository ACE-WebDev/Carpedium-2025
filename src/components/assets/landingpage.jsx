import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById("mobile-menu");
      const hamburger = document.getElementById("hamburger-btn");
      if (
        menuOpen &&
        menu &&
        !menu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="relative min-h-screen bg-[#8EB7BD] overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 relative z-20">
        {/* Logo */}
        <div className="w-[100px] md:w-[150px]">
          <div
            className="w-full h-[60px] bg-[#10124C]
              [mask-image:url('/carpe_img.png')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]
              [-webkit-mask-image:url('/carpe_img.png')] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]"
          ></div>
        </div>

        {/* Hamburger */}
        <div
          id="hamburger-btn"
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[3px] bg-[#10124C]"></span>
          <span className="w-6 h-[3px] bg-[#10124C]"></span>
          <span className="w-6 h-[3px] bg-[#10124C]"></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-[#10124C] font-medium text-lg">
          <Link to="/" className="hover:scale-105 transition">
            Home
          </Link>
          <Link to="/events" className="hover:scale-105 transition">
            Events
          </Link>
          <Link to="#sponsors" className="hover:scale-105 transition">
            Sponsors
          </Link>
          <Link to="#contact" className="hover:scale-105 transition">
            Contact
          </Link>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-[#365E7C] z-50 flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#f7f1dc] text-2xl font-bold"
            >
              &times;
            </button>
          </div>
          {[
            { name: "Home", path: "/" },
            { name: "Events", path: "/events" },
            { name: "Sponsors", path: "#sponsors" },
            { name: "Contact", path: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="px-10 py-4 text-lg font-medium text-[#f7f1dc] text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Main Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center z-10">
        {/* Carpe Image */}
        <img
          src="/carpe_img.png"
          alt="Carpedium"
          className="w-[300px] md:w-[600px] lg:w-[800px] h-auto object-contain relative z-20"
        />

        {/* Year */}
        <div className="mt-6 text-[#F7F1DC] font-['Playfair_Display'] font-bold text-4xl md:text-6xl relative z-20">
          2025
        </div>

        {/* Wave behind content */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] md:w-[880px] z-0">
          <img
            src="/wave.png"
            alt="wave"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </div>
      </main>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src="/buttom_wave.png"
          alt="bottom_wave"
          className="w-full h-auto object-cover pointer-events-none"
        />
      </div>
    </div>
  );
}

export default LandingPage;
