import React ,  { useEffect, useRef }  from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoSponsorList=["/images/AussieBites.jpg",
                   "/images/BharatSnacks.png",
                   "/images/BOCSPIZZA.jpg",
                   "/images/CLUTCHX.jpg",
                   "/images/cuephoria.png",
                   "/images/Koblerr.png",
                   "/images/PS4.png",
                   "/images/Shyyne.jpg",
                   "/images/StockEdge.png",
                   "/images/Touriga.png",
                   "/images/whitehouse.png",
];
const Sponsors = () => {
  const containerRef = useRef(null);
   useEffect(() => {
      const cards = containerRef.current.querySelectorAll(".sponsor-card");
  
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.2, // animate one after another
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // when container enters viewport
            toggleActions: "play none none none", // only play once
          },
        }
      );
    }, []);

return (
    <div ref={containerRef} className="flex flex-col items-center p-8 bg-[#8EB7BD]">
      <h2 className="text-8xl font-bold text-white mb-8 font-['DeliriumNCV']">
        SPONSORS
      </h2>

      <div className="grid grid-cols-4 gap-6 w-full max-w-5xl">
        {/* Top 3 Sponsors in a row */}
        {/* Next 5 Sponsors in individual columns */}
        {CoSponsorList.slice(0, 8).map((src, index) => (
          <div
            key={index + 3}
            className="col-span-1 sponsor-card bg-[#365E7C] h-[156px] rounded-[8px] flex items-center justify-center"
          >
            <img src={src} alt={`Sponsor ${index + 4}`} className="w-full h-full object-contain p-2" />
          </div>
        ))}

        {/* Bottom row of 3 fixed-size sponsor cards */}
        <div className="col-span-4 sponsor-card flex justify-center gap-6 mt-6">
          {CoSponsorList.slice(8,11).map((src, idx) => (
              <div
                key={idx}
                className="bg-[#365E7C] h-[156px] w-[250px] rounded-[8px]"
              >
                            <img src={src}  className="w-full h-full object-contain p-2" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
  }
export default Sponsors;