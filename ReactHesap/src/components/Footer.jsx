import React from "react";
import Alert from "react-bootstrap/Alert";

const Footer = () => {
  return (
    <>
      {" "}
      <Alert border="primary"
        bg="danger">
         Ugur Palak Tarafinda Yapilmistir.{" "}
        <Alert.Link href="https://www.linkedin.com/in/u%C4%9Fur-palak-27a669127/">Linkedn</Alert.Link>
      </Alert>
    </>
  );
};

export default Footer;
