import  "../styles/login-modal.scss"

export default function LoginModal(props) {

  return ( <div className="login-container">
  <h2>Login</h2>
  <form className="login-form ">
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        required
      />
    </div>
    <button type="submit">Login</button>
  </form>
</div>
)
}