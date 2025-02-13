import React from "react";

interface HeadTitleProps {
  heading: string;
  subheading?: string;
}

const HeadTitle: React.FC<HeadTitleProps> = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl md:text-5xl font-medium">
        {heading}
      </h2>
      {subheading && (
        <p className="text-[--grey01] text-center font-medium">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default HeadTitle;
