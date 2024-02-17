import Card from "react-bootstrap/Card";

export default function Kartya(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ textTransform: "capitalize" }}>
         <div>{props.elem.nev}</div>
        </Card.Title>
        <Card.Text>
          {props.elem.leiras}
          <br />
          {props.elem.ar}.-Ft
          <br />
          {props.elem.mettol} - {props.elem.meddig}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
