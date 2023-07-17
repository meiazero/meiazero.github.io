"use client";

import Image from "next/image";
import styled from "styled-components";

const HelloMessage = styled.p`
  font-size: 4rem;
  font-style: normal;
  font-weight: 900;
  line-height: 5.5rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
`;

const StyledImage = styled(Image)`
  // border: 1px solid black;
  margin: 0 0.5rem;
  transform: translateY(0.5rem);
`;

export default function Hello() {
  return (
    <HelloMessage>
      hi
      <StyledImage src="hand.svg" alt="hand" width={45} height={45} />, i&apos;m
      Emanuel
    </HelloMessage>
  );
}
