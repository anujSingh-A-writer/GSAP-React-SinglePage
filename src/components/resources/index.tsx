import { layout } from "../../styles";
import { RESOURCE_LIST } from "./constants";

const Resources: React.FC<{ mainRef: React.MutableRefObject<null> }> = () => {
  return (
    <section
      id="section_resource"
      className={`${layout.flex.directionCol.itemsCenter} gap-14 bg-blue-100 py-20`}
    >
      <div
        className={`${layout.flex.directionCol.itemsJustifyCenter} w-full gap-8 h-1/4`}
      >
        <h1 className="text-6xl font-semibold">Resources for Builders</h1>
        <p className="text-2xl w-1/2 px-5 text-center">
          Explore KILT's identity components, download the Javascript SDK, learn
          how to build an Attester business on KILT, or sign up for a hackathon
          to collaborate with other developers
        </p>
      </div>
      <div
        className={`${layout.flex.directionRow.itemCenterSpaceBetween} w-[85%] h-3/4 `}
      >
        <div className="w-1/2">
          <ul>
            {RESOURCE_LIST.map((eachResource) => (
              <li
                className={`${layout.flex.directionRow.itemsCenterJustifyStart} gap-5 border-b border-b-blue-500 py-7 w-max`}
              >
                <span className="text-5xl">{eachResource.preIcon}</span>
                <h1 className="text-4xl font-semibold">{eachResource.label}</h1>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${layout.flex.directionRow.itemJustifyCenter} content-around w-1/2 h-full flex-wrap gap-5`}
        >
          {RESOURCE_LIST.map((eachResource) => (
            <div className={`${eachResource.className}`}>
              <div
                className={`${layout.flex.directionRow.itemJustifyCenter} w-full h-full rounded-xl border-2 border-blue-500 overflow-hidden p-10`}
              >
                <img alt="resourceImg" src={eachResource.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;