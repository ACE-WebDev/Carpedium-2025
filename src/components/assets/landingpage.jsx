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
      const DARK_COLOR = "#10124C"; // Dark blue for text on light background
      const LIGHT_TEXT_COLOR = "#F7F1DC"; // Light color for year and mobile menu text
      const BG_BLUE = "#8EB7BD"; // Main background blue

      return (
        <div className={`relative min-h-[140vh] bg-[${BG_BLUE}] overflow-hidden flex flex-col`}>
          {/* Header - No background color, it's transparent over the main background */}
          <header className="flex items-center justify-between px-6 py-4 relative z-20">
            
            {/* Logo - Ensuring the dark logo is used against the light background */}
            <div className="w-[100px] md:w-[150px]">
              {/* Using the original mask approach but ensuring the color is dark blue */}
              <div
                className={`w-full h-[60px] bg-[${DARK_COLOR}]
                  [mask-image:url('/carpe_img.png')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]
                  [-webkit-mask-image:url('/carpe_img.png')] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]`}
              ></div>
            </div>

            {/* Hamburger - Dark blue for visibility */}
            <div
              id="hamburger-btn"
              className="md:hidden flex flex-col gap-1 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`w-6 h-[3px] bg-[${DARK_COLOR}]`}></span>
              <span className={`w-6 h-[3px] bg-[${DARK_COLOR}]`}></span>
              <span className={`w-6 h-[3px] bg-[${DARK_COLOR}]`}></span>
            </div>

            {/* Desktop Nav - Dark text color for visibility on the light background */}
            <nav className={`hidden md:flex gap-10 text-[${DARK_COLOR}] font-medium text-lg`}>
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

          {/* Mobile Menu - Remains dark for contrast */}
          {menuOpen && (
            <div
              id="mobile-menu"
              className={`fixed inset-0 bg-[${DARK_COLOR}] z-50 flex flex-col`}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className={`text-[${LIGHT_TEXT_COLOR}] text-2xl font-bold`}
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
                  className={`px-10 py-4 text-lg font-medium text-[${LIGHT_TEXT_COLOR}] text-center`}
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
              className="w-[400px] md:w-[600px] lg:w-[800px] h-auto object-contain relative z-10 -mt-70 " 
            />

            {/* Year - Set back to 2025 */}
              <div className={`mt-6 -ml-130 text-[${LIGHT_TEXT_COLOR}] font-['Playfair_Display'] font-bold text-4xl md:text-6xl relative z-20`}>
                2025
              </div>

            {/* Wave behind content */}
            <div className="absolute top-2/5 left-1/2 -translate-x-1/2 w-[500px] md:w-[880px] z-20">
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