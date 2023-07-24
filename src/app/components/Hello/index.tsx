import "./style.scss";

import Image from "next/image";

export default function Hello() {
  return (
    <p className="helloMessage">
      hi
      <Image
        src="hand.svg"
        className="hand"
        alt="hand"
        width={45}
        height={45}
      />
      , i&apos;m Emanuel
    </p>
  );
}
