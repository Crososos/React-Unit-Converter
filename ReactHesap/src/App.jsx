import "./App.css";
import Agirlik from "./components/Agirlik";
import Sicaklik from "./components/Sicaklik";
import Zaman from "./components/Zaman";
import Uzunluk from "./components/uzunluk";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import Footer from "./components/Footer";
Footer

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col></Col>
        <Col>
          <Zaman />
        </Col>
        <Col>
          <Uzunluk />
        </Col>
        <Col></Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col></Col>
        <Col>
          <Agirlik />
        </Col>
        <Col>
          <Sicaklik />
        </Col>
        <Col></Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
