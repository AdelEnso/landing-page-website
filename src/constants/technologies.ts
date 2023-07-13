import RNGGray from "../../public/RNG_BOX_G.png";
import RNGImgColorfull from "../../public/RNG_BOX_C.png";
import RoboG from "../../public/Robo_hand_G.jpg";
import HTMIm from "../../public/HTM_G.jpg";
import HTMImColor from "../../public/HTM_C.jpg";
import RohandC from "../../public/Robo_hand_C.jpg";

export const Technologies = [
  {
    id: 1,
    name: "True Random Number Generator (RNG)",
    Icon: RNGGray,
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
    Icon: RoboG,
    hover: RohandC,
    decription:
      "AI/ML enabled us to learn patterns and make predictions from data without explicit programming.",
  },
];
