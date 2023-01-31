//* React Imports
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AppRouter from './Router/AppRouter';

//* Page Imports
// import TopNavigation from "./components/TopNavigation/TopNavigation";
// import Home from "./pages/HomePage";
// import AboutPage from './pages/AboutPage';
// import CoursesPage from "./pages/CoursesPage";
// import PortfolioPage from "./pages/PortfolioPage";
// import ContactUsPage  from "./pages/ContactUsPage";
// import ServicesPage from "./pages/ServicesPage";
// import Footer from "./components/Footer/Footer";

export default function App(){


    return(
     
            <BrowserRouter>
                <TopNavigation/>
                    <AppRouter/>
                <Footer/>
            </BrowserRouter>
     
    )
}