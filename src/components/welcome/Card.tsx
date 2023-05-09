import { layout } from "../../styles";
import { WelcomeCardProps } from "./types";

const WelcomeCard: React.FC<WelcomeCardProps> = (props) => {
  return (
    <div className="border border-black rounded-xl p-7 w-full h-full">
      <div
        className={`${layout.flex.directionCol.itemsJustifyCenter} text-center bg-slate-200 text-black rounded-xl h-full p-14 gap-32`}
      >
        <h1 className="text-5xl font-semibold">{props.title}</h1>
        <p className="text-2xl">{props.description}</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
