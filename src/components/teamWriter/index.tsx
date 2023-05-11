import { useLayoutEffect, useRef } from "react";
import { layout } from "../../styles";
import { PROFILE_LIST } from "./constants";
import { gsap } from "gsap";
import { ANIMATIONS } from "../resources/constants";

const TeamWriter: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  const sectionRef = useRef(null);
  const sectionDivRef = useRef(null);
  const headingRef = useRef(null);
  const para1fRef = useRef(null);
  const para2fRef = useRef(null);
  const btnfRef = useRef(null);
  const imgRow1Ref = useRef<string[]>([]);
  const imgRow2Ref = useRef<string[]>([]);

  const addToImgRow1Refs = (el: any) => {
    if (el && !imgRow1Ref.current.includes(el)) {
      imgRow1Ref.current.push(el);
    }
  };
  const addToImgRow2Refs = (el: any) => {
    if (el && !imgRow2Ref.current.includes(el)) {
      imgRow2Ref.current.push(el);
    }
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Left Div
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%", //animation start at this point
            end: "+=2000", //animation end at this point
            scrub: 1,
            pin: true,
          },
        })
        .from(headingRef.current, {
          y: "200%",
          stagger: {
            each: 1,
          },
        })
        .from(para1fRef.current, ANIMATIONS.BOTTOM_TO_TOP)
        .from(para2fRef.current, ANIMATIONS.BOTTOM_TO_TOP)
        .from(btnfRef.current, ANIMATIONS.BOTTOM_TO_TOP);
      // Right Div
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionDivRef.current,
          start: "top top", //animation start at this point
          end: "bottom top", //animation end at this point
          scrub: 1,
        },
      });

      tl.fromTo(
        imgRow1Ref.current,
        { y: "100%" },
        { y: "-100%", duration: 1, ease: "linear" }
      );
      tl.fromTo(
        imgRow2Ref.current,
        { y: "-100%" },
        { y: "100%", duration: 5, ease: "linear" }
      );
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section ref={sectionRef} className={`bg-blue-500 text-white h-[80vh]`}>
      <div
        ref={sectionDivRef}
        className={` ${layout.flex.directionCol.justifyStart} gap-10 py-28 pl-14 w-1/2 | lg:pl-20 | xl:pl-28`}
      >
        <h1
          ref={headingRef}
          className="text-5xl font-semibold | 2lg:text-6xl | xl:text-7xl"
        >
          Kilt Team Writer
        </h1>
        <div className={`${layout.flex.directionCol.justifyStart} gap-5`}>
          <p ref={para1fRef} className="text-lg | lg:text-xl | xl:text-2xl">
            With backgrounds in software media academia, government, enterprise
            startups and of course blockchain the team shares a passion for self
            sovereign identity and privacy.
          </p>
          <p ref={para2fRef} className="text-lg | lg:text-xl | xl:text-2xl">
            Explore KILT's identity components, download the Javascript SDK,
            learn how to build an Attester business on KILT, or sign up for a
            hackathon to colla,
          </p>
        </div>
        <button
          ref={btnfRef}
          className="w-fit bg-lime-300 text-black font-semibold  rounded-lg px-6 py-3 text-lg | xl:px-8 xl:py-4 xl:text-xl"
        >
          Learn more
        </button>
      </div>
      <div
        className={`${layout.flex.directionRow.itemJustifyCenter} w-1/2 mt-28`}
      >
        <div
          className={`${layout.flex.directionCol.itemsCenter} w-9/12 transform rotate-[60deg]`}
        >
          {PROFILE_LIST.map((profile) => (
            <div
              ref={addToImgRow1Refs}
              className={`${layout.flex.directionRow.itemJustifyCenter}  overflow-hidden rounded-full border-4 border-white w-40 h-40 xl:w-60 xl:h-60 m-5 transform rotate-[-60deg]`}
            >
              <img
                className="rounded-full w-40 h-40 xl:w-60 xl:h-60 object-cover"
                src={profile.url}
                alt="profile"
              />
            </div>
          ))}
        </div>
        <div className="w-1/4 transform rotate-[60deg]">
          {PROFILE_LIST.map((profile, index) => (
            <div
              ref={addToImgRow2Refs}
              className={`${layout.flex.directionRow.itemJustifyCenter}  overflow-hidden rounded-full border-4 border-white w-40 h-40 xl:w-60 xl:h-60 m-5 transform rotate-[-60deg]`}
            >
              <img
                className="rounded-full w-40 h-40 xl:w-60 xl:h-60 object-cover"
                src={profile.url}
                alt="profile"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamWriter;
