"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      {count === 0 ? (
        <button disabled>Decrement</button>
      ) : (
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      )}
      {count >= 10 ? (
        <button disabled>Increment</button>
      ) : (
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
      )}
    </>
  );
}
