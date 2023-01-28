import TopBanner from "./components/TopBanner/TopBanner";
import Services from './components/Services/services'
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from "./components/Anaylsis/Anaylsis";
import Summary from './components/Summary/Summary'
import RecentProject from "./components/RecentProject/RecentProject";
import Courses from "./components/Courses/Courses";
import Video from './components/Video/Video'
import ClientReview from "./components/ClientReview/ClientReview";
import AboutMe from './components/AboutMe/AboutMe'
import Footer from "./components/Footer/Footer";

export default function App(){


    return(
        <div>
            <TopNavigation/>
            <TopBanner/>
            <Services/>
            <Analysis/>
            <Summary />
            <RecentProject/>
            <Courses/>
            <Video/>
            <ClientReview/>
            <AboutMe />
            <Footer/>
        </div>
    )
}