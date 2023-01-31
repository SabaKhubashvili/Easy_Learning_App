import React from "react";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import PageTop from '../components/PageTop/PageTop'



export default function CourseDetailsPage(){
    

    return(
        <React.Fragment>
            <PageTop title='Course Details'/>
            <CourseDetails/>
        </React.Fragment>
    )
}