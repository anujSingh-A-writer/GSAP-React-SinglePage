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
      className="bg-blue-500 text-white flex-col justify-between py-10 px-28 gap-10"
    >
      <div
        className={`div1 ${layout.flex.directionCol.justifyStart} w-full gap-8`}
      >
        <h1 className="text-6xl font-semibold">
          Welcome to <span className="text-lime-300">KILT website</span>
        </h1>
        <p className="text-2xl w-3/5">
          Start building your digital identity by getting your
          <span className="text-lime-300"> KILT DID </span>
          (decentrailzed identifier) then adding your credentials like your
          passport or email address.
        </p>
      </div>
      <div
        className={`div2 ${layout.flex.directionRow.itemJustifyCenter} h-full gap-10`}
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
