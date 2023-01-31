import React from "react";
import AllServices from "../components/AllServices/AllServices";
import PageTop from "../components/PageTop/PageTop";



export default function ServicesPage(){
    return(
        <React.Fragment>
            <PageTop title='All Services'/>  
            <AllServices/>
        </React.Fragment>
    )
}