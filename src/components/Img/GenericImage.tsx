import React from "react";

// Creates a generic image with added props for SEO and accessibility
interface props {
  title?: string | undefined;
  alt?: string | undefined;
  className?: string | undefined
  src: string;
}

export const GenericImage: React.FC<props> = (props) => {
    let localClassName = (props.className == undefined ? "" : props.className);
    let localTitle = (props.title == undefined ? "" : props.title);
    let localAlt = (props.alt == undefined ? "" : props.alt);
    
  return (
    <img className={localClassName} src={props.src} title={localTitle} alt={localAlt}/>
  );
};

export default GenericImage;