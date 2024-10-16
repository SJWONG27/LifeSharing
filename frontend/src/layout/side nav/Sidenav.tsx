import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidenav.scss'

function Sidenav() {
  const expand = false; 

  return (
    <Navbar expand={expand} className="bg-body-tertiary mb-3" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">LifeSharing</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
              Share your life with us!
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/adminPage">Me</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Sidenav;
