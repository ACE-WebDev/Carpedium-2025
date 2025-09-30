import React, { useMemo, useState } from "react";
import logoSvg from "./Mask group.svg";
import white_wave from "./Vector271.png"
import blue_wave from "./Vector270.png"
import bottom_wave from "./bottom_wave.png"
import { events, eventCategories } from "./data/events";
import pattern from "./Pattern.png"

function Events(){
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = eventCategories;

  const visibleEvents = useMemo(() => {
    if (selectedCategory === "All") return events;
    return events.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);
return (
<div className="bg-bag-color min-h-screen relative">
  <style>
    {`
      @media (max-width: 767px) {
        .mobile-dropdown-wrapper {
          display: block !important;
          width: 100% !important;
        }
        .mobile-dropdown {
          display: block !important;
          width: 100% !important;
        }
        .mobile-logo {
          margin-left: 20px !important;
          padding-left: 0 !important;
        }
        .desktop-nav {
          display: none !important;
        }
        .mobile-menu-button {
          display: block !important;
          position: absolute !important;
          right: 20px !important;
          top: 22px !important;
        }
        .mobile-menu-panel {
          position: absolute !important;
          right: 16px !important;
          top: 64px !important;
          background: #8EB7BD !important;
          border: 3px solid #365E7C !important;
          border-radius: 8px !important;
          padding: 12px 16px !important;
          z-index: 50 !important;
        }
        .mobile-menu-link {
          color: #10124C !important;
          font-weight: 700 !important;
          display: block !important;
          padding: 8px 4px !important;
        }
        .mobile-events {
          font-size: 48px !important;
          width: 90% !important;
          text-align: center !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        .mobile-hero {
          margin-top: 40px !important;
        }
        .desktop-buttons {
          display: none !important;
        }
        .filters-container {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
        .mobile-card {
          width: 100% !important;
          height: auto !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          margin-bottom: 16px !important;
        }
        .mobile-image {
          height: 200px !important;
          margin: 0 !important;
          padding: 0 !important;
          background-color: transparent !important;
        }
        .mobile-content {
          padding: 8px !important;
        }
        .mobile-text {
          font-size: 20px !important;
        }
        .mobile-subtext {
          font-size: 12px !important;
          margin-bottom: 16px !important;
        }
        .mobile-grid {
          grid-template-columns: 1fr !important;
          gap: 8px 0 !important;
          margin-bottom: 16px !important;
        }
        .mobile-button {
          padding: 8px !important;
          font-size: 14px !important;
        }
        .mobile-card-container {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
      }
    `}
  </style>
   <div className="flex items-center relative">
  <img src={logoSvg} alt="logo" className="w-[142.34px] h-[68px] pt-[16px] pl-[56px] mobile-logo"/>
  <nav
    style={{
      width: "auto",
      height: "50px",
      marginTop: "0px",
    }}
    className="desktop-nav absolute left-1/2 -translate-x-1/2 top-[16px]"
  >
    <ul className="flex justify-center gap-[120px] font-bold items-center h-full">
      <li><a href="#about" style={{ color: "#10124C" }}>About</a></li>
      <li><a href="#events" style={{ color: "#10124C" }}>Events</a></li>
      <li><a href="#sponsors" style={{ color: "#10124C" }}>Sponsors</a></li>
      <li><a href="#contact" style={{ color: "#10124C" }}>Contact</a></li>
    </ul>
  </nav>
  <button
    aria-label="Open menu"
    className="hidden mobile-menu-button"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#365E7C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </button>
  {isMenuOpen ? (
    <div className="mobile-menu-panel">
      {/* navigate to about,contact,sponsors section */}
      <a href="#about" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>About</a> 
      <a href="#events" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Events</a>
      <a href="#sponsors" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Sponsors</a>
      <a href="#contact" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </div>
  ) : null}
  </div>
  <div className="relative mt-[120px] mobile-hero">
   <img src={blue_wave} alt="wave"
    className="w-full h-auto "/>
 <img src={white_wave} alt="wave" className=" absolute top-0 left-0 w-full h-auto" />
<h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-event text-[128px] font-delirium mobile-events">EVENTS</h1>
  </div>
  <div className="flex flex-wrap justify-center gap-5 px-10 mt-6 filters-container">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-0 text-xl font-medium transition-colors border-3 border-[#365E7C] rounded-tl-sm rounded-br-sm desktop-buttons mt-[100px] mb-[100px] ${
              category === selectedCategory
                ? "bg-[#8EB7BD] text-white"
                : "bg-[#8EB7BD] text-white hover:bg-[#365E7C]"
            }`}

          >
            {category}
          </button>
        ))}
        <div className="hidden mobile-dropdown-wrapper relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mobile-dropdown w-full pr-12 px-4 py-3 text-xl font-medium border-3 border-[#365E7C] rounded-tl-sm rounded-br-sm bg-[#8EB7BD] text-[#10124C] focus:outline-none appearance-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
          >
            <path d="M7 10l5 5 5-5" fill="none" stroke="#365E7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="flex p-4 flex-wrap justify-start mobile-card-container">
      
        {visibleEvents.map((evt) => (
          <div
            key={evt.id}
            className="w-[400px] h-[638px] bg-card-color text-white shadow-lg rounded-tl-xl rounded-br-xl mx-4 mb-6 flex flex-col justify-between overflow-hidden mobile-card"
          >
            {/* IMAGE SECTION */}
            <div className="h-[300px] bg-bag-color rounded-tr-xl rounded-bl-xl m-4 p-0 overflow-hidden mobile-image">
              {evt.image ? (
                <img src={evt.image} alt={evt.name} className="w-full h-full object-cover" />
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
              }}
            >
              {/* TEXT */}
              <div className="p-4 z-10 mobile-content">
                <h2 className="text-3xl font-semibold mb-1 mobile-text">{evt.name}</h2>
                <p className="text-sm opacity-75 mb-6 mobile-subtext">by {evt.conductedBy}</p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm mb-8 mobile-grid">
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
              {/* BUTTON */}
              <div className="p-4 pt-0 mobile-button">
                <button className="w-full py-3 bg-[#8EB7BD] hover:bg-[#799BA8] transition-colors font-medium rounded-lg">
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
//add footer component here
)

}
export default Events
