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
            trigger: "#section_two",
            start: "top 10%",
            end: "bottom 10%",
            scrub: true,
            pin: true,
          },
        })
        .from("#section_two .div1", {
          x: window.innerWidth * 1,
          opacity: 0,
          scale: 0.5,
        })
        .from("#section_two .div2", {
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
      id="section_two"
      className={`${layout.flex.directionCol.justifyBetween} bg-lime-300 sm:px-5 xl:px-28 overflow-hidden !h-[80vh]`}
    >
      <div className={`div1 ${layout.flex.directionRow.itemCenter} w-full`}>
        <h1 className="h1digit text-[14rem] font-semibold w-1/2">Digit</h1>
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
          <p className="pdigit text-3xl w-11/12 text-left">
            Explore KILT's identity components, download the javascript SDK,
            learn how to build an Attester business on KILT,
          </p>
        </div>
        <h1 className="h1digitCover text-[15rem] font-semibold w-1/2">Cover</h1>
      </div>
    </section>
  );
};

export default DigitCover;
