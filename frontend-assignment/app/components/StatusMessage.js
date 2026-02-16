//  - Receives props from parent components 
export default function StatusMessage({
    label,
    value,
    positiveMessage,
    zeroMessage,
    negativeMessage,
  }) {
    // Conditional rendering inside component using props (if/else pattern)
    let message;
  
    if (value > 0) {
      message = positiveMessage;
    } else if (value === 0) {
      message = zeroMessage;
    } else {
      message = negativeMessage || 'Value is negative.';
    }
  
    return (
      <div className="status-box">
        <h3>{label} Status</h3>
        <p>{message} (Value: {value})</p>
      </div>
    );
  }
  
