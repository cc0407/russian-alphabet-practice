import React, { HTMLProps } from "react";

// Used to swap between desktop and mobile images, at a screen size of 1024px

interface props extends HTMLProps<any> {
    desktopImg?: string,
    mobileImg?: string,
    fitToDivHeight?: boolean | undefined;

}

const defaultProps: Partial<props> = { //Declared here, implemented at bottom of file
    fitToDivHeight: false,
    className: "",
}

export const ImageSwap: React.FC<props> = (props) => {
    return(
        <div className={`absolute h-full w-full z-n-1 overflow-hidden ` + props.className}>
            <img src={props.desktopImg} className={`smallImg min-w-full overflow-hidden object-cover absolute top-0 z-0 hidden 1024:block ` + (props.fitToDivHeight? `h-full` : ``)} />
            <img src={props.mobileImg} className={`smallImg min-w-full overflow-hidden object-cover absolute top-0 z-0 block 1024:hidden ` + (props.fitToDivHeight? `h-full` : ``)} />
        </div>
    );
}

ImageSwap.defaultProps = defaultProps;
export default ImageSwap;