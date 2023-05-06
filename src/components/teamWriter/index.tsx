import { layout } from "../../styles";
import { PROFILE_LIST } from "./constants";

const TeamWriter = () => {
  return (
    <div
      className={`${layout.flex.directionRow.itemCenter} bg-blue-500 text-white overflow-hidden h-screen`}
    >
      <div
        className={`${layout.flex.directionCol.justifyStart} gap-10 py-36 pl-28 w-1/2`}
      >
        <h1 className="text-8xl font-semibold">Kilt Team Writer</h1>
        <div className={`${layout.flex.directionCol.justifyStart} gap-5`}>
          <p className="text-2xl">
            With backgrounds in software media academia, government, enterprise
            startups and of course blockchain the team shares a passion for self
            sovereign identity and privacy.
          </p>
          <p className="text-2xl">
            Explore KILT's identity components, download the Javascript SDK,
            learn how to build an Attester business on KILT, or sign up for a
            hackathon to colla,
          </p>
        </div>
        <button className="w-fit bg-lime-300 text-black font-semibold px-8 py-4 rounded-lg text-xl">
          Learn more
        </button>
      </div>
      <div
        className={`${layout.flex.directionRow.itemJustifyCenter} w-1/2 mt-28`}
      >
        <div
          className={`${layout.flex.directionCol.itemsCenter} w-9/12 transform rotate-[60deg]`}
        >
          {PROFILE_LIST.map((profile) => (
            <div
              className={`${layout.flex.directionRow.itemJustifyCenter}  overflow-hidden rounded-full border-4 border-white w-60 h-60 m-5 transform rotate-[-60deg]`}
            >
              <img
                className="rounded-full w-60 h-50 object-cover"
                src={profile.url}
                alt="profile"
              />
            </div>
          ))}
        </div>
        <div className="w-1/4 transform rotate-[60deg]">
          {PROFILE_LIST.map((profile) => (
            <div
              className={`${layout.flex.directionRow.itemJustifyCenter}  overflow-hidden rounded-full border-4 border-white w-60 h-60 m-5 transform rotate-[-60deg]`}
            >
              <img
                className="rounded-full w-60 h-50"
                src={profile.url}
                alt="profile"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamWriter;
