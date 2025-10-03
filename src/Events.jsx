import React, { useEffect, useMemo, useState } from "react";
import logoSvg from "./Mask group.svg";
import white_wave from "/Vector271.png";
import blue_wave from "/Vector270.png";
import bottom_wave from "/bottom_wave.png";
import { fetchEvents } from "./supabaseData"; // fetch from Supabase
import pattern from "./Pattern.png";
import { Footer } from "./Footer";

function Events() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from Supabase
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const data = await fetchEvents();
        setEvents(data);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(data.map((e) => e.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Filter events by category
  const visibleEvents = useMemo(() => {
    if (selectedCategory === "All") return events;
    return events.filter((e) => e.category === selectedCategory);
  }, [selectedCategory, events]);

  return (
    <div className="bg-bag-color min-h-screen relative">
      {loading && (
        <div className="flex justify-center items-center h-screen text-xl font-bold">
          Loading events...
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center h-screen text-red-600 text-xl font-bold">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          {/* NAVBAR */}
          <div className="flex items-center px-4 md:px-8 py-4 relative">
            {/* Logo */}
            <img
              src={logoSvg}
              alt="logo"
              className="w-[80px] h-[40px] md:w-[142px] md:h-[68px]"
            />

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex gap-8 lg:gap-16 xl:gap-24 font-bold text-lg lg:text-xl items-center">
                <li>
                  <a href="/" style={{ color: "#10124C" }} className="hover:opacity-70 transition-opacity">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/events" style={{ color: "#10124C" }} className="hover:opacity-70 transition-opacity">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/sponsors" style={{ color: "#10124C" }} className="hover:opacity-70 transition-opacity">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="/contact" style={{ color: "#10124C" }} className="hover:opacity-70 transition-opacity">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              aria-label="Open menu"
              className="md:hidden z-50 ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#365E7C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
              <div className="fixed inset-0 z-40 md:hidden bg-[#10124C]">
                <div className="flex flex-col h-full">
                  {/* Close Button */}
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-2xl font-bold hover:opacity-70 transition-opacity"
                    >
                      ×
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col justify-center items-center flex-grow space-y-8">
                    {["Home", "Events", "Sponsors", "Contact"].map((link) => (
                      <a
                        key={link}
                        onClick={() => setMenuOpen(false)}
                        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                        className="text-white text-2xl font-bold hover:opacity-70 transition-opacity"
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </div>

          {/* HERO */}
          <div className="relative mt-8 md:mt-20">
            <img src={blue_wave} alt="wave" className="w-full h-auto" />
            <img
              src={white_wave}
              alt="wave"
              className="absolute top-0 left-0 w-full h-auto"
            />
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-event-color font-delirium text-4xl sm:text-6xl  temd:text-8xl lg:text-9xl xl:text-[128px] text-center">
              EVENTS
            </h1>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 sm:px-6 md:px-10 mt-8 md:mt-16 mb-8 md:mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg md:text-xl font-medium transition-all duration-200 border-2 border-[#365E7C] rounded-tl-md rounded-br-md ${category === selectedCategory
                    ? "bg-[#365E7C] text-white scale-105"
                    : "bg-[#8EB7BD] text-white hover:bg-[#365E7C] hover:scale-105"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* EVENTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10">
            {visibleEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-card-color text-white shadow-lg rounded-tl-xl rounded-br-xl flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-[180px] sm:h-[200px] md:h-[220px] bg-bag-color rounded-tr-xl rounded-bl-xl m-3 sm:m-4 overflow-hidden">
                  {evt.image && (
                    <img
                      src={evt.image}
                      alt={evt.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div
                  className="flex flex-col justify-between flex-grow"
                  style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "80px 80px",
                  }}
                >
                  <div className="p-3 sm:p-4 z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 line-clamp-2">
                      {evt.name}
                    </h2>
                    <p className="text-xs sm:text-sm opacity-75 mb-4 sm:mb-6">
                      by {evt.conductedBy}
                    </p>
                    <div className="grid grid-cols-2 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-6 text-xs sm:text-sm mb-6 sm:mb-8">
                      <div>
                        <p className="uppercase text-xs opacity-50 mb-1">Date</p>
                        <p className="font-medium line-clamp-1">{evt.date}</p>
                      </div>
                      <div>
                        <p className="uppercase text-xs opacity-50 mb-1">Time</p>
                        <p className="font-medium line-clamp-1">{evt.time}</p>
                      </div>
                      <div>
                        <p className="uppercase text-xs opacity-50 mb-1">Location</p>
                        <p className="font-medium line-clamp-1">{evt.location}</p>
                      </div>
                      <div>
                        <p className="uppercase text-xs opacity-50 mb-1">Type</p>
                        <p className="font-medium line-clamp-1">
                          {evt.type || evt.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 pt-0">
                    <button
                      className="w-full py-2 sm:py-3 bg-[#8EB7BD] hover:bg-[#799BA8] transition-colors font-medium rounded-lg text-sm sm:text-base"
                      onClick={() => {
                        setSelectedEvent(evt);
                        setIsModalOpen(true);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL */}
          {isModalOpen && selectedEvent && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-black/50 z-[40]"
                onClick={() => setIsModalOpen(false)}
              />
              <div
                className="relative z-[50] w-full max-w-[640px] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl"
                style={{ backgroundColor: "#365E7C", color: "#8EB7BD" }}
              >
                <div className="flex items-start justify-between p-4 sm:p-5 border-b border-[#365E7C]/30 rounded-t-xl sticky top-0 bg-[#365E7C]">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold pr-4">
                    {selectedEvent.name}
                  </h3>
                  <button
                    aria-label="Close"
                    className="ml-4 text-xl sm:text-2xl leading-none hover:opacity-70 transition-opacity flex-shrink-0"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="p-4 sm:p-5 space-y-4">
                  {selectedEvent.image && (
                    <div className="h-[160px] sm:h-[180px] md:h-[220px] w-full overflow-hidden rounded-lg">
                      <img
                        src={selectedEvent.image}
                        alt={selectedEvent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="space-y-3">
                    <p className="opacity-90 text-sm sm:text-base leading-relaxed">
                      {selectedEvent.description ||
                        `${selectedEvent.name} by ${selectedEvent.conductedBy}.`}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <p className="text-xs opacity-50 uppercase mb-1">Date</p>
                        <p className="font-medium">{selectedEvent.date}</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-50 uppercase mb-1">Time</p>
                        <p className="font-medium">{selectedEvent.time}</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-50 uppercase mb-1">Location</p>
                        <p className="font-medium">{selectedEvent.location}</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-50 uppercase mb-1">Type</p>
                        <p className="font-medium">{selectedEvent.type || selectedEvent.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-0 flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0 bg-[#365E7C] rounded-b-xl">
                  {selectedEvent?.glink ? (
                    <button
                      className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-black inline-block border text-sm sm:text-base font-medium hover:opacity-80 transition-opacity"
                      style={{
                        borderColor: "#365E7C",
                        color: "#000000",
                        backgroundColor: "#8EB7BD",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        if (selectedEvent?.glink)
                          window.open(selectedEvent.glink, "_blank");
                        setIsModalOpen(false);
                      }}
                    >
                      Register
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-black opacity-60 cursor-not-allowed border text-sm sm:text-base font-medium"
                      style={{
                        borderColor: "#365E7C",
                        color: "#000000",
                        backgroundColor: "#8EB7BD",
                      }}
                      disabled
                    >
                      Register
                    </button>
                  )}
                  <button
                    className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg border text-sm sm:text-base font-medium hover:opacity-80 transition-opacity"
                    style={{
                      borderColor: "#365E7C",
                      color: "#000000",
                      backgroundColor: "#8EB7BD",
                    }}
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="h-auto -mb-px">
            <img src={bottom_wave} className="h-auto w-full" />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Events;