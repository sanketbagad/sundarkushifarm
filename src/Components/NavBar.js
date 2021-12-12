import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Sundar Kushi Farm</Navbar.Brand>
    <Nav>
      <Nav.Link href="#deets">Know More</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Sanket Bagad
      </Nav.Link>
    </Nav>
  </Container>
</Navbar>
    )
}

export default NavBar
