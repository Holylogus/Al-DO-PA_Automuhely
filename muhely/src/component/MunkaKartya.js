import { Card } from 'react-bootstrap';

export default function MunkaKartya(props) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{props.elem.munkalapSzam}</Card.Title>
      </Card.Header>
      <Card.Body>
        <p>{props.elem.auto}</p>
        <p>{props.elem.ugyfel}</p>
        <p>{props.elem.munkafelvetelIdeje}</p>
        <p>{props.elem.leiras}</p>
      </Card.Body>
    </Card>
  );
}
