import LandingPage from "./landingpage";
import About_App from "./About_App";
import { Footer } from "../Footer";
import Sponsors from "./sponsors/Sponsors";

function Home() {
  return (
    <div>
      <LandingPage />
      <About_App />
      <Sponsors/>
      <Footer />
    </div>
  );
}

export default Home;
