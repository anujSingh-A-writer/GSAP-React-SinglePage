import { gsap } from "gsap";
import { FollowUsProps } from "./types";
import { useLayoutEffect, useRef } from "react";
import { layout } from "../../styles";

const FollowUs: React.FC<FollowUsProps> = ({ mainRef }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  return (
    <section ref={sectionRef}>
      <div
        ref={cardsRef}
        className={`${layout.flex.directionCol.itemsJustifyCenter} px-20 w-full h-full`}
      >
        <div
          ref={card1Ref}
          className={`relative ${layout.flex.directionCol.itemsCenterJustifyBetween} text-lime-300 clip-path-div bg-stone-800 w-full h-1/3 z-0 -mb-36`}
        >
          <h1 className="text-4xl font-semibold absolute top-5 right-8">
            01 /
          </h1>
        </div>
        <div
          ref={card2Ref}
          className="relative clip-path-div bg-lime-300 w-[97%] h-1/2 z-10"
        >
          <h1 className="text-4xl font-semibold absolute top-5 right-8">
            02 /
          </h1>
        </div>
        <div
          ref={card3Ref}
          className="relative clip-path-div text-lime-300 bg-stone-800 w-full h-1/4 z-0 -mt-3"
        >
          <h1 className="text-4xl font-semibold absolute top-5 right-8">
            03 /
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
