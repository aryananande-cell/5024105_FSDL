import { useState } from 'react';

function KeysPage() {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Master Hooks', completed: false },
    { id: 3, text: 'Understand Keys', completed: false },
  ]);

  const [newItem, setNewItem] = useState('');
  const [sortOrder, setSortOrder] = useState('id');

  const addItem = () => {
    if (newItem.trim()) {
      const newId = Math.max(...items.map(item => item.id)) + 1;
      setItems([...items, { id: newId, text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const sortItems = (key) => {
    const sorted = [...items].sort((a, b) => {
      if (key === 'text') {
        return a.text.localeCompare(b.text);
      }
      return a[key] - b[key];
    });
    setItems(sorted);
    setSortOrder(key);
  };

  const shuffleItems = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  };

  // Dynamic list rendering with keys
  const renderItem = (item, index) => (
    <li key={item.id} className={`list-item ${item.completed ? 'completed' : ''}`}>
      <span className="item-index">#{index + 1}</span>
      <span
        className="item-text"
        onClick={() => toggleItem(item.id)}
        style={{ cursor: 'pointer' }}
      >
        {item.text}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteItem(item.id)}
      >
        ×
      </button>
    </li>
  );

  return (
    <div className="keys-page">
      <h1>Keys & Lists Demo</h1>

      <div className="keys-demo">
        <h2>1. Dynamic List with Keys</h2>
        <div className="add-item">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
          />
          <button onClick={addItem}>Add Item</button>
        </div>

        <div className="list-controls">
          <button onClick={() => sortItems('id')}>Sort by ID</button>
          <button onClick={() => sortItems('text')}>Sort by Text</button>
          <button onClick={shuffleItems}>Shuffle</button>
        </div>

        <ul className="dynamic-list">
          {items.map((item, index) => renderItem(item, index))}
        </ul>
      </div>

      <div className="keys-demo">
        <h2>2. Why Keys Matter</h2>
        <div className="key-explanation">
          <p>Keys help React identify which items have changed, are added, or are removed.</p>
          <p>Without proper keys, React might re-render unnecessarily or lose component state.</p>
          <ul>
            <li>✅ Use unique, stable identifiers</li>
            <li>❌ Don't use array indices as keys for dynamic lists</li>
            <li>✅ Keys should be unique among siblings</li>
          </ul>
        </div>
      </div>

      <div className="keys-demo">
        <h2>3. Key Performance Benefits</h2>
        <div className="performance-demo">
          <p>Try adding/removing items and notice how React efficiently updates only changed elements.</p>
          <div className="stats">
            <div className="stat">Total Items: {items.length}</div>
            <div className="stat">Completed: {items.filter(item => item.completed).length}</div>
            <div className="stat">Pending: {items.filter(item => !item.completed).length}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeysPage;