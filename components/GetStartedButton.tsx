import React from 'react';
import { LuArrowUpRight } from "react-icons/lu";

const GetStartedButton = ({ 
  href = "#", 
  children = "Get started",
  className = "",
  iconClassName = ""
}) => {
  return (
    <div className={`bg-[--primary] flex items-center justify-end rounded-full gap-6 pr-[2px] py-[2px] pl-[25px] w-fit ${className}`}>
      <a 
        href={href} 
        className="text-[17px] font-medium"
      >
        {children}
      </a>
      <div className="w-[52px] h-[52px] bg-[--background] rounded-full flex items-center justify-center">
        <LuArrowUpRight 
          className={`text-white w-[20px] h-[20px] ${iconClassName}`} 
        />
      </div>
    </div>
  );
};

export default GetStartedButton;