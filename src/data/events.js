import designClubImg from "../design_club.png";
import paperDressImg from "../paper_dress.jpg";
import streetDanceImg from "../street_dance.jpg";

export const events = [
  {
    id: "designathon-2023",
    name: "Designathon",
    conductedBy: "300DPI",
    category: "Design",
    date: "17 Nov 2023",
    time: "9:00AM - 12:00PM",
    location: "JVC Auditorium",
    type: "Solo Event",
    image: designClubImg
  },
  {
    id: "dance-showdown",
    name: "Dance Showdown",
    conductedBy: "Insiders",
    category: "Dance",
    date: "18 Nov 2023",
    time: "2:00PM - 5:00PM",
    location: "Main Stage",
    type: "Team Event",
    image: streetDanceImg
  },
  {
    id: "lens-photo-walk",
    name: "Lens Photo Walk",
    conductedBy: "Photography Club",
    category: "Photography",
    date: "19 Nov 2023",
    time: "7:00AM - 10:00AM",
    location: "Campus Grounds",
    type: "Solo Event",
    image: null
  },
   // existing events...
   {
    id: "paper-dressing",
    name: "Paper Dressing",
    conductedBy: "Arts Gumble",
    category: "Arts", // or "Tech" if you add that category
    date: "20 Nov 2023",
    time: "11:00AM - 1:00PM",
    location: "JNC",
    type: "Team Event",
    image: paperDressImg
  },
  {
    id: "ui-ux-workshop",
    name: "UI/UX Workshop",
    conductedBy: "300DPI",
    category: "Design",
    date: "21 Nov 2023",
    time: "3:00PM - 5:00PM",
    location: "Seminar Hall",
    type: "Team Event",
    image: null
  }

];

export const eventCategories = [
  "All",
  ...Array.from(new Set(events.map((e) => e.category)))
];


