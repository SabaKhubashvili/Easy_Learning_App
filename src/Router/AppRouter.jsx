import React from "react";
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import AboutPage from "../pages/AboutPage";
import CoursesPage from "../pages/CoursesPage";
import Home from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactUs from "../components/ContactUs/contactUs";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";



export default function AppRouter(){

    return(
        <React.Fragment>
                <Routes>
                    <Route  path='/' element={<Home/>} />
                    <Route  path='/services' element={<ServicesPage/>} />
                    <Route  path='/AboutUs' element={<AboutPage/>} />
                    <Route  path='/Courses' element={<CoursesPage/>} />
                    <Route  path='/Portfolio' element={<PortfolioPage/>} />
                    <Route  path='/ContactUs' element={<ContactUs/>} />
                    <Route path='/RefundPolicy' element={<RefundPolicyPage/>}/>
                    <Route path='TermsConditions' element={<TermsConditionsPage/>} />
                    <Route path='/PrivacyPolicy' element={<PrivacyPolicyPage    />} />
                    <Route path='/Project' element={<ProjectDetailsPage/>} />
                    <Route path='/course' element={<CourseDetailsPage/>} />
                </Routes>
        </React.Fragment>
    )
}