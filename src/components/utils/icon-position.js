import { BsFillPhoneFill } from "react-icons/bs";
import { FaParachuteBox, FaTshirt } from "react-icons/fa";
import { GiDoorHandle, GiTowel } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { MdBathtub } from "react-icons/md";
import { SiVlcmediaplayer } from "react-icons/si";
const IconPosition = [
  {
    icon: <MdBathtub size={28} color="red" />,
    style: {
      top: "3%",
    },
  },
  {
    icon: <FaParachuteBox size={28} color="blue" />,

    style: {
      top: "60px",
      right: "68px",
    },
  },
  {
    icon: <SiVlcmediaplayer size={28} color="orange" />,

    style: {
      top: "40%",
      right: "15px",
    },
  },
  {
    icon: <GiTowel size={28} color="red" />,

    style: {
      top: "70%",
      right: "40px",
    },
  },
  {
    icon: <BsFillPhoneFill size={28} color="skyblue" />,

    style: {
      bottom: "4%",
    },
  },
  {
    icon: <FaTshirt size={28} color="orange" />,

    style: {
      top: "150px",
      left: "20px",
    },
  },
  {
    icon: <IoIosBed size={28} />,

    style: {
      top: "50px",
      left: "75px",
    },
  },
  {
    icon: <GiDoorHandle size={28} />,

    style: {
      top: "70%",
      left: "45px",
    },
  },
];

export default IconPosition;
