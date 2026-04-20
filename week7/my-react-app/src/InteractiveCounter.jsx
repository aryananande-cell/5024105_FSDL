import { useState } from 'react';

function InteractiveCounter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const [isHovered, setIsHovered] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="interactive-counter">
      <h2>Interactive Counter</h2>
      <div
        className={`counter-display ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Count: {count}
      </div>
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default InteractiveCounter;