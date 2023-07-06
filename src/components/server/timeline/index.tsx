import React from "react";
import styles from "./style.module.css";
export const TimeLine = () => {
  const events = [
    {
      timeTop: "December 2021",
      desc: "Establishment of the company with the desire to create a computing framework  that could solve complex, real-world digital problems. This framework would become a  cornerstone for the advancement of modern technology.",
    },
    {
      timeTop: "January 2022",
      desc: "Initial seed funding obtained to kick-start the company's growth.",
    },
    {
      timeTop: "May  2022",
      desc: "The company has successfully established its office in the prominent Business Bay area of Dubai and commenced its  operations.",
    },
    {
      timeTop: "August 2022",
      desc: "Development of Enso-i began, and a  comprehensive plan for conducting a  Proof of Concept (PoC) was formulated.",
    },
    {
      timeTop: "December 2022",
      desc: "The company underwent a period of expansion, resulting in its current size of eight members. Additionally, the organization is currently undertaking research and development activities.",
    },
    {
      timeTop: "March 2023",
      desc: "Currently in the process of acquiring beta customers to initiate the deployment of Enso-i, while also  finalizing the drafting of the PCT  documents.",
    },
  ];

  return (
    <>
      <div className="flex items-center my-48 mx-12">
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <div className="relative flex items-center justify-center ">
              {index % 2 !== 0 ? (
                <div
                  style={{ animationDelay: `${index * 0.2}s` }}
                  className={`flex flex-col items-center justify-center absolute bottom-8 ${styles.animatefadein}`}
                >
                  <p className=" text-nav text-xs text-center font-medium w-40">
                    {event.desc}
                  </p>
                  <div className="w-0.5 h-[20px] lg:h-[60px] bg-[#DCDCDC]"></div>
                </div>
              ) : (
                <p className="absolute bottom-8 text-center font-bold">
                  {event.timeTop}
                </p>
              )}

              <div
                className={`w-6 h-6 border-2 border-nav rounded-full flex items-center justify-center  ${styles.animatefadein}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-4 h-4 bg-nav rounded-full"></div>
              </div>
              {index % 2 === 0 ? (
                <div
                  style={{ animationDelay: `${index * 0.2}s` }}
                  className={`flex flex-col items-center justify-center absolute top-8 ${styles.animatefadein}`}
                >
                  <div className="w-0.5 h-[20px] lg:h-[60px] bg-[#DCDCDC]"></div>
                  <p className=" text-nav text-xs text-center font-medium w-48">
                    {event.desc}
                  </p>
                </div>
              ) : (
                <p className="absolute top-8 text-center font-bold">
                  {event.timeTop}
                </p>
              )}
            </div>
            {index !== events.length - 1 && (
              <div
                style={{ animationDelay: `${index * 0.2}s` }}
                className={` flex-grow border-t border-nav`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
