import { layout } from "../../../styles";
import { MENU_ITEMS } from "./constants";
import logo from "../../../assets/kiltxHeaderLogo.png";

const Header = () => {
  return (
    <header className="px-3 py-12 z-20 | xs:px-6 | lg:px-16 | xl:px-28">
      <div
        className={`${layout.flex.directionRow.itemCenterSpaceBetween} w-full`}
      >
        <img width={120} height={120} src={logo} alt="logo" />
        <ul
          className={`hidden | lg:flex lg:${layout.flex.directionRow.itemCenter} lg:gap-14 `}
        >
          {MENU_ITEMS.map((eachItem) => (
            <li className={`hover:font-semibold text-2xl`}>
              <a href={eachItem.name}>{eachItem.name}</a>
            </li>
          ))}
        </ul>
        <button className="bg-blue-400 text-white px-3 py-2 rounded text-xl | md:px-5 md:py-2 | lg:px-8 lg:py-4">
          Learn more
        </button>
      </div>
    </header>
  );
};

export default Header;
