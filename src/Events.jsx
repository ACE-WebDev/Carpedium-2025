import React, { useMemo, useState } from "react";
import logoSvg from "./Mask group.svg";
import white_wave from "./Vector271.png"
import blue_wave from "./Vector270.png"
import bottom_wave from "./bottom_wave.png"
import { events, eventCategories } from "./data/events";
import pattern from "./Pattern.svg"

function Events(){
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = eventCategories;

  const visibleEvents = useMemo(() => {
    if (selectedCategory === "All") return events;
    return events.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);
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
      <div className="flex p-4 flex-wrap">
  {visibleEvents.map((evt) => (
    <div
      key={evt.id}
      className="w-[400px] h-[638px] bg-card-color text-white shadow-lg rounded-tl-xl rounded-br-xl mx-4 mb-6 flex flex-col justify-between overflow-hidden"
    >
      {/* IMAGE SECTION*/}
      <div className="h-[300px] bg-bag-color rounded-tr-xl rounded-bl-xl m-4 p-4 flex items-center justify-center">
        {evt.image ? (
          <img
            src={evt.image}
            alt={evt.name}
            className="max-h-full max-w-full object-contain"
          />
        ) : null}
      </div>

      {/* CONTENT + PATTERN */}
      <div
        className="flex flex-col justify-between flex-grow"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "120px 120px",
          opacity: 1,
           // keeps text visible while showing pattern
        }}
      >
        {/* TEXT */}
        <div className="p-4 z-10">
          <h2 className="text-3xl font-semibold mb-1">{evt.name}</h2>
          <p className="text-sm opacity-75 mb-6">by {evt.conductedBy}</p>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm mb-8">
            <div>
              <p className="uppercase text-xs opacity-50">Date</p>
              <p className="font-medium">{evt.date}</p>
            </div>
            <div>
              <p className="uppercase text-xs opacity-50">Time</p>
              <p className="font-medium">{evt.time}</p>
            </div>
            <div>
              <p className="uppercase text-xs opacity-50">Location</p>
              <p className="font-medium">{evt.location}</p>
            </div>
            <div>
              <p className="uppercase text-xs opacity-50">Type</p>
              <p className="font-medium">{evt.type}</p>
            </div>
          </div>
        </div>
          {/* button */}
          <div className="p-4 pt-0">
            <button className="w-full py-3 bg-[#698B99] hover:bg-[#799BA8] transition-colors font-medium rounded-lg">
              View Details
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="h-auto bottom-0  "> 
<img src={bottom_wave} className="h-auto w-full "/>
  </div>
</div>
)
}
export default Events
