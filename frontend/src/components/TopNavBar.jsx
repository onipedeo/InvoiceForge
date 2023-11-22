import { useState } from 'react';
import "../styles/top-navbar.scss";
import LoginModal from "./LoginModal";


export default function TopNavBar(props) {
  const { user, setUser} = props

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleModalClose = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">InvoiceForge</span>

      {user &&
      <div className="top-nav-bar__list">
        <span>Schedule</span>
        <span>Client List</span>
        <span>Appointments in Review</span>
        <span>Forge Invoice</span>
      </div>}

      <div className="top-nav-bar__authentication">
        {!user && (<span onClick={handleLoginClick}>Login</span>)}
        {user && (<span className='username'>Hello, {user.first_name}.</span>)}
        {!user && (<span>Sign Up</span>)}
      </div>
      
      {isLoginModalOpen && !user && <LoginModal onClose={handleModalClose} setUser={setUser}/>}
    </nav>
  );
}
