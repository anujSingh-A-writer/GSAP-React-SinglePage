import DigitCover from "../../components/digitCover";
import FollowUs from "../../components/followUs";
import Kilt from "../../components/kilt";
import LandingSection from "../../components/landing";
import Resources from "../../components/resources";
import TeamWriter from "../../components/teamWriter";
import WelcomeKilt from "../../components/welcome";

export const HomePage: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  const { mainRef } = props;
  return (
    <>
      <LandingSection mainRef={mainRef} />
      <Kilt />
      <WelcomeKilt mainRef={mainRef} />
      <Resources mainRef={mainRef} />
      <div className="bg-black">
        <FollowUs mainRef={mainRef} />
        <TeamWriter mainRef={mainRef} />
        <DigitCover mainRef={mainRef} />
      </div>
    </>
  );
};
