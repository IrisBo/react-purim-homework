import React, { SyntheticEvent, useState } from "react";

export function Name() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");
  const [imgHidden, SetImageHidden] = useState(true);
  // Event handler to update the input value
  const handleChange = (event: any) => {
    if (event.target.value !== "idan") {
      setInputValue(event.target.value);
    } else {
      setInputValue("Satan");
      SetImageHidden(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your name here"
        onChange={handleChange}
      />
      <p>{inputValue}</p>
      <img hidden={imgHidden} className="devil-pic" src="../src/assets/devil.jpg" />
    </div>
  );
}

export default Name;
