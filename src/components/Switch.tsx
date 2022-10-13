import React, { HTMLProps } from "react";
import ReactSwitch from "react-switch";

interface props extends HTMLProps<any>{
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    currentState: boolean;
    bgColour?: string; //MUST BE HEX STRING WITH # AT BEGINNING
    handleColour?: string; //MUST BE HEX STRING WITH # AT BEGINNING
    textOffColour?: string;
    textOnColour?: string;
    leftText: string;
    rightText: string;
}

const defaultProps:Partial<props> = {
    bgColour: "fff",
    handleColour: "000",
    textOffColour: "text-LightGray3",
    textOnColour: "text-darkBlue",
    className: "",
}

export const Switch: React.FC<props> = (props) => {
    return (
        <div className={props.className + " switch"}>
            
            <div className={`w-24 ` + (props.currentState ? props.textOffColour : props.textOnColour + ` font-bold`)}>
                {props.leftText}
            </div>

            <ReactSwitch 
                onChange={props.setState}
                checked={props.currentState}
                offColor={props.bgColour}
                onColor={props.bgColour}
                offHandleColor={props.handleColour}
                onHandleColor={props.handleColour}
                uncheckedIcon={false}
                checkedIcon={false}
            />

            <div className={`w-24 ` + (props.currentState ? props.textOnColour + ` font-bold` : props.textOffColour)}>
                {props.rightText}
            </div>

        </div>
    );
}

Switch.defaultProps = defaultProps;
export default Switch;
