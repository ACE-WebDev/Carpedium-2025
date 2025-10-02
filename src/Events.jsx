import React, { useEffect, useMemo, useState } from "react";
import logoSvg from "./Mask group.svg";
import white_wave from "./Vector271.png";
import blue_wave from "./Vector270.png";
import bottom_wave from "./bottom_wave.png";
import { fetchEvents } from "./supabaseData"; // fetch from Supabase
import pattern from "./Pattern.png";

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
        const uniqueCategories = ["All", ...new Set(data.map((e) => e.category))];
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
          <div className="flex items-center relative">
            <img src={logoSvg} alt="logo" className="w-[142.34px] h-[68px] pt-[16px] pl-[56px] mobile-logo" />
            <nav className="desktop-nav absolute left-1/2 -translate-x-1/2 top-[16px] justify-end">
              <ul className="flex justify-center gap-[120px] font-bold text-xl items-center h-full">
                <li><a href="/" style={{ color: "#10124C" }}>Home</a></li>
                <li><a href="/events" style={{ color: "#10124C" }}>Events</a></li>
                <li><a href="/sponsors" style={{ color: "#10124C" }}>Sponsors</a></li>
                <li><a href="/contact" style={{ color: "#10124C" }}>Contact</a></li>
              </ul>
            </nav>

            {/* MOBILE MENU */}
            <button
              aria-label="Open menu"
              className="hidden mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#365E7C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            {menuOpen && (
              <div
                id="mobile-menu"
                className="fixed top-0 right-0 w-full border border-[#10124C] bg-[#365E7C] z-50 flex flex-col md:hidden"
              >
                <div className="flex justify-end p-4">
                  <button onClick={() => setMenuOpen(false)} className="text-[#f7f1dc] text-2xl font-bold">&times;</button>
                </div>
                {["About", "Events", "Sponsors", "Contact"].map((link) => (
                  <React.Fragment key={link}>
                    <a
                      onClick={() => setMenuOpen(false)}
                      href={`#${link.toLowerCase()}`}
                      className="px-40 py-3 text-lg font-medium text-[#f7f1dc]"
                    >
                      {link}
                    </a>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* HERO */}
          <div className="relative mt-[80px] mobile-hero">
            <img src={blue_wave} alt="wave" className="w-full h-auto" />
            <img src={white_wave} alt="wave" className="absolute top-0 left-0 w-full h-auto" />
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-event text-[128px] font-delirium mobile-events">
              EVENTS
            </h1>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-5 px-10 mt-6 filters-container">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-0 text-xl font-medium transition-colors border-3 border-[#365E7C] rounded-tl-md rounded-br-md desktop-buttons mt-[80px] mb-[80px] ${
                  category === selectedCategory
                    ? "bg-[#8EB7BD] text-white"
                    : "bg-[#8EB7BD] text-white hover:bg-[#365E7C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* EVENTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10 mobile-card-container">
            {visibleEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-card-color text-white shadow-lg rounded-tl-xl rounded-br-xl flex flex-col overflow-hidden mobile-card"
                style={{ width: "95%" }}
              >
                <div className="h-[220px] bg-bag-color rounded-tr-xl rounded-bl-xl m-4 overflow-hidden mobile-image">
                  {evt.image && <img src={evt.image} alt={evt.name} className="w-full h-full object-cover" />}
                </div>
                <div
                  className="flex flex-col justify-between flex-grow"
                  style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "120px 120px",
                  }}
                >
                  <div className="p-4 z-10 mobile-content">
                    <h2 className="text-2xl font-semibold mb-1 mobile-text">{evt.name}</h2>
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
                        <p className="font-medium">{evt.type || evt.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0 mobile-button">
                    <button
                      className="w-full py-3 bg-[#8EB7BD] hover:bg-[#799BA8] transition-colors font-medium rounded-lg"
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
            <div className="fixed inset-0 z-[60] flex items-center justify-center">
              <div className="absolute inset-0 bg-black/50 z-[40]" onClick={() => setIsModalOpen(false)} />
              <div className="relative z-[50] w-[92%] max-w-[640px] rounded-xl shadow-xl" style={{ backgroundColor: "#365E7C", color: "#8EB7BD" }}>
                <div className="flex items-start justify-between p-5 border-b border-[#365E7C]/30 rounded-t-xl">
                  <h3 className="text-2xl font-semibold">{selectedEvent.name}</h3>
                  <button aria-label="Close" className="ml-4 text-2xl leading-none" onClick={() => setIsModalOpen(false)}>×</button>
                </div>
                <div className="p-5 space-y-4">
                  {selectedEvent.image && (
                    <div className="h-[220px] w-full overflow-hidden rounded-lg">
                      <img src={selectedEvent.image} alt={selectedEvent.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <p className="opacity-90">{selectedEvent.description || `${selectedEvent.name} by ${selectedEvent.conductedBy}.`}</p>
                </div>
                <div className="p-5 pt-0 flex justify-end gap-3">
                  {selectedEvent?.glink ? (
                    <button
                      className="px-5 py-1 rounded-lg text-black inline-block border"
                      style={{ borderColor: "#365E7C", color: "#000000", backgroundColor: "#8EB7BD" }}
                      onClick={(e) => {
                        e.preventDefault();
                        if (selectedEvent?.glink) window.open(selectedEvent.glink, "_blank");
                        setIsModalOpen(false);
                      }}
                    >
                      Register
                    </button>
                  ) : (
                    <button className="px-5 py-1 rounded-lg text-white opacity-60 cursor-not-allowed border" style={{ borderColor: "#365E7C", color: "#000000", backgroundColor: "#8EB7BD" }} disabled>
                      Register
                    </button>
                  )}
                  <button className="px-5 py-1 rounded-lg border" style={{ borderColor: "#365E7C", color: "#000000", backgroundColor: "#8EB7BD" }} onClick={() => setIsModalOpen(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="h-auto bottom-0">
            <img src={bottom_wave} className="h-auto w-full" />
          </div>
        </>
      )}
    </div>
  );
}

export default Events;
