import { useState } from 'react';
import "../styles/top-navbar.scss";
import LoginModal from "./LoginModal";

export default function TopNavBar(props) {
  const { userId, setUserId } = props

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

      {userId!== 0 &&
      <div className="top-nav-bar__list">
        <span>Schedule</span>
        <span>Client List</span>
        <span>Appointments in Review</span>
        <span>Forge Invoice</span>
      </div>}

      <div className="top-nav-bar__authentication">
        {userId === 0 && (<span onClick={handleLoginClick}>Login</span>)}
        {userId !== 0 && (<span>You are logged in</span>)}
        {userId === 0 && (<span>Sign Up</span>)}
      </div>
      
      {isLoginModalOpen && userId === 0 && <LoginModal onClose={handleModalClose} userId={userId} setUserId={setUserId}/>}
    </nav>
  );
}
