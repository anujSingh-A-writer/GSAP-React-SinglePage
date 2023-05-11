import { useLayoutEffect, useRef } from "react";
import { layout } from "../../styles";
import { ANIMATIONS, RESOURCE_LIST } from "./constants";
import { gsap } from "gsap";

const Resources: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  const revealRefs = useRef<string[]>([]);
  const addToRefs = (el: any) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3500",
            scrub: 1,
            pin: true,
          },
        })
        .from(headingRef.current, {
          y: "30vh",
          scale: 2,
        })
        .from(paraRef.current, ANIMATIONS.BOTTOM_TO_TOP);

      revealRefs.current.forEach((el, index) => {
        tl.from(
          el,
          index < 4 ? ANIMATIONS.LEFT_TO_RIGHT : ANIMATIONS.RIGHT_TO_LEFT //HACK! Need to think better.
        );
      });
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${layout.flex.directionCol.itemsCenter} bg-blue-100 lg:py-20 overflow-hidden h-full | lg:gap-20 lg:h-screen`}
    >
      <div
        className={`${layout.flex.directionCol.itemsJustifyCenter} w-full gap-8 h-1/4`}
      >
        <h1
          ref={headingRef}
          className="font-semibold text-3xl | sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          Resources for Builders
        </h1>
        <p
          ref={paraRef}
          className="text-2xl w-11/12 px-5 text-center | lg:w-2/3 | xl:w-1/2"
        >
          Explore KILT's identity components, download the Javascript SDK, learn
          how to build an Attester business on KILT, or sign up for a hackathon
          to collaborate with other developers
        </p>
      </div>
      <div
        className={`flex flex-col items-center justify-between w-11/12 h-3/4 gap-20 | lg:flex-row lg:w-[85%] lg:gap-0`}
      >
        <div className="w-full lg:w-1/2">
          <ul>
            {RESOURCE_LIST.map((eachResource) => (
              <li
                ref={addToRefs}
                className={`${layout.flex.directionRow.itemsCenterJustifyStart} gap-5 border-b border-b-blue-500 py-7 w-max`}
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
          {RESOURCE_LIST.map((eachResource) => (
            <div
              ref={addToRefs}
              className={`${eachResource.className} rounded-xl border-2 border-blue-500 mx-2`}
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
