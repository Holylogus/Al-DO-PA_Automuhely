import Col from "react-bootstrap/esm/Col";
import Kartya from "./Kartya";

export default function Kartyaim(props) {
  return props.lista.map((e, i) => {

    return (
      <Col sm={6} md={4} lg={3} key={i} style={{margin: "2em 2em", textAlign: "center"}}>
        <Kartya elem={e}></Kartya>
      </Col>
    );
  });
}
