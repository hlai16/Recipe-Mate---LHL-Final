import React, { useState, useEffect } from "react";
import { Card, Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import './index.scss';
import { Link } from 'react-router-dom';

export default function ProfileNav(props) {

  return (

    <>

      <Navbar bg="light" variant="light" sticky="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to={'/'} className="nav-link">Profile Home</Link></Nav.Link>
            <Nav.Link><Link to={'/userRecipes'} className="nav-link">Created Recipes</Link></Nav.Link>
            <Nav.Link><Link to={'/favorites'} className="nav-link">Saved Favorites</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>

  );

}


