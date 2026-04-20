import { useRef, useState, useEffect } from 'react';

function RefsPage() {
  const inputRef = useRef(null);
  const focusButtonRef = useRef(null);
  const canvasRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleFocusClick = () => {
    inputRef.current?.focus();
    inputRef.current?.select();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Canvas drawing functionality
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    const startDrawing = (e) => {
      drawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    const draw = (e) => {
      if (!drawing) return;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.strokeStyle = '#007bff';
      ctx.lineWidth = 3;
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    const stopDrawing = () => {
      drawing = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="refs-page">
      <h1>Refs Demo</h1>

      <div className="ref-demo">
        <h2>1. Input Focus with useRef</h2>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="This input auto-focuses on load"
        />
        <button onClick={handleFocusClick}>Focus Input</button>
        <p>Input value: {inputValue}</p>
      </div>

      <div className="ref-demo">
        <h2>2. Canvas Drawing with useRef</h2>
        <canvas
          ref={canvasRef}
          width="400"
          height="300"
          style={{ border: '2px solid #007bff', cursor: 'crosshair' }}
        />
        <br />
        <button onClick={clearCanvas}>Clear Canvas</button>
        <p>Draw on the canvas above using your mouse!</p>
      </div>

      <div className="ref-demo">
        <h2>3. DOM Manipulation</h2>
        <button
          ref={focusButtonRef}
          onClick={handleScrollToTop}
          className="scroll-button"
        >
          Scroll to Top
        </button>
        <p>This button uses refs for DOM manipulation and smooth scrolling.</p>
      </div>

      <div className="ref-demo">
        <h2>4. Measuring Elements</h2>
        <div className="measurement-container">
          <div className="measured-element">
            This element's dimensions are measured using refs
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefsPage;