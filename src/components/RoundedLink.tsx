import { OutboundLink } from "gatsby-plugin-google-gtag";
import React, { HTMLProps } from "react";

interface props extends HTMLProps<any> {
  link?: string;
  title: string;
  primary?: string;
  background?: string;
  elementSize?: "ExtraLarge" | "Large" | "" | "Small";
  buttonType?: "no-border" | "border";
  hoverBackground?: string;
  hoverBackgroundOpacity?: string;
  hoverText?: string;
  borderColour?: string;
  hoverBorder?: string;
  type?: "link" | "onclick";
}

const defaultProps:Partial<props> = {
  link: "",
  title: "",
  target: "_blank",
  elementSize: "",
  className: "",
  buttonType: "border",
  type: "link",
  onClick: () => {return;},
}

export const RoundedLink: React.FC<props> = (props) => {
  const cn = props.className + " font-bold " +
      (` roundLink` + props.elementSize ) +
      (" " + (props.buttonType == "no-border" ? ` border-0` : (` border` + (props.elementSize == "Large" ? `-2` : `-1` ))) )

  if(props.type == "link") {
    return (
      <OutboundLink
        className={cn}
        target={props.target}
        href={props.link}
        onClick={props.onClick}
      >
        {props.title}
      </OutboundLink>
    );
  }
  else {
    return (
      <div
        className={cn}
        onClick={props.onClick}
      >
        {props.title}
      </div>
    );
  }
};

RoundedLink.defaultProps = defaultProps;
export default RoundedLink;
