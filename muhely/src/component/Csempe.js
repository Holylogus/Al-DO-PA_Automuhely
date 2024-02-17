import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";

export default function Csempe(props) {
  return (
    <Col sm={6} md={4} lg={3} className="mb-4">
      <Card>
        <Card.Body>
          <Nav.Link href={props.elem.link}>
            <Card.Title style={{ textAlign: "center", fontSize: "2vh" }}>
              {props.elem.szoveg}
            </Card.Title>
            <i className={props.elem.ikon}></i>
          </Nav.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
