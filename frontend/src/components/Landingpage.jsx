import "../styles/landing-page.scss"

export default function LandingPage(props) {
  return (
    <div className="landing-container">
    <div className="landing-text-box">
      <h2>Master Your Schedule and Billing with Invoice Forge: Effortless Management for Contractors!</h2>
      <p>
        Effortlessly manage your appointments and streamline billing with Invoice Forge—an intuitive app designed for contractors. Create accounts, add clients, and navigate your schedule effortlessly. Edit, review, and bill appointments seamlessly. 
        Our automatic invoicing ensures accurate, hassle-free transactions. Join today for a simplified approach to client management and billing.
      </p>
    </div>
    <img className="landing-image" src="/landing.jpg" alt="landing" />
  </div>
)
};

