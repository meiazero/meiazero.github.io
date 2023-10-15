"use client";

import { styled } from "styled-components";

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const JobText = styled.p`
  font-size: 18rem;
  font-style: normal;
  font-weight: 900;
  line-height: 17.7rem;
  text-transform: uppercase;
`;

export default function Job({ children }) {
  return (
    <JobContainer>
      <JobText>
        {children}
      </JobText>
    </JobContainer>
  );
}
