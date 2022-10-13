import React from "react";
import GenericImage from "./GenericImage";
// IMPORT THE LOGO HERE

export const MainLogo: React.FC = () => {
    const info = "Main Logo"; // THIS IS THE ALT TEXT FOR YOUR LOGO
    return (
        <GenericImage 
            src={""} // CHANGE THIS TO BE THE LOGO IMPORTED ABOVE
            title={info} 
            alt={info} 
        />
    );
};

export default MainLogo;