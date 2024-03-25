// import React from 'react'

// export default function Counter() {
//   return (
//     <div>Counter</div>
//   )
// }

// import { useState } from "react";

// export const Counter = () => {
//   const [count, setCount] = useState(0);

//   const handlePlus = () => {
//     if (count < 10) {
//       setCount(count + 1);
//     }
//   };

//   const handleMinus = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handlePlus}>+</button>
//       <div className="count">{count}</div>
//       <button onClick={handleMinus}>-</button>
//     </div>
//   );
// };

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="my-counter">
      <button onClick={handlePlus}>+</button>
      <div className="count">{count}</div>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};
