import { useState, useEffect } from 'react';
import requests from '../api/requests';
import '../styles/login-modal.scss';

const LoginModal = (props) => {
  const [email, setEmail] = useState('');
  const { setUserId } = props;

  const fetchData = () => {
    requests
      .get
      .idByEmail(email)
      .then((user) => {
        setUserId(user.id);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [setUserId]);

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



