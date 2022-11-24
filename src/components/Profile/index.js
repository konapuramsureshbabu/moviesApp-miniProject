import Cookies from 'js-cookie'
import Footer from '../Footer'
import './index.css'

const Profile = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <div className="profile-page">
        <h1 className="pro-head">Account</h1>
        <hr className="hr-line" />
        <div className="member-ship-details">
          <p className="member-text">Member ship</p>
          <div className="user-details">
            <p className="user">Rahul@gamil.com</p>
            <p className="pass">
              Password:<span>**********</span>
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="plan-details">
          <p className="plan-text">Plan details</p>
          <p className="plan-text">Premium</p>
          <p className="plan-text">Ultra HD</p>
        </div>
        <hr className="hr-line" />
        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <Footer />
    </>
  )
}
export default Profile
