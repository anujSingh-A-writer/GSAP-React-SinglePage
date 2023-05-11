import { layout } from "../../styles";
import { useLayoutEffect } from "react";
import { ANIMATIONS } from "../resources/constants";
import { gsap } from "gsap";

const LandingSection: React.FC<{
  mainRef: React.MutableRefObject<null>;
}> = (props) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_landing_screen",
            start: "top top", //animation start at this point
            end: "30% top", //animation end at this point
            scrub: 2,
          },
        })
        .from("#section_landing_screen h1", {
          y: "100vh",
          scale: 10,
          duration: 0.5,
        })
        .from("#section_landing_screen h3", ANIMATIONS.BOTTOM_TO_TOP);
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      id="section_landing_screen"
      className={`h-[200vh] bg-lime-300 bg-cover bg-center -mb-72 -mt-40 z-10 banner text-black`}
    >
      <div className={`${layout.flex.directionCol.itemsCenter}`}>
        <h1 className="text-6xl | xs:text-7xl | sm:text-8xl | md:text-[10rem] | lg:text-[11rem]">
          ID<span className="text-white">ENTI</span>TY
        </h1>
        <h3 className="text-white text-xl font-semibold | xs:text-2xl| sm:text-3xl | md:text-4xl ">
          Decentralized
        </h3>
      </div>
    </section>
  );
};

export default LandingSection;
