import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    /*header*/
    <div className="relative min-h-screen bg-[#8EB7BD] overflow-x-hidden">

      <header className="absolute top-[29px] left-[20px] w-[361.65px] h-[44.12px] flex items-center justify-between">
       
        <div className="w-28 sm:w-36 lg:w-[142.336px] h-[68px] 
                bg-[#10124C] 
                [mask-image:url('/carpe_img.png')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]
                [-webkit-mask-image:url('/carpe_img.png')] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]">
        </div>
        
        <div
          id="hamburger-btn"
          className="absolute w-[23.65px] h-[23.65px] left-[358px] top-[39px] flex flex-col justify-between cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-full h-[3px] bg-black rounded"></span>
          <span className="block w-full h-[3px] bg-black rounded"></span>
          <span className="block w-full h-[3px] bg-black rounded"></span>
        </div>

        
        <nav className="hidden md:flex absolute left-[422px] top-[25px] w-[960px] h-[50px] gap-8 text-[#10124C] font-bold text-base">
          <a href="#about" className="px-2 py-1 hover:text-gray-700 transition-colors">About</a>
          <a href="#events" className="px-2 py-1 hover:text-gray-700 transition-colors">Events</a>
          <a href="#sponsors" className="px-2 py-1 hover:text-gray-700 transition-colors">Sponsors</a>
          <a href="#contact" className="px-2 py-1 hover:text-gray-700 transition-colors">Contact</a>
        </nav>

        {/*hamburger menu*/}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-[74px] left-[20px] w-[321.65px] bg-white rounded shadow-lg flex flex-col gap-2 p-3 z-50 md:hidden"
          >
            <a onClick={() => setMenuOpen(false)} href="#about" className="px-2 py-1 hover:text-gray-700 transition-colors">About</a>
            <a onClick={() => setMenuOpen(false)} href="#events" className="px-2 py-1 hover:text-gray-700 transition-colors">Events</a>
            <a onClick={() => setMenuOpen(false)} href="#sponsors" className="px-2 py-1 hover:text-gray-700 transition-colors">Sponsors</a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="px-2 py-1 hover:text-gray-700 transition-colors">Contact</a>
          </div>
        )}
      </header>

      {/*carpe-wave*/}
      <div
        className="
        absolute 
        top-[133px] left-[19.53px] w-[376.01px] h-[201.54px] 
        md:top-[125px] md:left-[265.78px] md:w-[908.44px] md:h-[434px]"
      >
        <img src="/carpe_img.png" alt="Carpedium" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-[293px] left-[50px] w-[54px] h-[33px] text-[#F7F1DC] font-['Playfair_Display'] font-bold text-[24.9136px] leading-[33px] text-center md:top-[529px] md:left-[335px] md:w-[138px] md:h-[85px] md:text-[64.115px] md:leading-[85px]">
          2025
      </div>

      <div className="absolute top-[251px] left-[-98.09px] w-[505.99px] h-[277px] md:top-[379px] md:left-[calc(50%-441px)] md:w-[882px] md:h-[482px]">
        <img src="/wave.png" alt="wave" className="w-full h-full object-contain" />
      </div>
        {/*bottom wave*/}
      <div className="absolute left-0 right-0 bottom-0 md:top-[782.47px] md:left-0 md:right-0 md:h-[238px] transform scale-x-[-1]">
         <img
          src="/buttom_wave.png"
          alt="bottom_wave"
          className=" w-full h-auto object-contain"
       />
      </div>
     
    </div>
  );
}

export default App;
