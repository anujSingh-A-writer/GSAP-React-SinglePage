import logo from "../../../assets/kiktxFooterLogo.png";
import { layout } from "../../../styles";
import { FOOTER_CONTENTS, SOCIAL_LINKS } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-black px-10 text-white overflow-hidden | lg:px-16 | xl:px-16">
      <div className="pb-20 pt-28 mt-28 border-t border-t-gray-300">
        <div
          className={`${layout.flex.directionRow.itemCenterSpaceBetween} !items-start flex-wrap | xl:flex-nowrap`}
        >
          <div
            className={`w-full ${layout.flex.directionCol.justifyBetween} gap-10 | 2md:w-1/2 | xl:w-1/3`}
          >
            <img height={200} width={200} alt="logo" src={logo} />
            <p className="text-xl w-3/4">
              Explore KILT's identity components, download the javascript SDK,
              learn how to build an Attester business on KILT,
            </p>
          </div>
          <div
            className={`w-full mt-10 ${layout.flex.directionCol.justifyCenter} sm:flex-row gap-6 | 2md:w-1/2 2md:mt-0`}
          >
            {FOOTER_CONTENTS.map((eachItem) => (
              <div
                className={`w-full ${layout.flex.directionCol.justifyBetween} gap-6`}
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
            className={`w-full mt-10 ${layout.flex.directionCol.itemEndspaceBetween} | xl:w-1/3 xl:mt-0`}
          >
            <div
              className={`${layout.flex.directionCol.itemEndspaceBetween} gap-10 w-full | md:w-2/3 | 2md:w-1/2 | 2lg:w-1/3 | xl:w-full`}
            >
              <h1 className="text-2xl">SUBSCRIBE OUR NEWSLETTER</h1>
              <button className="relative bg-zinc-800 rounded-full border border-zinc-400 text-zinc-400 w-full text-left text-sm py-5 pl-6 pr-0 | sm:text-lg sm:py-8 sm:pl-10 sm:pr-2 ">
                Enter your email
                <span className="absolute bottom-2 top-2 right-2 bg-lime-300 rounded-full text-black font-semibold text-md py-3 px-6 | sm:text-xl sm:py-6 sm:px-11">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${layout.flex.directionCol.justifyEnd} md:flex-row gap-20 py-10`}
        >
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
          <p className="w-full | sm:w-2/3 sm:text-lg | md:w-1/4">
            Copyright © 2023 Anuj Singh | Frontend Developer | Website designed
            with UX inspiration from Behance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
