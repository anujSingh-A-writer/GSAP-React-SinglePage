import { layout } from "../../styles";
import WelcomeCard from "./Card";
import { WELCOME_CARD_DETAILS } from "./constants";

const WelcomeKilt: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  return (
    <section className="bg-blue-500 text-white flex-col justify-between py-10 px-28 gap-10">
      <div className={`${layout.flex.directionCol.justifyStart} w-full gap-8`}>
        <h1 className="text-6xl font-semibold">
          Welcome to <span className="text-lime-300">KILT website</span>
        </h1>
        <p className="text-2xl w-3/5">
          Start building your digital identity by getting your
          <span className="text-lime-300"> KILT DID </span>
          (decentrailzed identifier) then adding your credentials like your
          passport or email address.
        </p>
      </div>
      <div
        className={`${layout.flex.directionRow.itemJustifyCenter} h-full gap-10`}
      >
        {WELCOME_CARD_DETAILS.map((eachItem) => (
          <WelcomeCard
            title={eachItem.title}
            description={eachItem.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WelcomeKilt;
