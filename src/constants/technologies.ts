import RNGImg from "../../public/G-Box.png";
import RNGImgColorfull from "../../public/C-Box.png";
import AIImge from "../../public/Hand_gray.png";
import HTMIm from "../../public/Chip_Gray-01.png";
import HTMImColor from "../../public/Chip-Colorfull.png";
import Rohand from "../../public/Hand_color.png";

export const Technologies = [
  {
    id: 1,
    name: "True Random Number Generator (RNG)",
    Icon: RNGImg,
    hover: RNGImgColorfull,
    decription:
      "RNG using cryptographic techniques that are resistant to quantum computer attacks.",
  },

  {
    id: 2,
    name: "Hardware Transactional Memory (HTM)",
    Icon: HTMIm,
    hover: HTMImColor,
    decription:
      "HTM allows concurrent transactions on shared memory, ensuring processes ACID properties without explicit locks.",
  },
  {
    id: 3,
    name: "Artificial Intelligence/Machine Learning",
    Icon: AIImge,
    hover: Rohand,
    decription:
      "AI/ML enabled us to learn patterns and make predictions from data without explicit programming.",
  },
];
