import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'

//* Images
import BlackLogo from '../../assets/Images/logo_black.png'
import WhiteLogo from '../../assets/Images/logo_white.png'

//* CSS
import '../../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopNavigation(){
    const [navScroll,setNavScroll] = React.useState({
        navBarTitle:'navTitle',
        navBarLogo:WhiteLogo,
        navBarClass:{
            navClass:'navbar',
            variant:'dark'
        }
    }); 

    
    function onScroll(){
        if(window.scrollY > 100){
            setNavScroll(prevData => ({
                ...prevData,
                navBarTitle:'navTitleScroll',
                navBarLogo:BlackLogo,
                navBarClass:{
                    navClass:'navbarScroll',
                    variant:'white',
                    linkColor:'#FFF'
                }
            }))
        }else if(window.scrollY < 100){
            setNavScroll(prevData => ({
                ...prevData,
                navBarTitle:'navTitle',
                navBarLogo:WhiteLogo,
                navBarClass:{
                    navClass:'navbar',
                    variant:'dark',
                    linkColor:'#000000'
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
                
                    <Navbar.Brand href="#home" className={navScroll.navBarTitle} ><img src={navScroll.navBarLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                     
                    </Nav>
                    <Nav >
                        <Nav.Link href="#deets"  style={{fontSize:'17px'}}>Home</Nav.Link>
                        <Nav.Link href="#deets"  style={{fontSize:'17px'}}>About</Nav.Link>
                        <Nav.Link href="#deets"  style={{fontSize:'17px'}}>Service</Nav.Link>
                        <Nav.Link href="#deets"  style={{fontSize:'17px'}}>Courses</Nav.Link>
                        <Nav.Link href="#deets"  style={{fontSize:'17px'}}>Porfolio</Nav.Link>
                        <Nav.Link href="#deets"  style={{fontSize:'17px'}}>Contact Us</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
              
            </Navbar>
        </React.Fragment>
    )
}