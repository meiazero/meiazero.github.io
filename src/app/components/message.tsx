"use client";

import { styled } from "styled-components";

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

export default function Message() {
  return (
    <MessageComponent>
      <MessageContent>
        i&apos;m 20 years old, majoring in information security and studying to
        be a back-end developer.
      </MessageContent>
    </MessageComponent>
  );
}
