import React from "react";
import styles from "./style.module.css";
interface props {
  events: {
    timeTop: string;
    desc: string;
    title: string;
    isBlur: boolean;
  }[];
}
export const TimeLine: React.FC<props> = ({ events }) => {
  return (
    <>
      <div className="lg:flex items-center my-48 mx-12 hidden ">
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <div className="relative flex items-center justify-center ">
              {index % 2 !== 0 ? (
                <div
                  className={`flex flex-col items-center justify-center absolute bottom-8 `}
                >
                  <p
                    className={`text-xs text-center font-bold ${
                      event.isBlur && "blur-sm"
                    }`}
                  >
                    {event.title}
                  </p>
                  <p
                    className={`  text-xs text-center font-normal w-48 ${
                      event.isBlur && "blur-sm"
                    }`}
                  >
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
                className={`w-6 h-6 border-2 border-nav rounded-full flex items-center justify-center  }`}
              >
                <div className="w-4 h-4 bg-dec-text rounded-full"></div>
              </div>
              {index % 2 === 0 ? (
                <div
                  className={`flex flex-col items-center justify-center absolute top-8 `}
                >
                  <div className="w-0.5 h-[20px] lg:h-[60px] bg-[#DCDCDC]"></div>
                  <p
                    className={`text-xs text-center font-bold ${
                      event.isBlur && "blur-sm"
                    }`}
                  >
                    {event.title}
                  </p>
                  <p
                    className={`  text-xs text-center font-normal w-48 ${
                      event.isBlur && "blur-sm"
                    }`}
                  >
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
              <div className={` flex-grow border-t border-nav`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
