import { layout } from "../../styles";
import { useLayoutEffect, useRef } from "react";
import { ANIMATIONS } from "../resources/constants";
import { LandingProps } from "./type";
import { gsap } from "gsap";

const LandingSection: React.FC<LandingProps> = (props) => {
  const { mainRef } = props;

  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const h3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top", //animation start at this point
            end: "30% top", //animation end at this point
            scrub: 2,
          },
        })
        .from(h1Ref.current, {
          y: "100vh",
          scale: 10,
          duration: 0.5,
        })
        .from(h3Ref.current, ANIMATIONS.BOTTOM_TO_TOP);
    }, mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`h-[200vh] bg-white bg-cover bg-center -mb-80 -mt-40 z-10 banner text-black`}
    >
      <div className={`${layout.flex.directionCol.itemsCenter} mt-16`}>
        <h1
          ref={h1Ref}
          className="text-6xl | xs:text-7xl | sm:text-8xl | md:text-[10rem] | lg:text-[11rem] "
        >
          ID<span className="text-white">ENTI</span>TY
        </h1>
        <h3
          ref={h3Ref}
          className="text-white text-xl font-semibold mt-20 | xs:text-2xl| sm:text-3xl | md:text-4xl"
        >
          Decentralized
        </h3>
      </div>
    </section>
  );
};

export default LandingSection;
