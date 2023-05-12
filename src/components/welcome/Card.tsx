import { layout } from "../../styles";
import { WelcomeCardProps } from "./types";

const WelcomeCard: React.FC<WelcomeCardProps> = (props) => {
  return (
    <div className="border border-black rounded-xl p-5 w-full h-full">
      <div
        className={`${layout.flex.directionCol.itemsCenterJustifyBetween} text-center bg-slate-200 text-black rounded-xl h-full gap-10 px-5 py-20 | md:px-8 | lg:px-14 lg:py-36 | xl:px-10 xl:py-32 | 2xl:px-14`}
      >
        <h1
          ref={props.addToRefs}
          className="text-3xl font-semibold | lg:text-4xl | xl:text-5xl"
        >
          {props.title}
        </h1>
        <p ref={props.addToRefs} className="text-lg | md:text-xl | xl:text-2xl">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default WelcomeCard;
