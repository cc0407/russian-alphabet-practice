import React, { PropsWithChildren } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface props extends PropsWithChildren<any>{
  title: string | JSX.Element;
  selected: boolean;
  option: number;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}

const defaultProps:Partial<props> = { //Declared here, implemented at bottom of file
  selected: false,
}

export const ExpandBox:React.FC<props> = (props) => {
  return (
    <div className="pt-2 pb-1 768:pt-2 768:pb-1 max-w-md 768:max-w-lg 768:w-256 1024:max-w-xl">

      <div className="row w-full cursor-pointer h-12 1024:h-14" onClick={() => {props.setOpen( (props.selected ? -1 : props.option));}}>
        <div
          className={`flex-grow-default row justify-between items-center py-3 px-3 768:py-4 768:px-4 bg-lightBlue rounded-tl-2` + (props.selected ? ` ` : ` rounded-bl-2`)}
        >
          <div className="expandBoxTitle">
            {props.title}
          </div>
        </div>

        <div className={`column expandBoxPlay` + (props.selected ? ` ` : ` rounded-br-2`)}>
          {props.selected ? (
              <AiOutlineMinus size={'2em'} className="text-white ease-in-out" />
            ) : (
              <AiOutlinePlus size={'2em'} className="text-white ease-in-out" />
            )}
        </div>
      </div>

      <div className={`ease-in-out ` + (props.selected ? `block` : `hidden`)}>
        <div className="w-full h-full bg-offWhite text-darkBlue p-4 border-2 border-darkBlue rounded-b-2">
          {props.children}
        </div>
      </div>

    </div>
  );
};

ExpandBox.defaultProps = defaultProps;
export default ExpandBox;
