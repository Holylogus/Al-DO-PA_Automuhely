import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Munkak from "../model/Munkak";

export default function Folyamatban() {
  return (
    <>
      <Container fluid>
        <Table>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>Dátum</th>
              <th>Név</th>
              <th>Munkalapszám</th>
              <th>Leírás</th>
              <th>Módosít</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <Munkak />
          </tbody>
        </Table>
      </Container>
    </>
  );
}
