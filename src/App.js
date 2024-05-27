import './App.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-card">
          <h1>
            Let's stay in touch.
          </h1>
          <p>
            Sign up for our newsletter to stay up-to-date on the latest products, receive exclusive discounts, and connect with other programmers who share your passion for all things tech.
          </p>
          <div className="input-container">
            <h2>Email:</h2>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="App-card">
          <p> <strong>Current Email Input:</strong> {email}</p>
        </div>
        <div className="App-card">
          <Link className="App-link" to="/about">
            About
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
