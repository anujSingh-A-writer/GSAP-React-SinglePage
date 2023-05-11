import { useLayoutEffect } from "react";
import { layout } from "../../styles";
import { PROFILE_LIST } from "./constants";
import { gsap } from "gsap";
import { getImageSelectorIds } from "./utils";
import { ANIMATIONS } from "../resources/constants";

const TeamWriter: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section one denotes Team Writer division. START
      // Left Div
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_teamWriter",
            start: "top 10%", //animation start at this point
            end: "+=2000", //animation end at this point
            scrub: 1,
            pin: true,
          },
        })
        .from("#section_teamWriter h1", {
          y: "70%",
          stagger: {
            each: 1,
          },
        })
        .from("#section_teamWriter .p1", ANIMATIONS.BOTTOM_TO_TOP)
        .from("#section_teamWriter .p2", ANIMATIONS.BOTTOM_TO_TOP)
        .from("#section_teamWriter button", ANIMATIONS.BOTTOM_TO_TOP);
      // Right Div
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_teamWriter .div1",
            start: "top top", //animation start at this point
            end: "bottom top", //animation end at this point
            scrub: 1,
          },
        })
        .fromTo(
          getImageSelectorIds(12, "section_teamWriter", "imgdiv1"),
          { y: "100%" },
          { y: "-100%", duration: 5, ease: "linear" }
        )
        .fromTo(
          getImageSelectorIds(12, "section_teamWriter", "imgdiv2"),
          { y: "-100%" },
          { y: "100%", duration: 5, ease: "linear" }
        );
      // Section one denotes Team Writer division. END
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      id="section_teamWriter"
      className={`bg-blue-500 text-white h-[80vh]`}
    >
      <div
        className={`div1 ${layout.flex.directionCol.justifyStart} gap-10 py-28 pl-14 w-1/2 | lg:pl-20 | xl:pl-28`}
      >
        <h1 className="text-5xl font-semibold | 2lg:text-6xl | xl:text-7xl">
          Kilt Team Writer
        </h1>
        <div className={`${layout.flex.directionCol.justifyStart} gap-5`}>
          <p className="p1 text-lg | lg:text-xl | xl:text-2xl">
            With backgrounds in software media academia, government, enterprise
            startups and of course blockchain the team shares a passion for self
            sovereign identity and privacy.
          </p>
          <p className="p2 text-lg | lg:text-xl | xl:text-2xl">
            Explore KILT's identity components, download the Javascript SDK,
            learn how to build an Attester business on KILT, or sign up for a
            hackathon to colla,
          </p>
        </div>
        <button className="w-fit bg-lime-300 text-black font-semibold  rounded-lg px-6 py-3 text-lg | xl:px-8 xl:py-4 xl:text-xl">
          Learn more
        </button>
      </div>
      <div
        className={`${layout.flex.directionRow.itemJustifyCenter} w-1/2 mt-28`}
      >
        <div
          className={`imgdiv1 ${layout.flex.directionCol.itemsCenter} w-9/12 transform rotate-[60deg]`}
        >
          {PROFILE_LIST.map((profile, index) => (
            <div
              className={`img${index + 1} ${
                layout.flex.directionRow.itemJustifyCenter
              }  overflow-hidden rounded-full border-4 border-white w-40 h-40 xl:w-60 xl:h-60 m-5 transform rotate-[-60deg]`}
            >
              <img
                className="rounded-full w-40 h-40 xl:w-60 xl:h-60 object-cover"
                src={profile.url}
                alt="profile"
              />
            </div>
          ))}
        </div>
        <div className="imgdiv2 w-1/4 transform rotate-[60deg]">
          {PROFILE_LIST.map((profile, index) => (
            <div
              className={`img${index + 1} ${
                layout.flex.directionRow.itemJustifyCenter
              }  overflow-hidden rounded-full border-4 border-white w-40 h-40 xl:w-60 xl:h-60 m-5 transform rotate-[-60deg]`}
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
