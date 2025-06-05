import './index.css'

const SignIn = props => {
  const loginClicked = () => {
    const {history} = props
    history.replace('/AccountSettings')
  }
  return (
    <div className="main-container-signin">
      <h1 className="main-heading-signin">
        Signin to your <br />
        PopX account
      </h1>
      <p className="description-1-signin">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit,
      </p>
      <label className="input-label" htmlFor="emailAddress">
        Email address
      </label>
      <input
        id="emailAddress"
        type="email"
        name="email"
        className="input-styling-2"
        required
      />

      <label className="input-label" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        name="password"
        className="input-styling-2"
        required
      />
      <button onClick={loginClicked} className="login-button">
        Login
      </button>
    </div>
  )
}
export default SignIn
