import { useLayoutEffect } from "react";
import { layout } from "../../styles";
import { ANIMATIONS, RESOURCE_LIST } from "./constants";
import { gsap } from "gsap";

const Resources: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_resource",
            start: "top top",
            end: "+=3500",
            scrub: 1,
            pin: true,
          },
        })
        .from("#section_resource .div1 h1", {
          y: "30vh",
          scale: 2,
        })
        .from("#section_resource .div1 p", ANIMATIONS.BOTTOM_TO_TOP)
        .from("#section_resource .div2 .label1", ANIMATIONS.LEFT_TO_RIGHT)
        .from("#section_resource .div2 .img1", ANIMATIONS.BOTTOM_TO_TOP)
        .from("#section_resource .div2 .label2", ANIMATIONS.LEFT_TO_RIGHT)
        .from("#section_resource .div2 .img2", ANIMATIONS.BOTTOM_TO_TOP)
        .from("#section_resource .div2 .label3", ANIMATIONS.LEFT_TO_RIGHT)
        .from("#section_resource .div2 .img3", ANIMATIONS.BOTTOM_TO_TOP)
        .from("#section_resource .div2 .label4", ANIMATIONS.LEFT_TO_RIGHT)
        .from("#section_resource .div2 .img4", ANIMATIONS.BOTTOM_TO_TOP);
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      id="section_resource"
      className={`${layout.flex.directionCol.itemsCenter} bg-blue-100 lg:py-20 overflow-hidden h-full | lg:gap-20 lg:h-screen`}
    >
      <div
        className={`div1 ${layout.flex.directionCol.itemsJustifyCenter} w-full gap-8 h-1/4`}
      >
        <h1 className="font-semibold text-3xl | sm:text-4xl lg:text-5xl xl:text-6xl">
          Resources for Builders
        </h1>
        <p className="text-2xl w-11/12 px-5 text-center | lg:w-2/3 | xl:w-1/2">
          Explore KILT's identity components, download the Javascript SDK, learn
          how to build an Attester business on KILT, or sign up for a hackathon
          to collaborate with other developers
        </p>
      </div>
      <div
        className={`div2 flex flex-col items-center justify-between w-11/12 h-3/4 gap-20 | lg:flex-row lg:w-[85%] lg:gap-0`}
      >
        <div className="w-full lg:w-1/2">
          <ul>
            {RESOURCE_LIST.map((eachResource, index) => (
              <li
                className={`label${index + 1} ${
                  layout.flex.directionRow.itemsCenterJustifyStart
                } gap-5 border-b border-b-blue-500 py-7 w-max`}
              >
                <span className="text-5xl">{eachResource.preIcon}</span>
                <h1 className="text-4xl font-semibold">{eachResource.label}</h1>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${layout.flex.directionRow.itemJustifyCenter} content-around  h-full w-11/12 flex-wrap | lg:w-1/2`}
        >
          {RESOURCE_LIST.map((eachResource, index) => (
            <div
              className={`img${index + 1} ${
                eachResource.className
              } rounded-xl border-2 border-blue-500 mx-2`}
            >
              <div
                className={`${layout.flex.directionRow.itemJustifyCenter} w-full h-full rounded-xl border-2 border-blue-500 overflow-hidden p-10`}
              >
                <img alt="resourceImg" src={eachResource.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
