import React from "react";
import AllProjects from "../components/AllProjects/AllProjects";
import PageTop from "../components/PageTop/PageTop";

export default function ProjectsPage(){
    return(
        <React.Fragment>
            <PageTop title='All Projects' />
            <AllProjects/>
        </React.Fragment>
    )
}