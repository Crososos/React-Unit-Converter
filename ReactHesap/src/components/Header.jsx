import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const Header = () => {
    const titleStyle = {
        color: 'red', 
        fontFamily: 'Arial, sans-serif', 
        fontSize: '40px'
      };
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <Image
          rounded
          width={1200}
          height={200}
          src="https://images.pexels.com/photos/20037843/pexels-photo-20037843/free-photo-of-soguk-alginligi-kar-deniz-peyzaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Carousel.Caption>
          <h3 style={titleStyle}>Olcu Birimleri Cevirici</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
