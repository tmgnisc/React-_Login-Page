import React, { useState } from 'react';
import './App.css';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // In a real application, you would perform authentication here
    // For simplicity, let's assume the login is successful if username and password are non-empty
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          {/* Add your post-login content or redirect to another page */}
        </div>
      ) : (
        <div>
          <h2>Login Page</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
