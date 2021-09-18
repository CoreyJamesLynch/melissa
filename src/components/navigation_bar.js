import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavigationBar extends React.PureComponent {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Melissa&apos;s Mindset</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Nav.Link href="/plans">Plans</Nav.Link>
              <Nav.Link eventKey={2} href="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey={3} href="/contact">
                Commit
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
