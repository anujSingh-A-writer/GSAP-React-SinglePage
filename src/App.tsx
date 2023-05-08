import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "./components/layout";
import Header from "./components/layout/header";
import TeamWriter from "./components/teamWriter";
import DigitCover from "./components/digitCover";
import Footer from "./components/layout/footer";
import { layout } from "./styles";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            id: "digitDiv",
            trigger: ".digitDiv",
            start: "top 10%", //animation start at this point
            end: "bottom 90%", //animation end at this point
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          ".h1digit",
          { x: window.innerWidth * 1, opacity: 0, scale: 0.5 },
          { x: "", opacity: 1, scale: 1, duration: 1, ease: "liner" }
        )
        .fromTo(
          ".h1digitCover",
          { x: window.innerWidth * -1, opacity: 0, scale: 0.5 },
          { x: "", opacity: 1, scale: 1, duration: 1, ease: "liner" }
        )
        .fromTo(
          ".pdigit",
          { y: window.innerWidth * 1, opacity: 0, scale: 0.5 },
          { y: "", opacity: 1, scale: 1, duration: 1, ease: "liner" }
        )
        .fromTo(
          ".buttonDigit",
          { y: window.innerWidth * -1, opacity: 0, scale: 0.5 },
          { y: "", opacity: 1, scale: 1, duration: 1, ease: "liner" }
        );
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={main}>
      <Layout
        header={<Header />}
        main={
          <div
            className={`${layout.flex.directionCol.itemsCenter} gap-40 bg-black`}
          >
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
