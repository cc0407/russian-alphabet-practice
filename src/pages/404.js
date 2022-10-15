import React from "react";
import Head from "../components/Head";

const pageNotFound = () => {
    return(
        <div className="h-full w-full bg-lightBlue column centered overflow-hidden">
            <Head 
                title="Page Not Found..."
                description=""
            />
            <div className="midground">
                <div className="foreground column centered">
                    <div className="title font-bold">Oops...</div>
                    <div>The page you are looking for does not exist.</div>
                </div>
            </div>
        </div>
    );
}

export default pageNotFound;
