import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/layout/header";
import TeamWriter from "./components/teamWriter";
import DigitCover from "./components/digitCover";
import Footer from "./components/layout/footer";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section one denotes Team Writer division. START
      // Left Div
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_one",
            start: "top top", //animation start at this point
            end: "bottom top", //animation end at this point
            scrub: 1,
            pin: true,
          },
        })
        .from("#section_one .h1", {
          y: "70%",
          stagger: {
            each: 1,
          },
        })
        .from("#section_one .p1", {
          y: window.innerWidth * 1,
          opacity: 0,
          scale: 0.5,
        })
        .from("#section_one .p2", {
          y: window.innerWidth * 1,
          opacity: 0,
          scale: 0.5,
        })
        .from("#section_one .b1", {
          y: window.innerWidth * 1,
          opacity: 0,
          scale: 0.5,
        });
      // Right Div
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_one .div1",
            start: "top top", //animation start at this point
            end: "bottom top", //animation end at this point
            scrub: 1,
          },
        })
        .fromTo(
          [
            "#section_one .imgdiv1 .img1",
            "#section_one .imgdiv1 .img2",
            "#section_one .imgdiv1 .img3",
            "#section_one .imgdiv1 .img4",
            "#section_one .imgdiv1 .img5",
            "#section_one .imgdiv1 .img6",
            "#section_one .imgdiv1 .img7",
            "#section_one .imgdiv1 .img8",
            "#section_one .imgdiv1 .img9",
            "#section_one .imgdiv1 .img10",
            "#section_one .imgdiv1 .img11",
            "#section_one .imgdiv1 .img12",
          ],
          { y: "100%" },
          { y: "-100%", duration: 5, ease: "linear" }
        )
        .fromTo(
          [
            "#section_one .imgdiv2 .img1",
            "#section_one .imgdiv2 .img2",
            "#section_one .imgdiv2 .img3",
            "#section_one .imgdiv2 .img4",
            "#section_one .imgdiv2 .img5",
            "#section_one .imgdiv2 .img6",
            "#section_one .imgdiv2 .img7",
            "#section_one .imgdiv2 .img8",
            "#section_one .imgdiv2 .img9",
            "#section_one .imgdiv2 .img10",
            "#section_one .imgdiv2 .img11",
            "#section_one .imgdiv2 .img12",
          ],
          { y: "-100%" },
          { y: "100%", duration: 5, ease: "linear" }
        );
      // Section one denotes Team Writer division. END

      // Section two denotes Digit & Cover division. START
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_two",
            start: "top 10%",
            end: "bottom 10%",
            scrub: true,
            pin: true,
          },
        })
        .from("#section_two .div1", {
          x: window.innerWidth * 1,
          opacity: 0,
          scale: 0.5,
        })
        .from("#section_two .div2", {
          x: window.innerWidth * -1,
          opacity: 0,
          scale: 0.1,
        });
      // Section two denotes Digit & Cover division. END
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <>
      <Header />
      <main ref={main} className="bg-black">
        <TeamWriter />
        <DigitCover />
      </main>
      <Footer />
    </>
  );
}

export default App;
