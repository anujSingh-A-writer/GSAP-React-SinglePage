import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/layout/header";
import TeamWriter from "./components/teamWriter";
import DigitCover from "./components/digitCover";
import Footer from "./components/layout/footer";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const main = useRef(null);

  return (
    <>
      <Header />
      <main ref={main} className="bg-black">
        <TeamWriter mainRef={main} />
        <DigitCover mainRef={main} />
      </main>
      <Footer />
    </>
  );
}

export default App;
