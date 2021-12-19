import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Dropdown } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Sundar Kushi Farm</Navbar.Brand>
    <Nav>
      <Navbar.Collapse id="navbar-dark-example">
      <Nav>
      <Dropdown style={{margin: "2px"}}>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Sanket Bagad <PersonIcon />
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </Nav>
    </Navbar.Collapse>
    </Nav>
  </Container>
</Navbar>
    )
}

export default NavBar
