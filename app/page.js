import Hello from "./components/Hello";
import Job from "./components/Job";
import Message from "./components/Message/index.jsx";
import { TextContentComponent } from "./components/TextContent";

export default function Page() {
  return (
    <TextContentComponent>
      <Hello />
      <Job>
        web developer
      </Job>
      <Message>
        i&apos;m 20 years old, majoring in information security and studying to
        be a back-end developer.
      </Message>
    </TextContentComponent>
  )
}