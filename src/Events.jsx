import logoSvg from "./Mask group.svg";
import white_wave from "./Vector271.png"
import blue_wave from "./Vector270.png"
import bottom_wave from "./bottom_wave.png"
function Events(){
return (
<div className="bg-bag-color min-h-screen relative">
   <div className="flex flex-wrap">
  <img src={logoSvg} alt="logo" className="w-[142.34px] h-[68px] pt-[16px] pl-[56px]"/>
  
  
  </div>
  <div className="relative mt-[120px]">
   <img src={blue_wave} alt="wave"
    className="w-full h-auto "/>
 <img src={white_wave} alt="wave" className=" absolute top-0 left-0 w-full h-auto" />
 <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-event-color text-[128px] font-delirium">EVENTS</h1>
  </div>
  <div>buttons</div>
<div className="flex p-4">
  {/* The Card Container - ADD: flex, flex-col, justify-between */}
  <div className="w-[400px] h-[638px] bg-card-color text-white shadow-lg rounded-tl-xl rounded-br-xl mx-4 flex flex-col justify-between">
    
    {/* Top Section Wrapper - Holds Image and Text/Details */}
    <div>
      {/* Image/Top Placeholder Area (The m-4 class gives margin all around, creating the inner border effect) */}
      <div className=" h-56 bg-bag-color rounded-tr-xl rounded-bl-xl m-4 p-4 flex items-center justify-center">
          {/* Placeholder for the image/design area */}
      </div>
      
      {/* Card Body and Content */}
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-1">Designathon</h2>
        <p className="text-sm opacity-75 mb-6">by 300DPI</p>

        {/* Date/Time/Location/Type Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm mb-8">
          <div>
            <p className="uppercase text-s opacity-50">Date</p>
            <p className="font-md">17 Nov 2023</p>
          </div>
          <div>
            <p className="uppercase text-s opacity-50">Time</p>
            <p className="font-medium">9:00AM - 12:00PM</p>
          </div>
          <div>
            <p className="uppercase text-xs opacity-50">Location</p>
            <p className="font-medium">JVC Auditorium</p>
          </div>
          <div>
            <p className="uppercase text-xs opacity-50">Type</p>
            <p className="font-medium">Solo Event</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* View Details Button - Moved outside the main text content, ADD: p-4 for button padding */}
    <div className="p-4 pt-0">
      <button className="w-full py-3 bg-[#698B99] hover:bg-[#799BA8] transition-colors font-medium rounded-lg">
        View Details
      </button>
    </div>
  </div>
</div>
      
  <div className="h-auto bottom-0  "> 
<img src={bottom_wave} className="h-auto w-full "/>
  </div>
</div>
)
}
export default Events