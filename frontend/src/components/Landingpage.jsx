import "../scss/styles/landing-page.scss";

export default function LandingPage(props) {
  return (
    <div className="landing-container">
      <div className="landing-text-box">
        <h3>Master your schedule with:</h3>
        <span className="langing-page__logo">Invoice Forge</span>
        <ul>
          <li>
            Create an account, add clients, and navigate your schedule intuitively!
          </li>
          <li>
            Edit, review, and bill appointments with ease!
          </li>
          <li>
            Generate accurate invoices with a few clicks!
          </li>

        </ul>
        <p>Join today for a simplified approach to time management and billing!</p>

      </div>
      <img className="landing-image" src="/landing.jpg" alt="landing" />
    </div>
  );
};
