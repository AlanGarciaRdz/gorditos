import React from "react";
import { useState } from "react/cjs/react.development";

function Card({ prop }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <div
      className="
        flex
        justify-center
        text-3xl md:text-7xl
        p-6 w-50 h-50md:p-10 md:w-60 md:h-60
        items-center
        drop-shadow-md
        rounded-md"
    >
      {/* <div onClick={handleClick} className="flex"> */}
      <div  className="flex">
        {/* <div>{prop}</div> */}
        <img src={prop}></img>
      </div>
    </div>
  );
}

export default Card;
