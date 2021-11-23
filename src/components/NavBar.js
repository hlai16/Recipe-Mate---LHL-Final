import Buttons from './Buttons';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";
import { propTypes } from 'react-bootstrap/esm/Image';

// const RequiresLogin = (props) => {
//   const isLoggedIn = true;
//   if(isLoggedIn) { 
//     return props.children;
//   } 
//   return <Home />
// }


function NavBar(props) {
  const clearSession = function() {
    props.setToken('')
    sessionStorage.clear();
  }
  return (
    <section>
      <section className="navDiv">
        <Navbar bg="white" expand="lg" sticky="top">
          <Navbar.Brand><Link to={'/'} className="nav-link"><img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/logo.png?raw=true" alt="logo" width="100"></img></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to={'/user_profile'} className="nav-link">Home</Link></Nav.Link>
              <Nav.Link><Link to={'/search'} className="nav-link">Categories</Link></Nav.Link>
              <Nav.Link><Link to={'/create'} className="nav-link">Create</Link></Nav.Link>
              <Nav.Link><Link to={'/SingleRecipe'} className="nav-link">Single Recipe</Link></Nav.Link>
              <Buttons small onClick={clearSession}><Link to={'/'} className="nav-link text-white">Logout</Link></Buttons>

            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Buttons small>Search</Buttons>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </section>
      <div classNAME="routesDiv">
        
      </div>
    </section>

  );
}

export default NavBar;

