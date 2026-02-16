// app/todo/page.js - 2nd stateful component (todos + task state) + form events
'use client';

import { useState } from 'react';
import StatusMessage from '../components/StatusMessage'; // Uses props

export default function TodoPage() {
  // Component 2: Manages its own state (Rubric: State Management)
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Event handler 2: Form submission (different from button clicks)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTodos(prev => [...prev, task.trim()]);
    setTask('');
  };

  // Event handler 3: Button click to clear list
  const handleClear = () => setTodos([]);

  return (
    <section>
      <h2>Todo List Demo</h2>

      {/* Form submission event handler */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)} // Event handler 4: Input change
        />
        <button type="submit"> Add Task</button>
      </form>

      {/* Conditional rendering based on state (Rubric: Conditional Rendering) */}
      {todos.length === 0 ? (
        <p> No tasks yet. Add your first task!</p>
      ) : (
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <button onClick={handleClear} disabled={todos.length === 0}>
         Clear All
      </button>

      {/* Passes state-derived data as props */}
      <StatusMessage
        label="Todo List"
        value={todos.length}
        positiveMessage=" You have tasks to complete!"
        zeroMessage=" No tasks! Enjoy your free time!"
        negativeMessage=""
      />
    </section>
  );
}
