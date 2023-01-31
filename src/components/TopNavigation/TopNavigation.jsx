import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import {Link,NavLink } from 'react-router-dom'
//* Images
import BlackLogo from '../../assets/Images/logo_black.png'
import WhiteLogo from '../../assets/Images/logo_white.png'

//* CSS
import '../../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopNavigation(){
    const [navScroll,setNavScroll] = React.useState({
        navBarTitle:'navTitleScroll',
        navBarLogo:BlackLogo,
        navBarClass:{
            navClass:'navbar',
            variant:'white',
            linkColor:'#FFF'
        },
    }); 

    
    function onScroll(){
        if(window.scrollY > 100){
            setNavScroll(prevData => ({
                ...prevData, 
                navBarClass:{
                    navClass:'navbarScroll',
                }
            }))
        }else if(window.scrollY < 100){
            setNavScroll(prevData => ({
                ...prevData, 
                navBarClass:{
                    navClass:'navbar',
                }
            }))
        }
        
    }

    React.useEffect(() => {
        window.addEventListener('scroll',onScroll)
      }, []);
    
    
    
    return(
        <React.Fragment>
             <Navbar collapseOnSelect fixed='top' expand="lg"  className={navScroll.navBarClass.navClass}   variant={navScroll.navBarClass.variant}>
                
                    <NavLink to="/" className={navScroll.navBarTitle} ><img src={navScroll.navBarLogo} className='navigationLogo' alt="" /></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                     
                    </Nav>
                    <Nav >
                        <NavLink  to="/"  style={{fontSize:'17px'}}  activestyle={{Color:'Yellow'}} className='nav-link' end>Home</NavLink>
                        <NavLink to="/AboutUs"  style={{fontSize:'17px'}} className='nav-link'>About</NavLink>
                        <NavLink to="/Services"  style={{fontSize:'17px'}} className='nav-link'>Service</NavLink>
                        <NavLink to="/Courses"  style={{fontSize:'17px'}} className='nav-link'>Courses</NavLink>
                        <NavLink to="/Portfolio"  style={{fontSize:'17px'}} className='nav-link'>Porfolio</NavLink>
                        <NavLink to="/ContactUs"  style={{fontSize:'17px'}} className='nav-link'>Contact Us</NavLink>

                    </Nav>
                    </Navbar.Collapse>
              
            </Navbar>
        </React.Fragment>
    )
}