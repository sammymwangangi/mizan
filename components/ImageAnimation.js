import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const fadeInOut = keyframes`
0% {
  opacity:1;
}
17% {
  opacity:1;
}
25% {
  opacity:0;
}
92% {
  opacity:0;
}
100% {
  opacity:1;
}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
  transition: 3s ease-in-out;
  animation: ${fadeInOut} 3s ease-in-out;

  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export default function ImageAnimation({ currentImageIndex }) {
    const images = [
        "/images/homepage/chat/voice1.svg",
        "/images/homepage/chat/voice2.svg",
        "/images/homepage/chat/voice3.svg",
        "/images/homepage/chat/voice4.svg",
        "/images/homepage/chat/voice5.svg",
      ];
    
    return (
        <ImageWrapper>
        <Image src={images[currentImageIndex]} width={334} height={334} />
      </ImageWrapper>
    );
}
