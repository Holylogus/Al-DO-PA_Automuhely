import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import "./styles/adminStyle.css";

export default function Admin() {
  return (
    <>
      <Container fluid className="admin" style={{ height: "95vh" }}>
        <Row>
          <Col sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Nav.Link href="/szamla">
                  <Card.Title style={{ textAlign: "center", fontSize: "2vh" }}>
                    Számlák
                  </Card.Title>
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Nav.Link href="/folyamatban">
                  <Card.Title style={{ textAlign: "center", fontSize: "2vh" }}>
                    Folyamatban
                  </Card.Title>
                  <i className="fa-solid fa-list-check"></i>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Nav.Link href="/uzenetek">
                  <Card.Title style={{ textAlign: "center", fontSize: "2vh" }}>
                    Üzenetek
                  </Card.Title>
                  <i className="fa-regular fa-envelope"></i>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Nav.Link href="/statisztika">
                  <Card.Title style={{ textAlign: "center", fontSize: "2vh" }}>
                    Statisztika
                  </Card.Title>
                  <i className="fa-solid fa-chart-line"></i>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Nav.Link href="/beosztas">
                  <Card.Title style={{ textAlign: "center", fontSize: "2vh" }}>
                    Beosztás
                  </Card.Title>
                  <i className="fa-regular fa-calendar-days"></i>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Nav.Link href="/uzenetek">
                  <Card.Title style={{ textAlign: "center", fontSize: "2vh" }}>
                    Beállítások
                  </Card.Title>
                  <i className="fa-solid fa-gear"></i>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
