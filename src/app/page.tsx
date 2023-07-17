"use client";

import "./page.module.css";

import Hello from "./components/hello";
import Job from "./components/job";
import Message from "./components/message";
import styled from "styled-components";

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem;
`;

export default function Main() {
  return (
    <TextContent>
      <Hello />
      <Job />
      <Message />
    </TextContent>
  );
}
