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

  // Define colors
  const DARK_COLOR = "#10124C"; // Dark blue
  const LIGHT_TEXT_COLOR = "#F7F1DC"; // Light text for contrast
  const BG_BLUE = "#8EB7BD"; // Background blue

  return (
    <div
      className="relative min-h-[140vh] overflow-hidden flex flex-col"
      style={{ backgroundColor: BG_BLUE }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 relative z-20">
        {/* Logo */}
        <div className="w-[100px] md:w-[150px]">
          <div
            className="w-full h-[60px]"
            style={{
              backgroundColor: DARK_COLOR,
              WebkitMaskImage: "url('/carpe_img.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url('/carpe_img.png')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          />
        </div>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex gap-10 font-medium text-lg absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="hover:scale-105 transition" style={{ color: DARK_COLOR }}>
            Home
          </Link>
          <Link to="/events" className="hover:scale-105 transition" style={{ color: DARK_COLOR }}>
            Events
          </Link>
          <Link to="#sponsors" className="hover:scale-105 transition" style={{ color: DARK_COLOR }}>
            Sponsors
          </Link>
          <Link to="#contact" className="hover:scale-105 transition" style={{ color: DARK_COLOR }}>
            Contact
          </Link>
        </nav>

        {/* Hamburger */}
        <div
          id="hamburger-btn"
          className="md:hidden flex flex-col gap-1 cursor-pointer ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[3px]" style={{ backgroundColor: DARK_COLOR }} />
          <span className="w-6 h-[3px]" style={{ backgroundColor: DARK_COLOR }} />
          <span className="w-6 h-[3px]" style={{ backgroundColor: DARK_COLOR }} />
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: DARK_COLOR }}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold"
              style={{ color: LIGHT_TEXT_COLOR }}
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
              className="px-10 py-4 text-lg font-medium text-center"
              style={{ color: LIGHT_TEXT_COLOR }}
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
          alt="Carpediem"
          className="w-full max-w-[800px] h-auto object-contain relative z-10 mt-[-70px]"
        />

        {/* Year */}
        <div
          className="mt-6 text-[4rem] md:text-[6rem] font-['Playfair_Display'] font-bold relative z-20"
          style={{ color: LIGHT_TEXT_COLOR }}
        >
          2025
        </div>

        {/* Wave behind content */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{ top: '40%', width: '500px', maxWidth: '880px' }}
        >
          <img
            src="/wave.png"
            alt="wave"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </div>
      </main>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full z-10">
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
