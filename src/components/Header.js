import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <>
        <Navbar  className="color-nav" variant="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="/">User Registration</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Navbar.Brand href="/login">Login</Navbar.Brand>
            <NavDropdown title="our other services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://github.com/aryanraj4049/WEB_3.O" target="_blank">
                Blockchain Project
                </NavDropdown.Item>
              <NavDropdown.Item href="https://docs.google.com/presentation/d/1UMfaDDEFD-nnU1XU3878_YBo9XTcZ1TmhIi1UcHUpFM/edit#slide=id.p" target="_blank">
                EV Thermal Management
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/aryanraj4049/Portfolio_react" target="_blank">
                My portfolio(in progress)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
          <Navbar.Brand href="https://www.linkedin.com/in/aryanraj4049/" target="_blank">DEVELOPER</Navbar.Brand>
          </Form>
        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header