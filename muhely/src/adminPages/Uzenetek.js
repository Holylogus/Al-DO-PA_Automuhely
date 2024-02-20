import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
// import Col from "react-bootstrap/Col";

export default function Uzenetek() {
  return (
    <>
    <Container style={{margin: "10em auto"}}>
      <Table>
      <thead>
        <tr>
          <th>Fejléc</th>
          <th>Fejléc</th>
          <th>Fejléc</th>
          <th>Fejléc</th>
          <th>Fejléc</th>
          <th>Fejléc</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
        </tr>
        <tr>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
        </tr>
        <tr>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
        </tr>
        <tr>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
        </tr>
        <tr>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
          <td>Adat</td>
        </tr>
      </tbody>
      </Table>
    </Container>
  
      {/* <Container fluid>
        <Row style={{backgroundColor: "#0000009e", color: "white"}}>
          <Col className="menu" sm={4} md={2} lg={2} style={{backgroundColor: "#0000003e"}}>
            <Col><i class="fa-solid fa-inbox"></i><span>Beérkező</span></Col>
            <Col><i class="fa-regular fa-paper-plane"></i><span>Elküldött</span></Col>
            <Col><i class="fa-regular fa-star"></i><span>Csillagozott</span></Col>
            <Col><i class="fa-solid fa-triangle-exclamation"></i><span>Fontos</span></Col>
            <Col><i class="fa-regular fa-note-sticky"></i><span>Piszkozat</span></Col>
            <Col><i class="fa-regular fa-trash-can"></i><span>Kuka</span></Col>
          </Col>
          <Col className="emailek">
            <Row className="fejlec">
              <Col> <input type="checkbox" id="kijeloles"/> </Col>
              <Col><i class="fa-solid fa-arrow-rotate-right"></i></Col>
              <Col><i class="fa-solid fa-ellipsis-vertical"></i></Col>
              <Col>Oldal/Össz</Col>
              <Col><i class="fa-solid fa-chevron-left"></i></Col>
              <Col><i class="fa-solid fa-chevron-right"></i></Col>
            </Row>

            <Col>email</Col>
            <Col>email</Col>
            <Col>email</Col>
            <Col>email</Col>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}
