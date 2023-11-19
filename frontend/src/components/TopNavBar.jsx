import { useState } from 'react';
import "../styles/top-navbar.scss";
import LoginModal from "./LoginModal";

export default function TopNavBar(props) {
  const { setUserData, userData } = props

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
      <div className="top-nav-bar__list">
        <span>Schedule</span>
        <span>Client List</span>
        <span>Appointments in Review</span>
        <span>Forge Invoice</span>
      </div>
      <div className="top-nav-bar__authentication">
        {!userData && (<span onClick={handleLoginClick}>Login</span>)}
        {userData && (<span>Welcome, {userData.first_name}</span>)}
        <span>Sign Up</span>
      </div>
      {isLoginModalOpen && <LoginModal onClose={handleModalClose} setUserData={setUserData}/>}
    </nav>
  );
}
