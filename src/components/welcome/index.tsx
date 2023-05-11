import { gsap } from "gsap";
import { layout } from "../../styles";
import WelcomeCard from "./Card";
import { WELCOME_CARD_DETAILS } from "./constants";
import { useLayoutEffect, useRef } from "react";
import { ANIMATIONS } from "../resources/constants";

const WelcomeKilt: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  const sectionRef = useRef(null);
  const welcomeTitleRef = useRef(null);
  const welcomeDescRef = useRef(null);
  const welcomeCardDivRef = useRef(null);

  const revealRefs = useRef<string[]>([]);
  revealRefs.current = [];
  const addToRefs = (el: any) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", //animation start at this point
          end: "+=3000", //animation end at this point
          scrub: 1,
          pin: true,
        },
      });
      tl.from(welcomeTitleRef.current, {
        y: "30vh",
        xPercent: 50,
        scale: 2,
      });
      tl.from(welcomeDescRef.current, ANIMATIONS.BOTTOM_TO_TOP);
      tl.from(welcomeCardDivRef.current, ANIMATIONS.BOTTOM_TO_TOP);

      revealRefs.current.forEach((el: any) => {
        tl.from(el.current, {
          y: 200,
          opacity: 0,
          stagger: { each: 0.5 },
          scale: 0.3,
        }).from(el, {
          y: 100,
          opacity: 0,
          stagger: { each: 0.5 },
          scale: 0.3,
        });
      });
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-blue-500 text-white flex-col justify-between p-5 gap-10 h-full px-5 | sm:p-10 | lg:py-10 lg:px-18 lg:h-screen | xl:px-28"
    >
      <div
        className={`gap-5 ${layout.flex.directionCol.justifyStart} w-full | lg:gap-8`}
      >
        <h1
          ref={welcomeTitleRef}
          className="text-3xl font-semibold | sm:text-4xl | md:text-5xl | lg:text-6xl "
        >
          Welcome to <span className="text-lime-300">KILT website</span>
        </h1>
        <p
          ref={welcomeDescRef}
          className="text-xl w-full | md:w-2/3 md:text-2xl | lg:w-3/5"
        >
          Start building your digital identity by getting your
          <span className="text-lime-300"> KILT DID </span>
          (decentrailzed identifier) then adding your credentials like your
          passport or email address.
        </p>
      </div>
      <div
        ref={welcomeCardDivRef}
        className={`h-full gap-5 flex flex-col items-center justify-between | md:gap-6 |lg:flex lg:flex-row lg:items-center lg:justify-between | xl:gap-10`}
      >
        {WELCOME_CARD_DETAILS.map((eachItem) => (
          <WelcomeCard
            addToRefs={addToRefs}
            title={eachItem.title}
            description={eachItem.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WelcomeKilt;
