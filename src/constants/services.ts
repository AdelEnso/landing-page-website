import DgIm from "../../public/Thumb-01.png";
import ThIm from "../../public/hacker1.png";
import Pen from "../../public/Penteration.png";
export const SERVICES = [
  {
    name: "Threat Intelligence",
    Icon: ThIm,
    description:
      "Enso Lab provides a curated, targeted, and actionable threat intelligence service that’s transparent to customers. We focus on strategic rather than tactical intelligence, using diverse sources like dark web data and technical vulnerabilities. Our Digital Forensics and Incident Response team plays a key role in curating this intelligence, which bolsters our customers’ security systems and resilience against cyber threats.",
  },
  {
    name: "Digital Forensics and Incident Response(DFIR)",
    Icon: DgIm,
    description:
      "We offer a wide range of digital forensics incident response services tailored to meet the unique requirements of your organization. Our team of highly skilled professionals possesses extensive expertise in conducting forensic investigations, analyzing digital evidence, and mitigating the impact of cyber incidents.",
    points: [
      "Incident Detection and Response.",
      "Forensic Analysis and Evidence Collection.",
      "Malware Analysis.",
      "Network and System Log Examination.",
    ],
  },
  {
    t: "rotate",
    name: "Penetration Testing and Vulnerability Assessment",
    Icon: Pen,
    description:
      "Enso Lab’s Penetration Testing Services are tailored to simulate actual cyber threats targeting various components of your IT system. Our objective is to appraise how well your team, procedures, and technological systems can detect and react to these threats. By undertaking exhaustive evaluations, we pinpoint current weak spots in your security setup, offering invaluable advice to enhance your total security stance.",
    points: [
      "On-Premises System.",
      "External Network Security Assessment.",
      "IoT/Smart Devices Testing.",
      "Cloud Testing.",
      "Wireless Penetration Testing.",
      "Web/Mobile Applications Penetration Testing.",
    ],
  },
];
