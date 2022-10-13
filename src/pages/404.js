import React from "react";
import Nav from "../components/Nav";
import RoundedLink from "../components/RoundedLink";
import Footer from "../components/Footer";
import Head from "../components/Head";

const pageNotFound = () => {
    return(
        <div className="column min-h-screen">
            <Head 
                title="Page Not Found..."
                description=""
            />
            <Nav />
            <div className="column centered bg-darkBlue flex-grow-default">
                <div className="title font-bold text-white">Oops...</div>
                <div className="subtitle text-white">
                The page you are looking for does not exist.
                </div>
                <RoundedLink title="Back to Home" link="/" target="_self" />
            </div>
            <Footer homepage={true}/>
        </div>
    );
}

export default pageNotFound;
