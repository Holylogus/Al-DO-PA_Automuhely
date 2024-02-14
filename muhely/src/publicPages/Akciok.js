import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Kartyaim from "../component/Kartyaim.js";
import { akciok } from "../model/akcioLista.js";

export default function Akciok() {
  return (
    <Container>
      <Row>
        <Kartyaim lista={akciok}></Kartyaim>
      </Row>
    </Container>
  );
}
