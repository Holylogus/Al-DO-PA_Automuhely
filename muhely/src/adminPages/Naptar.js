import Beosztas from "../model/Beosztas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ma = new Date();
const honap = ma.getMonth() + 1;
const honapNeve = ma.toLocaleString('hu-HU', { month: 'long' }).toUpperCase();
const nap = ma.getDate();
var hanyadikHet;
if (nap / 7 >= 1) {
  hanyadikHet = parseInt(String(nap / 7).split(".")) + honap;
} else {
  hanyadikHet = honap;
}

export default function Naptar() {
  return (<>
    <Container style={{ backgroundColor: "white", margin: "10em auto", padding: "5em" }}>
      <Col style={{margin:"auto auto"}} sm={12}>{honapNeve}</Col>
      <Row>
          <Beosztas het={hanyadikHet}></Beosztas>
      </Row>
    </Container>
  </>
  );
}
