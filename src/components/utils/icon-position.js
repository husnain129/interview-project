import { BsFillPhoneFill } from "react-icons/bs";
import { FaParachuteBox, FaTshirt } from "react-icons/fa";
import { GiDoorHandle, GiTowel } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { MdBathtub } from "react-icons/md";
import { SiVlcmediaplayer } from "react-icons/si";
const IconPosition = [
  {
    icon: <MdBathtub size={28} color="red" />,
    path: "/",
    style: {
      top: "3%",
    },
  },
  {
    icon: <FaParachuteBox size={28} color="blue" />,
    path: "bed",
    style: {
      top: "60px",
      right: "68px",
    },
  },
  {
    icon: <SiVlcmediaplayer size={28} color="orange" />,
    path: "tv-show",
    style: {
      top: "40%",
      right: "15px",
    },
  },
  {
    icon: <GiTowel size={28} color="red" />,
    path: "towel",
    style: {
      top: "70%",
      right: "40px",
    },
  },
  {
    icon: <BsFillPhoneFill size={28} color="skyblue" />,
    path: "phone",
    style: {
      bottom: "4%",
    },
  },
  {
    icon: <FaTshirt size={28} color="orange" />,
    path: "t-shirt",
    style: {
      top: "150px",
      left: "20px",
    },
  },
  {
    icon: <IoIosBed size={28} />,
    path: "bed-show",
    style: {
      top: "50px",
      left: "75px",
    },
  },
  {
    icon: <GiDoorHandle size={28} />,
    path: "door-lock",
    style: {
      top: "70%",
      left: "45px",
    },
  },
];

export default IconPosition;
