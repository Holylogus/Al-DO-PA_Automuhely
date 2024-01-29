import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { szamlak } from "../model/szamlak";

export default function SzamlaTablazat() {
  const lista = szamlak;
  const fejlec = Object.keys(lista[0]);

  return (
    <Container style={{ marginTop: "5em", backgroundImage: 'url("/public/images/header/4.jpeg")'}}>
      <Table striped hover size="sm" variant="dark">
        <thead>
          <tr>
            {fejlec.map((e, i) => {
              return <th key={i} style={{textAlign: "center"}}>{e}</th>;
            })}
            <th style={{width: "1em"}}>Letöltés</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((obj, i) => {
            return (
              <tr key={i}>
                {Object.keys(obj).map((keyName, k) => (
                  <td key={k} style={{textAlign: "center"}}>{obj[keyName]}</td>
                ))}
                <td><i className="fa-regular fa-circle-down"></i></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
