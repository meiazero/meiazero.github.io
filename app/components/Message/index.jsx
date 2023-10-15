"use client";

import styled from "styled-components";

const MessageComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MessageContent = styled.p`
  width: 70rem;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
`;

export default function Message({ children }) {
  return (
    <MessageComponent>
      <MessageContent>
        {children}
      </MessageContent>
    </MessageComponent>
  );
}