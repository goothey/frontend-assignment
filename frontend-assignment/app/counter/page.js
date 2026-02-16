
'use client'; 

import { useState } from 'react';
import StatusMessage from '../components/StatusMessage'; // Uses props

export default function CounterPage() {
  // Component 1: Manages its own state 
  const [count, setCount] = useState(0);

  // Event handler 1: Button click updates state 
  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);

  return (
    <section>
      <h2>Counter Page </h2>
      <p>Current value: <strong>{count}</strong></p>

      {/* 2 different button click events */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      {/* Passes state as props to child component */}
      <StatusMessage
        label="Counter"
        value={count}
        positiveMessage=" Nice! The counter is positive."
        zeroMessage=" The counter is at zero."
        negativeMessage=" NO! The counter is negative."
      />
    </section>
  );
}
