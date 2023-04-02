import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/images/logo.png';
import './Header.scss'
import { useEffect, useState } from 'react';

function Header() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);


  const navlink = [
    {
      id: '1',
      pageName: 'About Us'
    },
    {
      id: '2',
      pageName: 'Services'
    },
    {
      id: '3',
      pageName: 'Team'
    },
    {
      id: '4',
      pageName: 'Clients'
    },
    {
      id: '5',
      pageName: 'Contact Us'
    }
  ]

  return (
    <>
      <Navbar className={scroll ? 'custome-header Activeheader ' : 'custome-header'} expand="lg">

        <Container>
          <div className='header-logo'>
            <img src={logo} alt='logo' />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className="link-wrapper ">
              {navlink.map((item, index) => {
                return (
                  <Nav.Link key={index} href="#home">{item.pageName}</Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;