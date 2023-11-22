import { useState, useEffect } from 'react';
import requests from '../api/requests';
import '../styles/login-modal.scss';
import ClientList from './ClientList';

const LoginModal = (props) => {
  const [email, setEmail] = useState('');
  const { setUser, user, setShowClientList, showClientList } = props;
  const [client, setClient] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // This effect runs after every render
    if (loggedIn && client.length === 0) {
      console.log('client', client)
      toggleShowClientList();
    }
  },[]); // Watch for changes in loggedIn and client

  const toggleShowClientList = () => {
    setShowClientList(true);
  };

  const fetchUser = async () => {
    try {
      const user = await requests.get.idByEmail(email);
      setUser(user);
      console.log(user)
      if (user) {
        setLoggedIn(true); // Set loggedIn to true after successful login
        console.log("loginState", loggedIn)
        const userData = await requests.get.userData(user.id);
        const { clients } = userData;
        console.log("clients", clients)
        setClient(clients);
        console.log("clientState", client)
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

      {showClientList && <ClientList />}
    </div>
  );
};

export default LoginModal;



