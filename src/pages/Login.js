import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../'; // Optional: Add CSS styles here or create a separate file

function Login({isLoggedIn, setisLoggedIn}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate =useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
    // Add your login logic here
  };

  const handleSignup = () => {
    console.log('Redirecting to Signup');
    // Add your signup redirection logic here
  };

  const loginHandler = () => {
    setisLoggedIn(true);
    Navigate('/user-actions')
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button onClick={()=>loginHandler()} type="submit" className="login-button">Login</button>
      </form>
      <button onClick={handleSignup} className="signup-button">Sign Up</button>
    </div>
  );
}

export default Login;
