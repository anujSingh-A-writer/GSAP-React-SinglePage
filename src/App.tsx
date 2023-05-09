import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/layout/header";
import TeamWriter from "./components/teamWriter";
import DigitCover from "./components/digitCover";
import Footer from "./components/layout/footer";
import Layout from "./components/layout";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const mainRef = useRef(null);

  return (
    <Layout
      header={<Header />}
      main={
        <main ref={mainRef} className="bg-black">
          <TeamWriter mainRef={mainRef} />
          <DigitCover mainRef={mainRef} />
        </main>
      }
      footer={<Footer />}
    />
  );
}

export default App;
