import React, { useState } from 'react';

import "../styles/login-modal.scss";

const LoginModal = (props) => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await fetch(`/api/user/${email}`);

      if (response.ok) {
        // Parse the response JSON
        const data = await response.json();

        // Handle the response
        const { userData } = data;
        // Set token or user ID in your application state or context
        setUserData(userData);
        
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="modal" id="loginModal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                // required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

