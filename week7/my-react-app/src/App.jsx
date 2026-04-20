import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserForm from './UserForm'
import Display from './Display'
import InteractiveCounter from './InteractiveCounter'
import TodoList from './TodoList'

function App() {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmissions([...submissions, data]);
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Interactive React App</h1>
          <p>
            Demonstrating Components, Props, State, Forms, and Events
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="interactive-section">
        <InteractiveCounter initialCount={5} />
        <TodoList />
        <UserForm onSubmit={handleFormSubmit} />
        <Display submissions={submissions} />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
