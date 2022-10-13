import React, { HTMLProps, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MainLogo from "./Img/MainLogo"

// Used to switch between mobile and desktop navigations
// nav-desktop is only visible on lg viewports, mobile only visible on logical negation
// clicked is used to display either hamburger or X icon
const Bar = (props) => {
  const [clicked,setClicked] = useState(false);  

  return(
    <div className='nav-hybrid-row'>
      <div className='nav-desktop'>
        {props.children}
      </div> 

      {
      clicked 
        ? <div className={`nav-mobile rounded-bl-4`}>
            <FaTimes size={32} className={"h-20 mr-5"} onClick={()=> {setClicked(false)}}/>
            <div className="w-full h-full pb-4">
              {props.children}
            </div>
          </div>
        : <FaBars size={32} className={"icon"} onClick={()=> {setClicked(true)}}/>
      }
    </div>
  )
}


// Array of navigation elements for the nav bar
const links = [
  /*
    i.e: {href:"/contact-us", name:"Contact Us"},
  */
  {href:"/", name:"Page 1"}, 
  {href:"/", name:"Page 2"}, 
  {href:"/", name:"Page 3"}, 
  {href:"/", name:"Page 4"}, 
  {href:"/", name:"Page 5"}
];

interface props extends HTMLProps<any> {
  main?: boolean;
  active?: 0|1|2|3|4|5;
}
const defaultProps: Partial<props> = { //Declared here, implemented at bottom of file
  main: true,
  active: 0,
  className: ""
}

export const Nav: React.FC<props> = (props) => {
  return (
    <div className={`nav-height nav bg-darkBlue ` + props.className + (props.main ? `` : `border-1 border-brightRed border-t-0 border-l-0 border-r-0`)}>

      <a className="nav-logo" href="/">
        <MainLogo/>
      </a>

      <Bar>      
        <div className="nav-item items-center justify-around nav-link-list nav-link-size">
          <div className="page-links">
              {
                // Creates a nav element for each item in the links array above.
                // props.active is used to highlight the page that is currently being displayed
                // (i+1) because (i == 0) is used for the home page (no links are active)
                links.map(function(link, i) {
                    return <a
                      className={`hover:text-white ` + (props.active == (i+1)? `font-bold text-white` : `text-LightGray2 `)}
                      target={"_self"}
                      href={link.href}
                      key={i}
                    >
                    {link.name}
                  </a>
                })
              }
          </div>
        </div>
      </Bar>

    </div>
  );
};

Nav.defaultProps = defaultProps;
export default Nav;
