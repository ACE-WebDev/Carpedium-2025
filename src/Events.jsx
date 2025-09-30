import React, { useState } from "react";
import logoSvg from "./Mask group.svg";
import white_wave from "./Vector271.png"
import blue_wave from "./Vector270.png"
import bottom_wave from "./bottom_wave.png"
function Events(){
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Dance",
    "Design",
    "Photography",
    "Dance",
    "Design",
    "Photography",
    "Dance",
    "Design",
    "Photography",
    "Dance",
    "Design",
    "Design",
    "Photography"
  ];
return (
<div className="bg-bag-color min-h-screen relative">
   <div className="flex flex-wrap">
  <img src={logoSvg} alt="logo" className="w-[142.34px] h-[68px] pt-[16px] pl-[56px]"/>
  
  
  </div>
  <div className="relative mt-[120px]">
   <img src={blue_wave} alt="wave"
    className="w-full h-auto "/>
 <img src={white_wave} alt="wave" className=" absolute top-0 left-0 w-full h-auto" />
  </div>
  <div className="flex flex-wrap justify-center gap-5 px-50 mt-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-0 text-xl font-medium transition-colors border-3 border-[#365E7C] rounded-tl-sm rounded-br-sm ${
              category === selectedCategory
                ? "bg-[#8EB7BD] text-white"
                : "bg-[#8EB7BD] text-white hover:bg-[#365E7C]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div>cards</div>
  <div className="h-auto bottom-0  "> 
<img src={bottom_wave} className="h-auto w-full "/>
  </div>
</div>
)
}
export default Events
