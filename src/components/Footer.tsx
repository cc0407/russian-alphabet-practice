import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

interface props {
  className?: string;
  homepage?: boolean;
}

const defaultProps:Partial<props> = { //Declared here, implemented at bottom of file
  homepage: false,
  className: ""
};

export const Footer:React.FC<props> = (props) => {
  return (
    <div className={`footer ` + (props.homepage? `bg-black ` : `bg-darkBlue `) + `border-t-4 border-opacity-100 border-darkBlue2 column items-center justify-center ` + props.className}>

      <div className="social-buttons">
        <a href="https://mobile.twitter.com/" target="blank" className="hover:text-LightGray2">
          <FaTwitter className="cursor-pointer" size={'2em'} title="Twitter" />
        </a>
        <a href="https://www.facebook.com/" target="blank" className="hover:text-LightGray2">
          <FaFacebook className="cursor-pointer" size={'2em'} title="Facebook"/>
        </a>
        <a href="https://www.instagram.com/" target="blank" className="hover:text-LightGray2">
          <FaInstagram className="cursor-pointer" size={'2em'} title="Instagram" />
        </a>
      </div>
    
      <div className="footer-links text-LightGray3">
        <a
          className={"footer-link"}
          target={"_self"}
          href="/"
        >
          Link 1
        </a>
        <a
          className={"footer-link"}
          target={"_self"}
          href="/"
        >
          Link 2
        </a>
      </div>

    </div>
  );
};

Footer.defaultProps = defaultProps;
export default Footer;