import { layout } from "../../styles";
import Marquee from "react-gsap-marquee";
import kiltLogo1 from "./assets/images/kilt1.png";
import kiltLogo2 from "./assets/images/kilt2.png";

const Kilt: React.FC<{ mainRef: React.MutableRefObject<null> }> = () => {
  return (
    <section
      id="section_kilt"
      className="relative flex flex-col justify-center items-center"
    >
      <div className={`h-1/2 w-full -mb-28 bg-lime-300`}></div>
      <div
        className={`${layout.flex.directionCol.justifyCenter} h-2/5 py-10 transform -skew-y-6 bg-black`}
      >
        <Marquee>
          <div className="flex">
            <img className="w-48 h-16" src={kiltLogo1} alt="logo" />
            <img className="w-48 h-16" src={kiltLogo2} alt="logo" />
          </div>
        </Marquee>
        <Marquee isReversed>
          <div className="flex">
            <img className="w-48 h-16" src={kiltLogo1} alt="logo" />
            <img className="w-48 h-16" src={kiltLogo2} alt="logo" />
          </div>
        </Marquee>
      </div>
      <div className={`h-1/2 w-full -mt-28  bg-blue-500`}></div>
    </section>
  );
};

export default Kilt;
