export const Products = [
  {
    id: 1,
    name: "Ensō-i",
    link: "/products/Ensō-i",
    decription:
      "Ensō-i is a hardware-accelerated Artificial Intelligence-based threat prevention system.",

    deatails: {
      supported: "Linux(Kali, Parrot, Ubuntu, Debian)",
      future: [
        "Windows Platforms",
        "Cloud Platforms",
        "IOS Devices",
        "Android Systems",
      ],

      application: [
        {
          title: "Data Center Security",
          desc: "Identifying backdoors in high performance computing systems and isolating computing resources at run-time while running compromised trusted applications",
        },
        {
          title: "Cloud Services Security",
          desc: "Identifying and nullifying the impact of threat actors that affect the data and infrastructure of cloud service providers (CSPs)",
        },
        {
          title: "Large Data Processing Systems Security",
          desc: "Identifying vulnerabilities in different computing clusters, protecting containers and virtual machines from different threat classes",
        },
        {
          title: "Enterprise IT Security",
          desc: "Identifying backdoors in systems and software, nullifying the impact of threat actors that breach the enterprise's IT infrastructure and data",
        },
        {
          title: "Hardware Security",
          desc: "Mitigating side channel attacks in IT infrastructure at the hardware, systems and software level, including virtual and container level deployments",
        },
      ],
      points: [
        {
          title: "A New Wave in Cybersecurity:",
          desc: "Ensō i represents our ambitious vision for cybersecurity. By cutting off computing resources to potential threats at runtime, it can effectively disarm threat actors before they can cause harm. This forward-thinking strategy means your organization can remain several steps ahead of possible threats.",
        },
        {
          title: "Flexible and Scalable:",
          desc: "We’ve designed Ensō i to be adaptable to any organization’s unique needs. As a standalone solution or an extra layer of security that can integrate with third-party MDR/NGAV/EPP/XDR solution without issue, Ensō i allows you to enhance your existing security setup without needing to overhaul your infrastructure.",
        },
        {
          title: "Unleashing the Potential of AI/ML:",
          desc: "Ensō i harnesses the power of Artificial Intelligence. With advanced Machine Learning algorithms to analyze low-level system statisics in real-time, it can swiftly recognize and respond to potential threats. Ensō i empowers your organization to stay proactive, mitigating the risk of devastating data breaches and cyber-attacks.",
        },
        {
          title: "Real-Time User-Friendly Dashboard:",
          desc: "An intuitive, easy-to-understand dashboard allows non-technical stakeholders to understand the organization's security posture. Ensō i provides a clear visual representation of current threats, risk scores, and recommended actions. The dashboard also allows users to drill down into the details of each risk or incident.",
        },
      ],
      desc: "Intelligent Threat Prevention and Neutralization Next-Generation Cybersecurity with Ensō i We’re excited to introduce Ensō i, powered by our patent-pending technology. Our mission is to transform cybersecurity with Ensō i, designed to proactively identify and neutralize threats associated with trusted programs and applications in real-time, promising a level of protection that is beyond compare.",
    },
  },

  {
    id: 2,
    name: "Ensō RNG-aaS",
    link: "/products/Ensō RNG-aaS",
    decription:
      "RNG-aaS solution, providing truly random, cryptographically robust, and statistically independent numbers at all times.",
    deatails: {
      points: [
        {
          title: "Revolutionizing Public Key Infrastructure (PKI) Security:",
          desc: "In our digital age, the safety of your Public Key Infrastructure (PKI) can never be overstated. At the heart of many security systems, PKI relies on the randomness of key pairs to ensure encrypted data remains private. By generating truly random, statistically independent numbers, Ensō RNG offers cryptic and unique key pairs that defy brute-force attacks and cryptographic methods. This supercharges the security of your systems reliant on PKI, bolstering secure email transmission, digital signatures, and SSL encryption.",
        },
        {
          title:
            "Optimize Real-Time Multimedia Communications with High-Quality Lossless Codec:",
          desc: "The race to deliver uncompromised quality in real-time multimedia communication is intense. Our RNG-as-a-Service solution leverages random numbers to fine-tune data compression algorithms, thereby minimizing data loss and maximizing quality. Whether you’re dealing with high-definition video conferencing, live broadcasting, or other time-critical multimedia applications, Ensō RNG helps ensure your data quality stays uncompromised.",
        },
        {
          title: "Fortify End-to-End Communications and Messaging:",
          desc: "Ensō RNG enable a secure communications system, where data to be communicated is referenced, and not directly sent over a communications channel. The data references are encoded using outputs derived from Ensō RNG, which make it a mathematically hard problem for external threat actors to access or infer the actual data which are being referenced. We can potentially prevent MITM (Man-in-The-Middle) attacks by preventing directory structure changes as the structure itself is fragmented and randomized into multiple parts at the time when the communication session takes place - once the session is finished the structure returns to its original form.",
          // desc: "Whether you’re offering a private messaging app or providing enterprise collaboration tools, securing end-to-end communications is paramount. With Ensō RNG, we provide truly random numbers that can form the bedrock of your encryption keys. These keys, being random and unpredictable, secure encrypted data against unauthorized decryption and access. This makes your communications safe, secure, and private, enhancing your user’s trust in your service.",
        },
        {
          title: "Supercharge Simulations in Computational Biology:",
          desc: "For researchers and scientists in the field of computational biology, simulations are essential tools that model complex biological systems. These simulations often require random numbers to initiate parameters or simulate random events. Ensō RNG’s ability to generate truly random, statistically independent numbers brings your simulations closer to real-life randomness, improving their validity and accuracy. This enables more precise predictions and provides better insights into the behavior of complex biological systems.",
        },
      ],
      desc: "Ensō RNG (random number generator) that's derived from multiple types of entropy sources. The entropy of this system, which is a measure of unpredictability, is very high. Data coded with the outputs of Ensō RNG are cryptographically strong and highly resistant to compromise attempts. Encryption and decryption keys derived out of the outputs of Ensō RNG, enable high degrees of data security in communications, storage and management. Enso RNG's strength lies in its security. Even if infiltrated, decoding acquired codes to reveal the partial seeds from entropy sources is a complex mathematical task. This provides an additional layer of security in secure data communications and storage. Our system can be provided RNG-as-a-Service, or deployed as a software footprint to computing systems hardware. It can be customized depending on the target solution.",
      // desc: "True randomness unleashed discover the strength of absolute randomness with Ensō RNG – your premier Random Number Generator-as-a-Service (RNG-aaS) solution. Providing cryptographically strong, statistically independent random numbers, Ensō RNG serves as your ally in enhancing digital operations and securing communications. Delve deeper into how our services can revolutionize your organization",
    },
  },
];
