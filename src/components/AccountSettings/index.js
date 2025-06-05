import './index.css'

const AccountSettings = () => {
  return (
    <div className="account-settings-maincontainer">
      <div className="heading-block">
        <h1 className="heading">Account Settings</h1>
      </div>
      <div className="image-mail-container">
        <img
          alt="UserImage"
          src="https://www.w3schools.com/howto/img_avatar.png"
          className="profile-image"
        />
        <div>
          <h1 className="sub-heading">Marry Doe</h1>
          <p className="description">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="description-2">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <hr className="dotted-styling" />
    </div>
  )
}
export default AccountSettings
