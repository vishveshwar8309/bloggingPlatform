import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbarBackground">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>BloggerBase</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>Category</Nav.Link>

              {userInfo ? (
                <>
                  <Nav.Link>Create a Blog</Nav.Link>
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <NavDropdown.Item>logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to="/signin">
                  <Nav.Link>
                    <FaUser />
                    signin
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
