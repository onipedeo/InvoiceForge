import { useState, useEffect } from 'react';
import requests from '../api/requests';
import '../styles/login-modal.scss'; 


const LoginModal = (props) => {
  const [email, setEmail] = useState('');
  const { setUser, user, handleLinkClick} = props;

  const fetchUser = async () => {
    try {
      const user = await requests.get.idByEmail(email);
      setUser(user);
      const userData = await requests.get.userData(user.id);
      const { clients } = userData;
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
      <div className="login-modal" id="loginModal">
        <span className="login-close" onClick={props.onClose}>
          &times;
        </span>
        <div className="modal-content">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <div className="login-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
              </div>
              <button className='login-button' type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
