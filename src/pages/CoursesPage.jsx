import React from "react";
import Courses from "../components/Courses/Courses";
import PageTop from "../components/PageTop/PageTop";


export default function CoursesPage(){
    return(
        <React.Fragment>
            <PageTop title='All Courses'/>
            <Courses/>
        </React.Fragment>
    )
}