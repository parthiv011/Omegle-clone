import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [name, setName] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => {
        setName(e.target.value);
      }}></input>

      <Link to={`/room/?name=${name}`}onClick={() => {
        //Join room logic here
      }}>Join</Link>
    </>
  );
}
