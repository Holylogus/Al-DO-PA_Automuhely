import Beosztas from "../model/Beosztas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ma = new Date();
const honap = ma.getMonth() + 1;
const ev = ma.getFullYear();
const nap = ma.getDate();
var hanyadikHet;
if (nap / 7 >= 1) {
  hanyadikHet = parseInt(String(nap / 7).split(".")) + honap;
} else {
  hanyadikHet = honap;
}
var maiDatum;
if (honap / 10 < 1) {
  maiDatum = ev + "/0" + honap + "/" + nap;
} else {
  maiDatum = ev + "/" + honap + "/" + nap;
}

export default function Naptar() {
  return (
    <Container fluid>
      <Row>
        <Col>{maiDatum}</Col>
        <Col>{hanyadikHet}. hét</Col>

        <Row>
          <Beosztas het={hanyadikHet}></Beosztas>
        </Row>
      </Row>
    </Container>
  );
}
