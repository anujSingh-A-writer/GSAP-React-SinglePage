import { layout } from "../../../styles";
import { MENU_ITEMS } from "./constants";
import logo from "../../../assets/kiltxHeaderLogo.png";

const Header = () => {
  return (
    <header className="px-28 my-12 bg-transparent">
      <div
        className={`${layout.flex.directionRow.itemCenterSpaceBetween} h-full`}
      >
        <>
          <img width={120} height={120} src={logo} alt="logo" />
        </>
        <>
          <ul className={`${layout.flex.directionRow.itemCenter} gap-14`}>
            {MENU_ITEMS.map((eachItem) => (
              <li className={`hover:font-semibold text-2xl`}>
                <a href={eachItem.name}>{eachItem.name}</a>
              </li>
            ))}
          </ul>
        </>
        <>
          <button className="bg-blue-400 text-white px-8 py-4 rounded text-xl">
            Learn more
          </button>
        </>
      </div>
    </header>
  );
};

export default Header;
