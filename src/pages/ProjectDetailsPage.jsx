import React from "react";
import PageTop from "../components/PageTop/PageTop";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";




export default function ProjectDetailsPage(){

    return(
        <React.Fragment>
            <PageTop title='Project Details'/>
            <ProjectDetails/>
        </React.Fragment>
        
    )
}