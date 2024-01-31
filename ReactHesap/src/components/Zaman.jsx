import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Zaman = () => {
  const [girilenZaman, setgirilenZaman] = useState("");
  const [girilenBirimi, setGirilenBirimi] = useState("");
  const [sonucZaman, setsonucZaman] = useState("");
  const [olcuBirimi, setOlcuBirimi] = useState("");

  const handleCalculate = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://akshayanand.herokuapp.com/api/unit/?type=time&from=${girilenBirimi}&to=${olcuBirimi}&value=${girilenZaman}`
        );
        setsonucZaman(data.results);
      } catch (error) {
        setsonucZaman("Api kullanimi Gecersiz");
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
                value={girilenZaman}
                onChange={(e) => setgirilenZaman(e.target.value)}
                placeholder="Zaman Giriniz"
                type="number"
              />
              <br />
              <Form.Select
                value={girilenBirimi}
                onChange={(e) => setGirilenBirimi(e.target.value)}
                aria-label="Default select example"
              >
                <option>Zaman Biriminizi Seciniz</option>
                <option readOnly value="sec">
                  Saniye
                </option>
                <option readOnly value="milisec">
                  Mili Saniye
                </option>
                <option readOnly value="microsec">
                  Mikro Saniye
                </option>
                <option readOnly value="nanosec">
                  Nano Saniye
                </option>
                <option readOnly value="min">
                  Dakika
                </option>
                <option readOnly value="hour">
                  saat
                </option>
                <option readOnly value="day">
                  Gun
                </option>
                <option readOnly value="week">
                  Hafta
                </option>
                <option readOnly value="month">
                  Ay
                </option>
                <option readOnly value="year">
                  Yil
                </option>
              </Form.Select>
              <br />
              <Form.Select
                value={olcuBirimi}
                onChange={(e) => setOlcuBirimi(e.target.value)}
                aria-label="Default select example"
              >
                <option>Hangi Birime Seciniz</option>
                <option readOnly value="sec">
                  Saniye
                </option>
                <option readOnly value="milisec">
                  Mili Saniye
                </option>
                <option readOnly value="microsec">
                  Mikro Saniye
                </option>
                <option readOnly value="nanosec">
                  Nano Saniye
                </option>
                <option readOnly value="min">
                  Dakika
                </option>
                <option readOnly value="hour">
                  saat
                </option>
                <option readOnly value="day">
                  Gun
                </option>
                <option readOnly value="week">
                  Hafta
                </option>
                <option readOnly value="month">
                  Ay
                </option>
                <option readOnly value="year">
                  Yil
                </option>
              </Form.Select>
              <br />
              <Form.Control value={sonucZaman} disabled placeholder="Sonuc" />
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

export default Zaman;
