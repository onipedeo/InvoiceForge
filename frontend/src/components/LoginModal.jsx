import { useState, useEffect } from 'react';
import requests from '../api/requests';
import '../styles/login-modal.scss';
import ClientList from './ClientList';

const LoginModal = (props) => {
  const [email, setEmail] = useState('');
  const { setUser, user, handleLinkClick} = props;

  const fetchUser = async () => {
    try {
      const user = await requests.get.idByEmail(email);
      setUser(user);
      const clients = await requests.get.user(user.id).clients
      if (clients.length === 0) {
       handleLinkClick(2)
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <div className="login-container">
      <div className="modal" id="loginModal">
        <span className="close" onClick={props.onClose}>
          &times;
        </span>
        <div className="modal-content">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-form">
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
                <input type="password" id="password" />
              </div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;



