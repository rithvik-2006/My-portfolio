import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[100vw]"
            key={item.id}
            style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
          >
            <PinContainer title="" href={item.link}>
              <div className="flex flex-col h-full w-full px-4 py-6">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2">
                  {item.title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm flex-1"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
