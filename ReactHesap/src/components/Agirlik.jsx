import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Agirlik = () => {
  const [girilenAgirlik, setgirilenAgirlik] = useState("");
  const [girilenBirimi, setGirilenBirimi] = useState("");
  const [sonucAgirlik, setsonucAgirlik] = useState("");
  const [olcuBirimi, setOlcuBirimi] = useState("");

  const handleCalculate = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://akshayanand.herokuapp.com/api/unit/?type=weight&from=${girilenBirimi}&to=${olcuBirimi}&value=${girilenAgirlik}`
        );
        setsonucAgirlik(data.results);
      } catch (error) {
        setsonucAgirlik("Api kullanimi Gecersiz");
        console.error("API isteği başarısız oldu:", error);
      }
    };
    fetchData();
  };

  return (
    <>
      <Card
        border="primary"
        bg="danger"
        text="white"
        style={{ width: "18rem" }}
      >
        <Card.Header>Agirlik Degistirme</Card.Header>
        <Card.Body>
          <Card.Text>
            <Form.Group className="mb-3">
              <Form.Control
                value={girilenAgirlik}
                onChange={(e) => setgirilenAgirlik(e.target.value)}
                placeholder="Sicaklik Giriniz"
                type="number"
              />
              <br />
              <Form.Select
                value={girilenBirimi}
                onChange={(e) => setGirilenBirimi(e.target.value)}
                aria-label="Default select example"
              >
                <option>Agirlik Biriminizi Seciniz</option>
                <option readOnly value="kgms">
                  Kilogram
                </option>
                <option readOnly value="gms">
                  Gram
                </option>
                <option readOnly value="mgms">
                  Milligram
                </option>
                <option readOnly value="mgms">
                  Milligram
                </option>
                <option readOnly value="metricton">
                  Metric Ton
                </option>
                <option readOnly value="longton">
                  Long Ton
                </option>
                <option readOnly value="shortton">
                  Short Ton
                </option>
                <option readOnly value="carrat">
                  Carrat
                </option>
              </Form.Select>
              <br />
              <Form.Select
                value={olcuBirimi}
                onChange={(e) => setOlcuBirimi(e.target.value)}
                aria-label="Default select example"
              >
                <option>Hangi Birime Seciniz</option>
                <option readOnly value="kgms">
                  Kilogram
                </option>
                <option readOnly value="gms">
                  Gram
                </option>
                <option readOnly value="mgms">
                  Milligram
                </option>
                <option readOnly value="mgms">
                  Milligram
                </option>
                <option readOnly value="metricton">
                  Metric Ton
                </option>
                <option readOnly value="longton">
                  Long Ton
                </option>
                <option readOnly value="shortton">
                  Short Ton
                </option>
                <option readOnly value="carrat">
                  Carrat
                </option>
              </Form.Select>
              <br />
              <Form.Control value={sonucAgirlik} disabled placeholder="Sonuc" />
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

export default Agirlik;
