import React from "react";

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ( props ) => {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full blackbg"></div>
        <h1 className="text-xl black font-bold">{props.title}</h1>
      </div>
      <div className="mt-2">
        {props.children}
      </div>
    </div>
  );
}

export default Section;