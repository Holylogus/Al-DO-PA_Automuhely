import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{minHeight: '5vh'}}>
        <Container>
          <Navbar.Brand href="/">ALDOPA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Főoldal</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
              <Nav.Link href="/uzenetek">Üzenetek</Nav.Link>
              <Nav.Link href="/akciok">Akciók</Nav.Link>
              <Nav.Link href="/folyamatban">Folyamatban</Nav.Link>
              <Nav.Link href="/szamla">Számla</Nav.Link>
              <Nav.Link href="/naptar">Naptár</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
