import RNGImg from "../../public/RNG1.png";
import AIImge from "../../public/AI1.png";
import HTMIm from "../../public/HTM.png";

export const Technologies = [
  {
    id: 1,
    name: "True Random Number Generator (RNG)",
    Icon: RNGImg,
    decription:
      "RNG using cryptographic techniques that are resistant to quantum computer attacks.",
  },

  {
    id: 2,
    name: "Hardware Transactional Memory (HTM)",
    Icon: HTMIm,
    decription:
      "HTM allows concurrent transactions on shared memory, ensuring processes ACID properties without explicit locks.",
  },
  {
    id: 3,
    name: "Artificial Intelligence/Machine Learning",
    Icon: AIImge,
    decription:
      "AI/ML enabled us to learn patterns and make predictions from data without explicit programming.",
  },
];
