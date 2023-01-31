import React from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import AboutMe from "../components/AboutMe/AboutMe";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";



export default function(){

    return(
        <React.Fragment>
            
            <PageTop title='About Me'/>
            <AboutMe/>
            <AboutDescription/>
            
        </React.Fragment>
    )
}