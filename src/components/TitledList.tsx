import React, { PropsWithChildren } from "react";

interface props extends PropsWithChildren<any> {
  title: string;
}

export const TitledList: React.FC<props> = (props) => {
  return (
    <div className="text-xs w-full text-left leading-relaxed">
      <div className="font-bold text-sm">
        {props.title}
      </div>
      {props.children}
    </div>
  );
};

export default TitledList;
