import Table from "react-bootstrap/Table";

export default function MunkaTablazat(props) {
  return (
    <>
      <Table striped hover variant="dark" style={{ margin: "10em auto" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            {props.fejlec.map((e, i) => {
              return <th key={i}>{e}</th>;
            })}
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {props.munkaim.map((munka, i) => {
            return (
              <tr key={i}>
                <td>{munka.datum}</td>
                <td>{munka.ugyfel}</td>
                <td>{munka.munkalapszam}</td>
                <td>{munka.leiras}</td>
                <td>
                  <i className="fa-regular fa-pen-to-square"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
