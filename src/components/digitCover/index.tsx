import { useLayoutEffect, useRef } from "react";
import { layout } from "../../styles";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
const DigitCover: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  const sectionRef = useRef(null);
  const sectionDiv1Ref = useRef(null);
  const sectionDiv2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "+=2500",
            scrub: 1,
            pin: true,
          },
        })
        .from(sectionRef.current, { opacity: 0 })
        .from(sectionDiv1Ref.current, {
          x: window.innerWidth * 1,
          opacity: 0,
          scale: 0.5,
        })
        .from(sectionDiv2Ref.current, {
          x: window.innerWidth * -1,
          opacity: 0,
          scale: 0.1,
        });
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`${layout.flex.directionCol.justifyBetween} bg-lime-300 px-5 h-[60vh] | lg:h-[70vh] lg:px-20 | xl:px-28 xl:h-[80vh] `}
    >
      <div
        ref={sectionDiv1Ref}
        className={`${layout.flex.directionRow.itemCenter} w-full`}
      >
        <h1 className="font-semibold w-3/4 text-[10rem] | 2lg:text-[12rem] 2lg:w-1/2 | xl:text-[14rem] ">
          Digit
        </h1>
        <div className="w-1/2">
          <span
            className={`${layout.flex.directionCol.itemsJustifyCenter} rounded-full w-24 h-24 border-2 border-black`}
          >
            <FiArrowUpRight className="text-2xl" />
            Start.
          </span>
        </div>
      </div>
      <div
        ref={sectionDiv2Ref}
        className={`${layout.flex.directionRow.itemCenter}`}
      >
        <div className={`w-1/2`}>
          <p className="w-11/12 text-left text-xl | 2lg:text-2xl | xl:text-3xl ">
            Explore KILT's identity components, download the javascript SDK,
            learn how to build an Attester business on KILT,
          </p>
        </div>
        <h1 className="text-right font-semibold w-1/2  text-[10rem] | 2lg:text-[13rem] | xl:text-[15rem] ">
          Cover
        </h1>
      </div>
    </section>
  );
};

export default DigitCover;
