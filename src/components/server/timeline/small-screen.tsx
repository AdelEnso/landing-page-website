import React from "react";

interface props {
  events: {
    timeTop: string;
    desc: string;
    title: string;
    isBlur: boolean;
  }[];
}

export const TimeLineSmall: React.FC<props> = ({ events }) => {
  return (
    <>
      <div className="mx-auto max-w-lg flex lg:hidden my-16">
        <div className="relative">
          <div className="border-r-2 border-nav absolute h-full top-0 "></div>

          <ul className="list-none m-0 p-0">
            {events.map((event, index) => (
              <li
                key={index}
                className={`mb-10 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex justify-start relative right-[10px]">
                  <div
                    className={`w-5 h-5 border-2 border-nav rounded-full flex items-center justify-center`}
                  >
                    <div className="w-4 h-4 bg-dec-text rounded-full"></div>
                  </div>
                  <div className={`pl-6`}>
                    <div className="flex">
                      <p className="text-xs text-left font-bold">
                        {event.timeTop}{" "}
                      </p>
                      <p
                        className={`text-xs text-left font-bold  ${
                          event.isBlur && "blur-sm"
                        }`}
                      >
                        / {event.title}
                      </p>
                    </div>
                    <p
                      className={`text-gray-text text-sm  font-medium ${
                        event.isBlur && "blur-sm"
                      }`}
                    >
                      {event.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
