import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Use Link for SPA navigation

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact", href: "/contact" }
  ];

  const navLinkClass =
    "text-[#10124C] font-medium text-xl hover:scale-105 transition-all duration-200 hover:text-[#0a0d3a]";
  const mobileNavLinkClass =
    "px-6 py-4 text-[#f7f1dc] text-lg font-medium hover:bg-[#10124C] hover:bg-opacity-30 transition-colors border-b border-[#10124C] border-opacity-30";

  // Close menu if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById("mobile-menu");
      const hamburger = document.getElementById("hamburger-btn");
      if (menuOpen && menu && !menu.contains(e.target) && !hamburger.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <section className="relative w-full bg-[#8EB7BD] overflow-hidden">
      {/* Header */}
      <header className="relative z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div
            className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-36 lg:h-20 bg-[#10124C]"
            style={{
              maskImage: "url('/carpe_img.png')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              WebkitMaskImage: "url('/carpe_img.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain"
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 xl:space-x-14 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link key={item.name} to={item.href} className={navLinkClass}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="hamburger-btn"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="w-7 h-0.5 bg-[#10124C] transition-all duration-300" />
          ))}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-20 left-4 right-4 z-50 lg:hidden"
        >
          <div className="bg-[#365E7C] shadow-2xl border-2 border-[#10124C] rounded-lg overflow-hidden">
            <div className="flex flex-col py-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  onClick={() => setMenuOpen(false)}
                  to={item.href}
                  className={`${mobileNavLinkClass} ${index === navItems.length - 1 ? 'border-b-0' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 pb-0">
        {/* Main Logo */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl mb-[-40px] sm:mb-[-50px] md:mb-[-70px] lg:mb-[-90px] xl:mb-[-110px]">
          <img
            src="/carpe_img.png"
            alt="Carpedium 2025"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Wave and Year Container */}
        <div className="relative w-full flex items-center justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl -mb-3 sm:-mb-4 md:-mb-8 lg:-mb-12 xl:-mb-16">
          <div className="relative z-20 w-full">
            <img
              src="/wave.png"
              alt=""
              className="w-full h-auto object-contain opacity-85 block"
              style={{ lineHeight: 0, verticalAlign: 'bottom' }}
            />
          </div>

          {/* Year Display */}
          <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 z-30 transform -translate-y-3 sm:-translate-y-4 md:-translate-y-6 lg:-translate-y-8 xl:-translate-y-10">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-none text-[#F7F1DC]"
              style={{
                fontFamily: 'Playfair Display, serif',
                textShadow: '3px 3px 6px rgba(16, 18, 76, 0.8), 0 0 20px rgba(247, 241, 220, 0.5)',
                letterSpacing: '-0.02em'
              }}
            >
              2025
            </h1>
          </div>
        </div>
      </main>

      {/* Bottom Wave */}
      <div className="relative w-full z-30 -mt-3 sm:-mt-4 md:-mt-8 lg:-mt-12 xl:-mt-16">
        <img
          src="/buttom_wave.png"
          alt=""
          className="w-full h-auto object-cover block"
          style={{ lineHeight: 0, verticalAlign: 'top' }}
        />
      </div>
    </section>
  );
}

export default LandingPage;
