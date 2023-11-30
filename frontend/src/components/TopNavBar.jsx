import { useContext, useState } from 'react';
import "../styles/top-navbar.scss";
import LoginModal from "./LoginModal";
import { useUserContext } from "../contextProviders/useUserContext";



export default function TopNavBar(props) {
  const { handleLinkClick } = props;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, setUser } = useUserContext();

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogoutClick = () => {
    setIsLoginModalOpen(false);
    setUser(null);
    window.location.href = '/';
  };

  return (
    <div>
      <nav className="top-nav-bar">
        <span onClick={() => handleLinkClick(0)} className="top-nav-bar__logo">InvoiceForge</span>

        {user &&
          <div className="top-nav-bar__list">
            <span onClick={() => handleLinkClick(1)}>Schedule</span>
            <span onClick={() => handleLinkClick(2)}>Client List</span>
            <span onClick={() => handleLinkClick(3)}>Appointments in Review</span>
            <span onClick={() => handleLinkClick(4)}>Forge Invoice</span>
          </div>}

        <div className="top-nav-bar__authentication">
          {!user && (<span onClick={handleLoginClick}>Log In</span>)}
          {user && (<span className='afterlogin'>Hello, {user.firstName}.</span>)}
          {user && (<span className='afterlogin' onClick={handleLogoutClick}>Log Out</span>)}
          {!user && (<span>Sign Up</span>)}
        </div>

        {isLoginModalOpen && !user && <LoginModal onClose={handleModalClose} setUser={setUser} handleLinkClick={handleLinkClick} />}
      </nav>
    </div>
  );
}
