import { useState, useEffect } from "react";
function LandingPage() {
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
  <div className="relative min-h-screen bg-[#8EB7BD] overflow-x-hidden ">

    <header className="md:top-[16px] md:left-[58.02px] md:w-[1323.98px] md:h-[68px] w-[361.65px] h-[44.12px] top-[29px] left-[20px] ">
     <div className="md:w-[142.34px] md:h-[68px] md:top-[16px] md:left-[58.02px]  w-[92.36px] h-[44.12px] top-[29px] left-[20px] ">

      <div className=" absolute md:w-[151.61px] md:h-[81.26px] md:top-[12.98px] md:left-[55.82px]  w-[98.38px] h-[52.73px] top-[27.04px] left-[18.57px]
              bg-[#10124C] 
              [mask-image:url('/carpe_img.png')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]
              [-webkit-mask-image:url('/carpe_img.png')] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]">
      </div>

    </div>
      
    <div
      id="hamburger-btn"
      className="fixed w-[23.65px] h-[23.65px] left-[358px] top-[39px] flex flex-col gap-1 md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
        <span className="w-[17.74px] h-[9.86px] top-[6.9px] left-[2.96px] border-[1px] bg-[#10124C]"></span>
        <span className="w-[17.74px] h-[9.86px] top-[6.9px] left-[2.96px] border-[1px] bg-[#10124C]"></span>
        <span className="w-[17.74px] h-[9.86px] top-[6.9px] left-[2.96px] border-[1px] bg-[#10124C]"></span>
    </div>




    <nav className=" md:w-[960px] md:h-[50px] md:top-[25px] md:rounded-tl-[8px] md:rounded-br-[8px] hidden md:block">
    <a 
      href="#about" 
      className=" md:w-[60px] md:h-[25px] md:top-[37px] md:left-[422px] font-lexend Deca weight-[500] font-medium text-[20px] md:absolute flex items-center justify-between leading-[100%] line-spacing-[0%] text-[#10124C] transition-all duration-300 ease-out hover:scale-105"
    >
     About
    </a>
    <a
      href="#events" 
      className=" md:w-[66px] md:h-[25px] md:top-[37px] md:left-[582px] font-lexend Deca weight-[500] font-medium text-[20px] md:absolute flex items-center justify-between leading-[100%] line-spacing-[0%] text-[#10124C] transition-all duration-300 ease-out hover:scale-105"
    >
      Events
    </a>
    <a 
      href="#sponsors" 
      className="md:w-[91px] md:h-[25px] md:top-[37px] md:left-[748px] font-lexend Deca weight-[500] font-medium text-[20px] md:absolute flex items-center justify-between leading-[100%] line-spacing-[0%] text-[#10124C] transition-all duration-300 ease-out hover:scale-105"
    >
      Sponsors
    </a>
    <a 
      href="#contact" 
      className="md:w-[78px] md:h-[25px] md:top-[37px] md:left-[939px] font-lexend Deca weight-[500] font-medium text-[20px] md:absolute flex items-center justify-between leading-[100%] line-spacing-[0%] text-[#10124C] transition-all duration-300 ease-out hover:scale-105"
    >
    Contact
    </a>
    </nav>


{menuOpen && (
<div
  id="mobile-menu"
  className="fixed top-0 right-0 w-full border border-[#10124C] bg-[#365E7C] z-50 flex flex-col md:hidden"
>
  {/* Close Button */}
  <div className="flex justify-end p-4">
    <button
      onClick={() => setMenuOpen(false)}
      className="text-[#f7f1dc] text-2xl font-bold"
    >
      &times;
    </button>
  </div>

  {/* Menu Links */}
  <a
    onClick={() => setMenuOpen(false)}
    href="#about"
    className="px-40 py-3 text-lg font-medium text-[#f7f1dc]"
  >
    About
  </a>
  <hr />
  <a
    onClick={() => setMenuOpen(false)}
    href="#events"
    className="px-40 py-3 text-lg font-medium text-[#f7f1dc]"
  >
    Events
  </a>
  <hr />
  <a
    onClick={() => setMenuOpen(false)}
    href="#sponsors"
    className="px-40 py-3 text-lg font-medium text-[#f7f1dc]"
  >
    Sponsors
  </a>
  <hr />
  <a
    onClick={() => setMenuOpen(false)}
    href="#contact"
    className="px-40 py-3 text-lg font-medium text-[#f7f1dc]"
  >
    Contact
  </a>
</div>
)}


</header>
  

    {/*carpe-wave*/}
    <div className="md:w-[967.66px] md:h-[518.66px] md:top-[105.71px] md:left-[251.71px] w-[376.01px] h-[201.54px] top-[133.5px] left-[19.53px]">
    <div
      className="
      absolute 
      top-[141px] left-[25px] w-[353px] h-[168.64px] 
      md:top-[125px] md:left-[265.78px] md:w-[908.44px] md:h-[434px]"
    >
      <img src="/carpe_img.png" alt="Carpedium" className="w-full h-full object-contain" />
    </div>
    <div className="absolute top-[293px] left-[50px] w-[54px] h-[33px] text-[#F7F1DC] font-['Playfair_Display'] font-bold text-[24.9136px] leading-[33px] text-center md:top-[529px] md:left-[335px] md:w-[138px] md:h-[85px] md:text-[64.115px] md:leading-[85px]">
        2025
    </div>
    </div>

    <div className="absolute top-[251px] left-[-98.09px] w-[505.99px] h-[277px] md:top-[379px] md:left-[279px] md:w-[882px] md:h-[482px]">
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
export default LandingPage;