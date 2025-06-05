import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const CreateAccountForm = () => {
  const history = useHistory()

  // Separate state variables
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [isAgency, setIsAgency] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    // (Optional) Adding  validation here
    if (fullName && phone && email && password && isAgency) {
      // Redirect after form submission
      history.push('/AccountSettings')
    }
  }

  return (
    <div className="form-card">
      <h1>
        Create your <br /> PopX account
      </h1>

      <label htmlFor="fullName">
        Full Name<span>*</span>
      </label>
      <input
        id="fullName"
        type="text"
        name="fullName"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
        className="input-styling"
        required
      />

      <label htmlFor="phoneNumber">
        Phone number<span>*</span>
      </label>
      <input
        id="phoneNumber"
        type="tel"
        name="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="input-styling"
        required
      />

      <label htmlFor="emailAddress">
        Email address<span>*</span>
      </label>
      <input
        id="emailAddress"
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="input-styling"
        required
      />

      <label htmlFor="password">
        Password<span>*</span>
      </label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="input-styling"
        required
      />

      <label htmlFor="companyName">Company name</label>
      <input
        id="companyName"
        type="text"
        name="company"
        value={company}
        onChange={e => setCompany(e.target.value)}
        className="input-styling"
      />

      <label>
        Are you an Agency?<span>*</span>
      </label>
      <div className="radio-group">
        <label htmlFor="yes">
          <input
            id="yes"
            type="radio"
            name="isAgency"
            value="yes"
            checked={isAgency === 'yes'}
            onChange={e => setIsAgency(e.target.value)}
          />
          Yes
        </label>
        <label htmlFor="no">
          <input
            id="no"
            type="radio"
            name="isAgency"
            value="no"
            checked={isAgency === 'no'}
            onChange={e => setIsAgency(e.target.value)}
          />
          No
        </label>
      </div>

      <button onClick={handleSubmit}>Create Account</button>
    </div>
  )
}

export default CreateAccountForm
