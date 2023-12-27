"use client";
import { Services } from "@/common/constants/Services";
import { Service } from "@/common/types/service-type";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import Image from "next/image";
import LabelledIcon from "ui-lib/dist/components/LabelledIcon/LabelledIcon"

const ServicesCollapsableDiv: React.FC = () => {
    const [isExpanded, setExpanded] = useState<boolean>(false);

    const handleToggle = () => {
      setExpanded(!isExpanded);
    };
    return (
        <div>
        <div className="flex flex-row justify-between items-center">
        <h2 className="text-black text-base font-bold">Services</h2>
        <button
          className="flex items-center text-color- rounded-md"
          onClick={handleToggle}
        >
          {isExpanded ? (
            <>
              <span className="ml-2 text-secondary-300 text-sm font-bold ">
                View less
              </span>
              <ChevronUp size={17} color="#1F3C66" className="mt-1" />
            </>
          ) : (
            <>
              <span className="ml-2 text-secondary-300 text-sm font-bold">
                View more
              </span>
              <ChevronDown size={17} color="#1F3C66" className="mt-1" />
            </>
          )}
        </button>
      </div>
      <div
        className={`border border-neutral-900 p-3 mt-5 rounded ${
          isExpanded ? "h-65" : "h-30"
        } w-full flex flex-wrap overflow-hidden`}
      >
        {Services
          .slice(0, isExpanded ? Services.length : 6)
          .map((item: Service, index: number) => (
            <div
              key={index}
              className="w-1/6 flex flex-col items-center mt-4 mb-2"
            >
              <LabelledIcon src={item.icon} alt={item.text} height={28} width={28}></LabelledIcon>
            </div>
          ))}
      </div>
      </div>
    );
  };
  
  export default ServicesCollapsableDiv;