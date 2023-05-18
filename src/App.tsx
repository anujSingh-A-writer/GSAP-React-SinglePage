import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/layout/header";
import TeamWriter from "./components/teamWriter";
import DigitCover from "./components/digitCover";
import Footer from "./components/layout/footer";
import Layout from "./components/layout";
import Resources from "./components/resources";
import WelcomeKilt from "./components/welcome";
import Kilt from "./components/kilt";
import LandingSection from "./components/landing";
import FollowUs from "./components/followUs";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  return (
    <Layout
      header={<Header />}
      main={
        <main ref={mainRef}>
          <LandingSection mainRef={mainRef} />
          <Kilt />
          <WelcomeKilt mainRef={mainRef} />
          <Resources mainRef={mainRef} />
          <div className="bg-black">
            <FollowUs mainRef={mainRef} />
            <TeamWriter mainRef={mainRef} />
            <DigitCover mainRef={mainRef} />
          </div>
        </main>
      }
      footer={<Footer />}
    />
  );
}

export default App;
