import { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      
        <h1>Counter{count}</h1>

        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Add
        </button>

        <button
          onClick={() => {
            setcount(count - 1);
          }}
        >
          Subtract{" "}
        </button>

        <button
          onDoubleClick={() => {
            setcount(count * 2);
          }}
        >
          Multiplication{" "}
        </button>
      </div>
    
  );
};
