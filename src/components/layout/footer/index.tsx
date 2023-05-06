import logo from "../../../assets/kiktX.png";
import { layout } from "../../../styles";
import { FOOTER_CONTENTS, SOCIAL_LINKS } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-black px-28 text-white">
      <hr className="my-32" />
      <div className="my-20">
        <div className={layout.flex.directionRow.itemCenterSpaceBetween}>
          <div
            className={`w-1/3 ${layout.flex.directionCol.justifyBetween} gap-10`}
          >
            <img height={200} width={200} alt="logo" src={logo} />
            <p className="text-xl w-3/4">
              Explore KILT's identity components, download the javascript SDK,
              learn how to build an Attester business on KILT,
            </p>
          </div>
          <div
            className={`w-1/2 ${layout.flex.directionRow.justifyCenter} gap-6`}
          >
            {FOOTER_CONTENTS.map((eachItem) => (
              <div
                className={`w-1/3 ${layout.flex.directionCol.justifyBetween} gap-6`}
              >
                <h1 className="text-2xl">{eachItem.title}</h1>
                <ul className="text-xl">
                  {eachItem.values.map((eachValue) => (
                    <li className="pb-3">{eachValue.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className={`w-1/3 ${layout.flex.directionCol.itemEndspaceBetween} gap-10`}
          >
            <h1 className="text-2xl">SUBSCRIBE OUR NEWSLETTER</h1>
            <button className="relative bg-zinc-800 py-8 pl-10 pr-2 rounded-full border border-zinc-400 text-zinc-400 w-full text-left text-lg">
              Enter your email
              <span className="absolute bottom-2 top-2 right-2 bg-lime-300 py-6 px-11 rounded-full text-black font-semibold text-xl">
                Subscribe
              </span>
            </button>
          </div>
        </div>
        <div className={`${layout.flex.directionRow.justifyEnd} gap-20 my-10`}>
          <div
            className={`${layout.flex.directionRow.itemCenterSpaceBetween} gap-5`}
          >
            {SOCIAL_LINKS.map((eachLink) => (
              <div
                className={`${layout.flex.directionRow.itemJustifyCenter} text-3xl bg-gradient-to-r from-blue-500 to-lime-400 rounded-lg w-16 h-16`}
              >
                {eachLink.icon}
              </div>
            ))}
          </div>
          <p className="text-lg w-1/4">
            © 2022-2023, Copyright in Canada applies to your work automatically
            and lasts the author’s lifetime plus 70 years.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
