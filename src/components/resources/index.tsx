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
        .from("#section_resource .div1 h1", ANIMATIONS.BOTTOM_TO_TOP)
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
      className={`${layout.flex.directionCol.itemsCenter} gap-20 bg-blue-100 py-20 overflow-hidden`}
    >
      <div
        className={`div1 ${layout.flex.directionCol.itemsJustifyCenter} w-full gap-8 h-1/4`}
      >
        <h1 className="text-6xl font-semibold">Resources for Builders</h1>
        <p className="text-2xl w-1/2 px-5 text-center">
          Explore KILT's identity components, download the Javascript SDK, learn
          how to build an Attester business on KILT, or sign up for a hackathon
          to collaborate with other developers
        </p>
      </div>
      <div
        className={`div2 ${layout.flex.directionRow.itemCenterSpaceBetween} w-[85%] h-3/4 `}
      >
        <div className="w-1/2">
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
          className={`${layout.flex.directionRow.itemJustifyCenter} content-around w-1/2 h-full flex-wrap`}
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
