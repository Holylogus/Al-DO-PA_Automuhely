import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
import DataService from "../model/DataService";

export default function Login() {
  const DS = new DataService();
  const [user, setUser] = useState({});
  function adatValt(event) {
    const masolat = { ...user };
    console.log(masolat);
    masolat[event.target.id] = event.target.value;
    setUser(masolat);
  }

  function kuldes(event) {
    event.preventDefault()
    console.log("kuldeném")
    DS.postData("/login", user, (data) => {
      console.log(data);
    });
  }

  return (
    <Container>
      <Col
        sm={5}
        style={{
          margin: "10em auto",
          color: "white",
          backgroundColor: "rgb(56,46,46)",
          padding: "5em",
        }}
      >
        <Form onSubmit={kuldes}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@org.com"
              onChange={adatValt}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password" onChange={adatValt}>
            <Form.Label>Jelszó</Form.Label>
            <Form.Control type="password" placeholder="Jelszó" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nincs">
            <Form.Check type="checkbox" label="Emlékezz rám" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Bejelentkezés
          </Button>
        </Form>
      </Col>
    </Container>
  );
}
