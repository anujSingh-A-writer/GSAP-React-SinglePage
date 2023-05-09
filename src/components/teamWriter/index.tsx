import { useLayoutEffect } from "react";
import { layout } from "../../styles";
import { PROFILE_LIST } from "./constants";
import { gsap } from "gsap";
import { bottomToTop, getImageSelectorIds } from "./utils";

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
        .from("#section_one .p1", bottomToTop)
        .from("#section_one .p2", bottomToTop)
        .from("#section_one .b1", bottomToTop);
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
          getImageSelectorIds(12, "section_one", "imgdiv1"),
          { y: "100%" },
          { y: "-100%", duration: 5, ease: "linear" }
        )
        .fromTo(
          getImageSelectorIds(12, "section_one", "imgdiv2"),
          { y: "-100%" },
          { y: "100%", duration: 5, ease: "linear" }
        );
      // Section one denotes Team Writer division. END
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      id="section_one"
      className={`bg-blue-500 text-white overflow-hidden`}
    >
      <div
        className={`div1 ${layout.flex.directionCol.justifyStart} gap-10 py-28 pl-28 w-1/2`}
      >
        <h1 className="h1 text-8xl font-semibold">Kilt Team Writer</h1>
        <div className={`${layout.flex.directionCol.justifyStart} gap-5`}>
          <p className="p1 text-2xl">
            With backgrounds in software media academia, government, enterprise
            startups and of course blockchain the team shares a passion for self
            sovereign identity and privacy.
          </p>
          <p className="p2 text-2xl">
            Explore KILT's identity components, download the Javascript SDK,
            learn how to build an Attester business on KILT, or sign up for a
            hackathon to colla,
          </p>
        </div>
        <button className="b1 w-fit bg-lime-300 text-black font-semibold px-8 py-4 rounded-lg text-xl">
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
              }  overflow-hidden rounded-full border-4 border-white w-60 h-60 m-5 transform rotate-[-60deg]`}
            >
              <img
                className="rounded-full w-60 h-50 object-cover"
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
              }  overflow-hidden rounded-full border-4 border-white w-60 h-60 m-5 transform rotate-[-60deg]`}
            >
              <img
                className="rounded-full w-60 h-50"
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
