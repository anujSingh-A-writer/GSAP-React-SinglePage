import { gsap } from "gsap";
import { layout } from "../../styles";
import WelcomeCard from "./Card";
import { WELCOME_CARD_DETAILS } from "./constants";
import { useLayoutEffect } from "react";
import { ANIMATIONS } from "../resources/constants";

const WelcomeKilt: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_welcomekilt",
            start: "top top", //animation start at this point
            end: "+=3000", //animation end at this point
            scrub: 1,
            pin: true,
          },
        })
        .from("#section_welcomekilt .div1 h1", {
          y: "30vh",
          xPercent: 50,
          scale: 2,
        })
        .from("#section_welcomekilt .div1 p", ANIMATIONS.BOTTOM_TO_TOP)
        .from("#section_welcomekilt .div2", ANIMATIONS.BOTTOM_TO_TOP)
        .from("#section_welcomekilt .div2 h1", {
          y: 200,
          opacity: 0,
          stagger: { each: 0.5 },
          scale: 0.3,
        })
        .from("#section_welcomekilt .div2 p", {
          y: 100,
          opacity: 0,
          stagger: { each: 0.5 },
          scale: 0.3,
        });
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      id="section_welcomekilt"
      className="bg-blue-500 text-white flex-col justify-between p-5 gap-10 h-full px-5 | sm:p-10 | lg:py-10 lg:px-18 lg:h-screen | xl:px-28"
    >
      <div
        className={`div1 gap-5 ${layout.flex.directionCol.justifyStart} w-full | lg:gap-8`}
      >
        <h1 className="text-3xl font-semibold | sm:text-4xl | md:text-5xl | lg:text-6xl ">
          Welcome to <span className="text-lime-300">KILT website</span>
        </h1>
        <p className="text-xl w-full | md:w-2/3 md:text-2xl | lg:w-3/5">
          Start building your digital identity by getting your
          <span className="text-lime-300"> KILT DID </span>
          (decentrailzed identifier) then adding your credentials like your
          passport or email address.
        </p>
      </div>
      <div
        className={`div2 h-full gap-5 flex flex-col items-center justify-between | md:gap-6 |lg:flex lg:flex-row lg:items-center lg:justify-between | xl:gap-10`}
      >
        {WELCOME_CARD_DETAILS.map((eachItem) => (
          <WelcomeCard
            title={eachItem.title}
            description={eachItem.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WelcomeKilt;
