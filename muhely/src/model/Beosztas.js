import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

export default function Beosztas(props) {
  const beosztasok = [
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
    [
      { hetNapja: "Hétfő", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Kedd", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szerda", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Csütörtök", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Péntek", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Szombat", emberek: ["Kovács", "Tóth", "Koppány"] },
      { hetNapja: "Vasárnap", emberek: ["Kovács", "Tóth", "Koppány"] },
    ],
  ];

  return (
    <Row>
      {beosztasok[props.het - 1].map((napok, nap) => (
        <Col key={nap}>
          <h3>{napok.hetNapja}</h3>
          {napok.emberek.map((ember, xy) => (
            <p key={xy}>{ember}</p>
          ))}
        </Col>
      ))}
    </Row>
  );
}
