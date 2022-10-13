import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

interface props extends PropsWithChildren<any> {
    title: string,
    description?: string,
    url: string,
    image?: string,
    metaTitle?: string,
}

const defaultProps:Partial<props> = { //Declared here, implemented at bottom of file
    image: "", // can set default image here, will most likely be site logo
    description: "",
}

export const Head:React.FC<props> = (props) => {    
    let metaTitle = (props.metaTitle == undefined ? props.title : props.metaTitle)
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="og:type" content="website" />
            <meta name="og:title" content={metaTitle} />
            <meta name="og:description" content={props.description} />
            <meta name="og:url" content={props.url} />
            <meta name="og:image" content={props.image} />
            <link rel="canonical" href={props.url}></link>
        </Helmet>
    );
}

Head.defaultProps = defaultProps;
export default Head;