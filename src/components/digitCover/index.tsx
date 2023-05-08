import { layout } from "../../styles";
import { FiArrowUpRight } from "react-icons/fi";
const DigitCover = () => {
  return (
    <div
      className={`digitDiv ${layout.flex.directionCol.justifyBetween} bg-lime-300 px-28 overflow-hidden`}
    >
      <div className={`${layout.flex.directionRow.itemCenter}`}>
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
      <div className={`${layout.flex.directionRow.itemCenter}`}>
        <div className={`w-1/2`}>
          <p className="pdigit text-3xl w-11/12 text-left">
            Explore KILT's identity components, download the javascript SDK,
            learn how to build an Attester business on KILT,
          </p>
        </div>
        <h1 className="h1digitCover text-[15rem] font-semibold w-1/2">Cover</h1>
      </div>
    </div>
  );
};

export default DigitCover;
