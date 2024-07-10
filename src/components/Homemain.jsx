import React from 'react'
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import homeImage from '../assets/home.png';
import Img2 from '../assets/img2.webp';

const customSessionStyle = {
  background: 'linear-gradient(to right, #fafc94, #e54c22)',
  border: '1px solid rgb(57, 113, 81)', // Adjust border color as needed
  borderRadius: '0px', // Adjust border radius as needed
}


export const Homemain = () => {
  return (
    <>
        <Carousel slide={false}>
      <Carousel.Item>
        <Image text="First slide" src={homeImage}/>
        
      </Carousel.Item>
      <Carousel.Item>
        <Image text="First slide" src={Img2}/>
        
      </Carousel.Item>

    </Carousel>
        </>
  )
}
