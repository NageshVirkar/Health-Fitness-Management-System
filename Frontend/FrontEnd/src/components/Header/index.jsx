import React from "react";
import * as S from "./style";
import { Link } from 'react-router-dom';
import LogoMaster from "../../assets/logo_muscle.png";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1Image from '../../assets/bg1.jpg';
import bg2Image from '../../assets/carousal1.jpg';
import bg3Image from '../../assets/carousal5.jpg';
import bg4Image from '../../assets/carousal3.jpg';
import bg5Image from '../../assets/carousal4.jpg';

const ExampleCarouselImage = ({ image, text }) => {
  const selectedImage = getImageByType(image);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src={selectedImage}
        alt={`Carousel Image ${text}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2>{text}</h2>
      </div>
    </div>
  );
};

const getImageByType = (type) => {
  switch (type) {
    case 'bg1':
      return bg1Image;
    case 'bg2':
      return bg2Image;
    case 'bg3':
      return bg3Image;
    case 'bg4':
      return bg4Image;
    case 'bg5':
      return bg5Image;
    default:
      return bg2Image; // Default image
  }
};

export default function Index() {
  return (
    <S.Container>
      <Carousel fade style={{ width: '100%', margin: '0' }}>
        <Carousel.Item>
          <ExampleCarouselImage image="bg1" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage image="bg2" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage image="bg3" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage image="bg4" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage image="bg5" />
        </Carousel.Item>
      </Carousel>
      <S.ContainerInfo>
        <img src={LogoMaster} alt="logo" />
        <h1>The only way to define your limits is by going beyond them</h1>
        <S.Button>
          <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
            Register Now!
          </Link>
        </S.Button>
      </S.ContainerInfo>
      <S.Grad></S.Grad>
    </S.Container>
  );
}
