import "./page.module.scss";

import Hello from "./components/Hello";
import Job from "./components/Job";
import Message from "./components/Message";

export default function Main() {
  return (
    <div className="containerText">
      <Hello />
      <Job />
      <Message />
    </div>
  );
}
