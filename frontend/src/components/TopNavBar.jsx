import "../styles/top-navbar.scss"

export default function TopNavBar(props) {
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
    <span>Login</span>
    <span>Sign Up</span>
    </div>
    </nav>
  )
};