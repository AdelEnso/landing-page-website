import { IconOne } from "@/assets/svgs/icon-one";
import RNGImg from "../../public/RNG.png";
import AIImge from "../../public/AI.png";
export const Technologies = [
  {
    id: 1,
    name: "True Random Number Generator-as-a-Service (RNG-aaS)",
    Icon: RNGImg,
    decription:
      "RNG using cryptographic techniques that are resistant to quantum computer attacks.",
  },

  {
    id: 2,
    name: "Hardware Transactional Memory-based Computing Engine",
    Icon: AIImge,
    decription:
      "HTM allows concurrent transactions on shared memory, ensuring ACID properties without explicit locks.",
  },
  {
    id: 3,
    name: "AI-Based Solution for Run-Time Threat Prevention",
    Icon: AIImge,
    decription:
      "ML enabled us to learn patterns and make predictions from data without explicit programming.",
  },
];
