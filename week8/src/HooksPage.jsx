import { useState, useEffect } from 'react';

// Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Custom Hook: useWindowSize
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

function HooksPage() {
  const [name, setName] = useLocalStorage('name', '');
  const { width, height } = useWindowSize();
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  return (
    <div className="hooks-page">
      <h1>Custom Hooks Demo</h1>

      <div className="hook-demo">
        <h2>1. useLocalStorage Hook</h2>
        <p>Persists data in localStorage</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Hello, {name || 'stranger'}! Your name is saved in localStorage.</p>
      </div>

      <div className="hook-demo">
        <h2>2. useWindowSize Hook</h2>
        <p>Tracks window dimensions</p>
        <div className="window-size">
          <p>Width: {width}px</p>
          <p>Height: {height}px</p>
        </div>
        <p>Resize your browser window to see the values change!</p>
      </div>

      <div className="hook-demo">
        <h2>3. useFetch Hook</h2>
        <p>Fetches data from an API</p>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div className="user-card">
            <h3>{data.name}</h3>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HooksPage;