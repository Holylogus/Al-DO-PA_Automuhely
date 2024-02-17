import Container from "react-bootstrap/Container";
import MunkaTablazat from "../component/MunkaTablazat";
import { lista } from "../model/munkalista";

export default function Folyamatban() {
  const fejlec = ["Dátum", "Név", "Munkalapszám", "Leírás", "Módosít"];
  return (
    <>
      <Container>
        <MunkaTablazat munkaim={lista} fejlec={fejlec}></MunkaTablazat>
      </Container>
    </>
  );
}
