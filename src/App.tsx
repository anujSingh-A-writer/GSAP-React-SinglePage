import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "./components/layout";
import Header from "./components/layout/header";
import TeamWriter from "./components/teamWriter";
import DigitCover from "./components/digitCover";
import Footer from "./components/layout/footer";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            id: "digitDiv",
            trigger: ".digitDiv",
            start: "top 10%", //animation start at this point
            end: "bottom 10%", //animation end at this point
            scrub: 1,
            pin: true,
          },
        })
        .from(".h1digit", { x: window.innerWidth * 1, opacity: 0, scale: 0.5 })
        .from(".h1digitCover", {
          x: window.innerWidth * -1,
          opacity: 0,
          scale: 0.5,
        })
        .from(".pdigit", { y: window.innerWidth * 1, opacity: 0, scale: 0.5 })
        .from(".buttonDigit", {
          y: window.innerWidth * -1,
          opacity: 0,
          scale: 0.5,
        });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={main}>
      <Layout
        header={<Header />}
        main={
          <div className="bg-black">
            <TeamWriter />
            <DigitCover />
          </div>
        }
        footer={<Footer />}
      />
    </div>
  );
}

export default App;
