"use client"
import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0); // state variable

  useEffect(() => {
    // effect logic
    console.log('Effect ran');
  }, [count]); // dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}