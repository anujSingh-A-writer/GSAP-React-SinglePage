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
    className: "w-2/5 h-1/2 p-2",
  },
  {
    preIcon: <HiOutlineArrowNarrowRight />,
    label: "SocialKYC",
    image: resourceImage2,
    className: "w-1/2 h-2/5 p-2",
  },
  {
    preIcon: <HiOutlineArrowNarrowRight />,
    label: "Sporran wallet",
    image: resourceImage3,
    className: "w-1/2 h-1/2 p-2",
  },
  {
    preIcon: <HiOutlineArrowNarrowRight />,
    label: "DIDsign decentralized",
    image: resourceImage4,
    className: "w-1/3 h-3/5 p-2",
  },
];

export const ANIMATIONS = {
  LEFT_TO_RIGHT: {
    x: window.innerWidth * -1,
    opacity: 0,
    scale: 0.1,
  },
  RIGHT_TO_LEFT: {
    x: window.innerWidth * 1,
    opacity: 0,
    scale: 0.5,
  },
  BOTTOM_TO_TOP: {
    y: window.innerWidth * 1,
    opacity: 0,
    scale: 0.5,
  },
};
