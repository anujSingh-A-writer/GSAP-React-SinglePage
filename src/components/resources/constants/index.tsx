import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import resourceImage1 from "../assets/resourceIamge1.png";
import resourceImage2 from "../assets/resourceIamge2.png";
import resourceImage3 from "../assets/resourceIamge3.png";
import resourceImage4 from "../assets/resourceIamge4.png";

export const RESOURCE_LIST = [
  {
    preIcon: <HiOutlineArrowNarrowRight />,
    label: "Sporran Wallet",
    image: resourceImage1,
    className: "w-2/5 h-1/2 p-2 rounded-xl border-2 border-blue-500",
  },
  {
    preIcon: <HiOutlineArrowNarrowRight />,
    label: "SocialKYC",
    image: resourceImage2,
    className: "w-1/2 h-2/5 p-2 rounded-xl border-2 border-blue-500",
  },
  {
    preIcon: <HiOutlineArrowNarrowRight />,
    label: "Sporran wallet",
    image: resourceImage3,
    className: "w-1/2 h-1/2 p-2 rounded-xl border-2 border-blue-500",
  },
  {
    preIcon: <HiOutlineArrowNarrowRight />,
    label: "DIDsign decentralized",
    image: resourceImage4,
    className: "w-2/5 h-3/5 p-2 rounded-xl border-2 border-blue-500",
  },
];
