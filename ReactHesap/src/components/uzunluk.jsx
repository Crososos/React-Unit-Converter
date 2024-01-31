import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const uzunluk = () => {
  const [girilenUzunluk, setGirilenUzunluk] = useState("");
  const [girilenBirimi, setGirilenBirimi] = useState("");
  const [sonucUzunluk, setSonucUzunluk] = useState("");
  const [olcuBirimi, setOlcuBirimi] = useState("");

  const handleCalculate = (event) => {
    event.preventDefault();
    console.log(girilenUzunluk,girilenBirimi,olcuBirimi,sonucUzunluk);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://akshayanand.herokuapp.com/api/unit/?type=len&from=${girilenBirimi}&to=${olcuBirimi}&value=${girilenUzunluk}`
        );
        setSonucUzunluk(data.results);
      } catch (error) {
        setSonucUzunluk("Api kullanimi Gecersiz");
        console.error("API isteği başarısız oldu:", error);
      }
    };
    fetchData();
    console.log(sonucUzunluk);
  };

  return (
    <>
      <Card
        border="primary"
        bg="danger"
        text="white"
        style={{ width: "18rem" }}
      >
        <Card.Header>Uzunluk Degistirme</Card.Header>
        <Card.Body>
          <Card.Text>
            <Form.Group className="mb-3">
              <Form.Control
                value={girilenUzunluk}
                onChange={(e) => setGirilenUzunluk(e.target.value)}
                placeholder="Uzunluk Giriniz"
                type="number"
              />
              <br />
              <Form.Select
                value={girilenBirimi}
                onChange={(e) => setGirilenBirimi(e.target.value)}
                aria-label="Default select example"
              >
                <option>Uzunluk Biriminizi Seciniz</option>
                <option readOnly value="kilomts">
                  Kilometre
                </option>
                <option readOnly value="mts">
                  Metre
                </option>
                <option readOnly value="cmts">
                  Santimetre
                </option>
                <option readOnly value="millimts">
                  Milimetre
                </option>
                <option readOnly value="nanomts">
                  Nanometre
                </option>
                <option readOnly value="micromts">
                  Mikrometre
                </option>
                <option readOnly value="mile">
                  Mil
                </option>
                <option readOnly value="yard">
                  Yard
                </option>
                <option readOnly value="foot">
                  Foot
                </option>
                <option readOnly value="inch">
                  Inc
                </option>
              </Form.Select>
              <br />
              <Form.Select
                value={olcuBirimi}
                onChange={(e) => setOlcuBirimi(e.target.value)}
                aria-label="Default select example"
              >
                <option>Hangi Birime Seciniz</option>
                <option readOnly value="kilomts">
                  Kilometre
                </option>
                <option readOnly value="mts">
                  Metre
                </option>
                <option readOnly value="cmts">
                  Santimetre
                </option>
                <option readOnly value="millimts">
                  Milimetre
                </option>
                <option readOnly value="nanomts">
                  Nanometre
                </option>
                <option readOnly value="micromts">
                  Mikrometre
                </option>
                <option readOnly value="mile">
                  Mil
                </option>
                <option readOnly value="yard">
                  Yard
                </option>
                <option readOnly value="foot">
                  Foot
                </option>
                <option readOnly value="inch">
                  Inc
                </option>
              </Form.Select>
              <br />
              <Form.Control value={sonucUzunluk} disabled placeholder="Sonuc" />
            </Form.Group>
          </Card.Text>
          <Button
            variant="primary"
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

export default uzunluk;
