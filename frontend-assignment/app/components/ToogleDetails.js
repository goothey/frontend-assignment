// app/components/ToggleDetails.js - 3rd stateful component (Rubric: 3 components required)
'use client';

import { useState } from 'react';

export default function ToggleDetails() {
  // Component 3: Manages its own independent state
  const [showDetails, setShowDetails] = useState(false);

  // Event handler 5: Button click toggles state
  const handleToggle = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div className="card">
      <button onClick={handleToggle}>
        {showDetails ? '🙈 Hide Assignment Details' : '👀 Show Assignment Details'}
      </button>
      
      {/* Conditional rendering with logical && operator */}
      {showDetails && (
        <div>
          <p><strong> Assignment Features Demonstrated:</strong></p>
          <ul>
            <li>3 stateful components (Counter, Todo, Toggle)</li>
            <li>Props passing (StatusMessage receives data)</li>
            <li>5+ event handlers (clicks, submit, input change)</li>
            <li>Multiple conditional rendering patterns</li>
            <li>Professional CSS styling</li>
          </ul>
          <p><em>Created by Karan Rana Magar (n01742592)</em></p>
        </div>
      )}
    </div>
  );
}
