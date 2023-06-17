import React from 'react';
import { useParams } from "react-router-dom";

function Greeting() {
    let {name} = useParams()
  return (
    <div>
        <h2>Hello, {name}</h2>
    </div>
  );
}

export default Greeting