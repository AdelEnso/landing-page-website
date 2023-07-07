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
                <div className="flex justify-start relative right-3">
                  <div
                    className={`w-6 h-6 border-2 border-nav rounded-full flex items-center justify-center`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-4 h-4 bg-nav rounded-full"></div>
                  </div>
                  <h3 className=" ml-4 font-bold text-lg">{`Step ${
                    index + 1
                  }`}</h3>
                </div>
                <div className={`pl-6`}>
                  <p
                    className={`text-xs text-left font-bold mt-2 ${
                      event.isBlur && "blur-sm"
                    }`}
                  >
                    {event.title} / {event.timeTop}
                  </p>
                  <p
                    className={`text-gray-text text-sm  font-medium ${
                      event.isBlur && "blur-sm"
                    }`}
                  >
                    {event.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
