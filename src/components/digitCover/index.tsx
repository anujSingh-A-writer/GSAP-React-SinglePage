import { useLayoutEffect } from "react";
import { layout } from "../../styles";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
const DigitCover: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section two denotes Digit & Cover division. START
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_digitCover",
            start: "top 10%",
            end: "+=2500",
            scrub: 1,
            pin: true,
          },
        })
        .from("#section_digitCover", { opacity: 0 })
        .from("#section_digitCover .div1", {
          x: window.innerWidth * 1,
          opacity: 0,
          scale: 0.5,
        })
        .from("#section_digitCover .div2", {
          x: window.innerWidth * -1,
          opacity: 0,
          scale: 0.1,
        });
      // Section two denotes Digit & Cover division. END
    }, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  return (
    <section
      id="section_digitCover"
      className={`${layout.flex.directionCol.justifyBetween} bg-lime-300 px-5 h-[60vh] | lg:h-[70vh] | xl:px-28 xl:h-[80vh] `}
    >
      <div className={`div1 ${layout.flex.directionRow.itemCenter} w-full`}>
        <h1 className="h1digit font-semibold w-3/4 text-[10rem] | 2lg:text-[12rem] 2lg:w-1/2 | xl:text-[14rem] ">
          Digit
        </h1>
        <div className="buttonDigit w-1/2">
          <span
            className={`${layout.flex.directionCol.itemsJustifyCenter} rounded-full w-24 h-24 border-2 border-black`}
          >
            <FiArrowUpRight className="text-2xl" />
            Start.
          </span>
        </div>
      </div>
      <div className={`div2 ${layout.flex.directionRow.itemCenter}`}>
        <div className={`w-1/2`}>
          <p className="pdigit w-11/12 text-left text-xl | 2lg:text-2xl | xl:text-3xl ">
            Explore KILT's identity components, download the javascript SDK,
            learn how to build an Attester business on KILT,
          </p>
        </div>
        <h1 className="h1digitCover  font-semibold w-1/2  text-[10rem] | 2lg:text-[13rem] | xl:text-[15rem] ">
          Cover
        </h1>
      </div>
    </section>
  );
};

export default DigitCover;
