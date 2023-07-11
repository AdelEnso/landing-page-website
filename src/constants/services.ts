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

export const TEAMS = [
  {
    name: "Team Blue",
    activtes: [
      {
        title: "Threat Hunting Assessment",
        desc: "Our Blue Team proactively hunts and analyzes hidden threats in your systems, quickly escalating identified risks for mitigation. We provide a report outlining detected threats, their potential impact, and preventive recommendations.",
      },

      {
        title: "SOC Program Development",
        desc: "Simulating cyber-attacks to evaluate the security of an organization's information systems and identifying vulnerabilities before actual hackers do.",
      },
      {
        title: "SOC Gap Analysis",
        desc: " Identifying potential points of attack on an organization's infrastructure, including network testing and cloud security assessments.",
      },
      {
        title: "SOC Essentials",
        desc: "SOC essentials provide core services to enhance an organization's cybersecurity. These include continuous monitoring of systems and networks, analyzing data for threat detection, swift incident response, post-incident recovery and learning, and staying updated on the latest threats and vulnerabilities through various sources of threat intelligence.",
      },
      {
        title: "Cloud Security Assessment",
        desc: "Cloud Security Assessment Services enhance cloud security through strategy evaluation, risk and compliance assessments, penetration testing, architecture review, and incident response planning. This comprehensive approach ensures the organization's cloud systems are secure, compliant, and resilient.",
      },
      {
        title: "Skills and Gap Assessment",
        desc: "Skills and Gap Assessment Services identify weaknesses in an organization's cybersecurity capabilities and personnel skills. This involves evaluating the cybersecurity team's technical and non-technical skills, determining training needs, conducting a gap analysis against industry standards, and developing a roadmap for improvement.",
      },
      {
        title: "Operational Security Assessment",
        desc: "Operational Security Assessment Services evaluate and enhance an organization's security through policy review, awareness assessment, physical security evaluation, business continuity review, vendor assessment, and incident response readiness.",
      },
      {
        title: "CS/OT Security services",
        desc: "protect critical infrastructure by assessing vulnerabilities, managing risks, implementing controls, enabling incident response, designing secure architectures, providing training, and ensuring regulatory compliance.",
      },
    ],
  },
  {
    name: "Team Red",
    activtes: [
      {
        title: "Threat Hunting Program Development",
        desc: "Proactively and iteratively searching through networks or datasets to detect and isolate advanced threats that evade existing security solutions.",
      },
      {
        title: "Pen Testing",
        desc: "Simulating cyber-attacks to evaluate the security of an organization's information systems and identifying vulnerabilities before actual hackers do.",
      },
      {
        title: "Infrastructure Testing",
        desc: " Identifying potential points of attack on an organization's infrastructure, including network testing and cloud security assessments.",
      },
      {
        title: "Network Testing",
        desc: "This is a proactive activity, generally carried out by the Red Team, to identify vulnerabilities and weaknesses in an organization's network that could potentially be exploited by malicious parties.",
      },

      {
        title: "Industrial Control Systems Assessment",
        desc: "Our Red Team provides a comprehensive Industrial Control Systems (ICS) Assessment service to safeguard your critical infrastructure. We emulate real-world cyberattacks in a controlled environment to identify and test the resilience of your systems, including SCADA systems, Distributed Control Systems (DCS), and Programmable Logic Controllers (PLC).",
      },
    ],
    // activtes: [
    //   "Threat Hunting Program Development",
    //   "Pen Testing",
    //   "Infrastructure Testing",
    //   "Network Testing",
    //   "Operational Security Assessment",
    //   "Industrial Control Systems Assessment",
    // ],
  },
  {
    name: "Team Purple",
    activtes: [
      {
        title: "",
        desc: "In a Purple Team setting, both teams would actively collaborate on hardware and software security assessments, with the Red Team identifying vulnerabilities and potential attack paths, and the Blue Team mitigating those vulnerabilities and enhancing defenses.",
      },
      {
        title: "",
        desc: "Purple Team generally blends the roles of Red and Blue Teams, with the aim of enhancing the effectiveness of both teams.Conducting exercises that involve both Red and Blue Teams, with Red Team emulating attacks and Blue Team defending against them. The primary objective is to provide a learning experience for both teams and to improve the organization's overall security posture.",
      },
    ],
  },
];
