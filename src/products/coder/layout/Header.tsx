import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header: React.FC<any> = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Code-Cultivator</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/coder/practice">Practice</Nav.Link>
              <Nav.Link href="/coder/challenges">Challenges</Nav.Link>
              <NavDropdown title="Tasks" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/coder/tasks/pending">
                  Pending
                </NavDropdown.Item>
                <NavDropdown.Item href="/coder/tasks/completed">
                  Completed
                </NavDropdown.Item>
                <NavDropdown.Item href="/coder/tasks/score-card">
                  Score Card
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/profile">Sumanth Pathi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "60px" }}></div>
    </>
  );
};

export default Header;
