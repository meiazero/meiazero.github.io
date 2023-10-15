"use client"

import styled from 'styled-components';

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem;
`;

export function TextContentComponent({ children }) {
  return (
    <TextContent>
      {children}
    </TextContent>
  )
}
