import { Services } from "@/common/constants/Services";
import { Service } from "@/common/types/service-type";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import Image from "next/image";

const ServicesCollapsableDiv: React.FC = () => {
    const [isExpanded, setExpanded] = useState<boolean>(false);

    const handleToggle = () => {
      setExpanded(!isExpanded);
    };
    return (
        <div>
        <div className="flex flex-row justify-between items-center">
        <h2 className="text-black text-2xl font-bold">Services</h2>
        <button
          className="flex items-center text-color- rounded-md"
          onClick={handleToggle}
        >
          {isExpanded ? (
            <>
              <span className="ml-2 text-secondary-300 text-xl font-bold ">
                View less
              </span>
              <ChevronUp size={30} color="#1F3C66" />
            </>
          ) : (
            <>
              <span className="ml-2 text-secondary-300 text-xl font-bold">
                View more
              </span>
              <ChevronDown size={30} color="#1F3C66" />
            </>
          )}
        </button>
      </div>
      <div
        className={`border-2 border-neutral-900 p-4 mt-6 rounded ${
          isExpanded ? "h-70" : "h-35"
        } w-full flex flex-wrap overflow-hidden`}
      >
        {Services
          .slice(0, isExpanded ? Services.length : 6)
          .map((item: Service, index: number) => (
            <div
              key={index}
              className="w-1/6 flex flex-col items-center mb-5 mt-5"
            >
              <Image
                src={item.icon}
                height={40}
                alt="fund_beneficary"
                width={40}
              />
              <p className="text-secondary-300 font-semibold text-lg text-center mt-3 px-3">
                {item.text}
              </p>
            </div>
          ))}
      </div>
      </div>
    );
  };
  
  export default ServicesCollapsableDiv;