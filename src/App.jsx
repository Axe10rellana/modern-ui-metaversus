// Components
import { Footer, Navbar } from "./components";

// Sections
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "./sections";

const App = () => {
  return (
    <div className="overflow-hidden bg-primary-black">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default App;
