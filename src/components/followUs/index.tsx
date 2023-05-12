import { gsap } from "gsap";
import { FollowUsProps } from "./types";
import { useLayoutEffect, useRef } from "react";
import { layout } from "../../styles";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { TEAM_LIST } from "./constants";

const FollowUs: React.FC<FollowUsProps> = ({ mainRef }) => {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=2500", // end after scrolling 1000px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });

      tl.from(card1Ref.current, {
        opacity: 0,
        yPercent: 100,
      });

      tl.from(card2Ref.current, {
        opacity: 0,
        yPercent: 100,
      });

      tl.to(
        card1Ref.current,
        {
          scale: 0.95,
          yPercent: -0.5,
          opacity: 0.7,
        },
        "-=0.3"
      );

      tl.to(card2Ref.current, {
        yPercent: 0,
        opacity: 1,
      });

      tl.from(card3Ref.current, {
        opacity: 0,
        yPercent: 100,
      });

      tl.to(
        card2Ref.current,
        {
          scale: 0.98,
          yPercent: -0.4,
          opacity: 1,
        },
        "-=0.3"
      );

      tl.to(card3Ref.current, {
        opacity: 1,
        yPercent: 0,
      });

      tl.to(card3Ref.current, {});
    }, mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  return (
    <section ref={sectionRef}>
      <div
        className={`${layout.flex.directionCol.itemsJustifyCenter} px-20 w-full h-full`}
      >
        <div
          ref={card1Ref}
          className={`relative ${layout.flex.directionCol.itemsCenterJustifyBetween} text-lime-300 clip-path-div bg-stone-800 w-full h-1/2 z-0 -mb-72`}
        >
          <h1 className="text-4xl font-semibold absolute top-5 right-8">
            01 /
          </h1>
          <div
            className={`${layout.flex.directionRow.itemCenterSpaceBetween} absolute top-20 w-10/12 h-2/3 `}
          >
            <div className={`${layout.flex.directionCol.justifyStart} w-1/2`}>
              <h1 className="text-4xl font-semibold">Keep scrolling...</h1>
            </div>
          </div>
        </div>
        <div
          ref={card2Ref}
          className={`${layout.flex.directionCol.itemsCenterJustifyBetween} relative clip-path-div bg-lime-300 w-[97%] h-1/2 z-10`}
        >
          <h1 className="text-4xl font-semibold absolute top-5 right-8">
            02 /
          </h1>
          <div
            className={`${layout.flex.directionRow.itemCenterSpaceBetween} absolute top-20 w-10/12 h-2/3 `}
          >
            <div className={`${layout.flex.directionCol.justifyStart} w-1/2`}>
              <h1 className="text-4xl font-semibold">Follow Us Team</h1>
              <ul className="text-xl py-5">
                {TEAM_LIST.map((eachItem) => (
                  <li
                    className={`${layout.flex.directionRow.itemsCenterJustifyStart} py-2 gap-3 `}
                  >
                    <BsArrowRightCircleFill className="text-3xl" />
                    {eachItem.name}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`${layout.flex.directionCol.itemsJustifyCenter} w-1/2`}
            >
              <p className="w-8/12 text-2xl">
                With backgrounds in software, media, academia, government,
                enterprise, startups and of cource blockchain.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={card3Ref}
          className={`${layout.flex.directionCol.itemsCenterJustifyBetween} relative clip-path-div text-lime-300 bg-stone-800 w-full h-1/4 z-0 -mt-3`}
        >
          <h1 className="text-4xl font-semibold absolute top-5 right-8">
            03 /
          </h1>
          <div
            className={`${layout.flex.directionRow.itemCenterSpaceBetween} absolute top-20 w-10/12 h-2/3 `}
          >
            <div className={`${layout.flex.directionCol.justifyStart} w-1/2`}>
              <h1 className="text-4xl font-semibold">Others</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
