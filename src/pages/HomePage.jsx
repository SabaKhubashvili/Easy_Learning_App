import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from '../components/Services/services'
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Analysis from "../components/Anaylsis/Anaylsis";
import Summary from '../components/Summary/Summary'
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from '../components/Video/Video'
import ClientReview from "../components/ClientReview/ClientReview";
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from "../components/Footer/Footer";
import Welcome from "../components/Welcome/Welcome";




export default function Home(){
    
    return(

        <React.Fragment>
            <TopBanner/>
            <Welcome/>
            <Services/>
            <Analysis/>
            <Summary />
            <RecentProject/>
            <Courses/>
            <Video/>
            <ClientReview/>
            <AboutMe />
        </React.Fragment>
    )
}