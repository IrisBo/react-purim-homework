
import React, { useState } from "react";

export function Name() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  // Event handler to update the input value
  const handleChange = (event:any) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your name here"
        value={inputValue}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
}

export default Name;
