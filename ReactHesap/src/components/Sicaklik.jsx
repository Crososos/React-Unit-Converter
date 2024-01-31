import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Sicaklik = () => {
  const [girilenSicaklik, setGirilenSicaklik] = useState("");
  const [girilenBirimi, setGirilenBirimi] = useState("");
  const [sonucSicaklik, setSonucSicaklik] = useState("");
  const [olcuBirimi, setOlcuBirimi] = useState("");

  const handleCalculate = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://akshayanand.herokuapp.com/api/unit/?type=temp&from=${girilenBirimi}&to=${olcuBirimi}&value=${girilenSicaklik}`
        );
        setSonucSicaklik(data.results);
      } catch (error) {
        setSonucSicaklik("Api kullanimi Gecersiz");
        console.error("API isteği başarısız oldu:", error);
      }
    };
    fetchData();
  };

  return (
    <>
      <Card
        border="danger"
        bg="primary"
        text="white"
        style={{ width: "18rem" }}
      >
        <Card.Header>Sicaklik Degistirme</Card.Header>
        <Card.Body>
          <Card.Text>
            <Form.Group className="mb-3">
              <Form.Control
                value={girilenSicaklik}
                onChange={(e) => setGirilenSicaklik(e.target.value)}
                placeholder="Sicaklik Giriniz"
                type="number"
              />
              <br />
              <Form.Select
                value={girilenBirimi}
                onChange={(e) => setGirilenBirimi(e.target.value)}
                aria-label="Default select example"
              >
                <option>Sicaklik Biriminizi Seciniz</option>
                <option readOnly value="celsius">
                  Celsius
                </option>
                <option readOnly value="kelvin">
                  Kelvin
                </option>
                <option readOnly value="fahrenheit">
                  Fahrenheit
                </option>
              </Form.Select>
              <br />
              <Form.Select
                value={olcuBirimi}
                onChange={(e) => setOlcuBirimi(e.target.value)}
                aria-label="Default select example"
              >
                <option>Hangi Birime Seciniz</option>
                <option readOnly value="celsius">
                  Celsius
                </option>
                <option readOnly value="kelvin">
                  Kelvin
                </option>
                <option readOnly value="fahrenheit">
                  Fahrenheit
                </option>
              </Form.Select>
              <br />
              <Form.Control
                value={sonucSicaklik}
                disabled
                placeholder="Sonuc"
              />
            </Form.Group>
          </Card.Text>
          <Button
            variant="danger"
            type="submit"
            onClick={(event) => handleCalculate(event)}
          >
            Cevir
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Sicaklik;
