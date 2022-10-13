import React, { Children, MouseEventHandler, PropsWithChildren } from "react";
import {ImCross} from "react-icons/im";

interface props extends PropsWithChildren<any> {
    opened: boolean,
    closeEvent: MouseEventHandler<Element> | undefined,
    name: string,
    links: string[],
    yearly: boolean,
}

const defaultProps:Partial<props> = {
    opened: 0,
}

export const LightBox: React.FC<props> = (props) => {
    return (
        <div className={`lightBoxOverlay ` + (props.opened ? `flex` : `hidden`)}>
            <div className="lightBoxDiv">
                
                <div className="lightBoxHeader">
                    <div className="lightBoxClose">
                        <ImCross className="cursor-pointer h-full w-full" onClick={props.closeEvent}/>
                    </div>
                    <div className="lightBoxLogos">
                        {
                            props.logos.map(function(logo, i) {
                                return <a href={props.links[i]} target='blank' className="lightBoxLogoContainer" key={i}>
                                    <img className="lightBoxLogo" src={logo} key={i} />
                                </a>;
                            })
                        }
                    </div>
                </div>

                <div className="lightBoxText">
                    {props.children}
                </div>
                
            </div>
        </div>
    );
}

LightBox.defaultProps = defaultProps;
export default LightBox;
