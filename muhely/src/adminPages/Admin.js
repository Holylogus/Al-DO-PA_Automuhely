import "./styles/adminStyle.css";
import { lista } from "../model/adminCsempek.js";
import Csempek from "../component/Csempek.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Admin() {
  return (
    <>
      <Container fluid className="admin" style={{ height: "95vh" }}>
        <Row>
          <Csempek csempelista={lista} />
        </Row>
      </Container>
    </>
  );
}
