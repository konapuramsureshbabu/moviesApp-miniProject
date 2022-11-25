import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <h1 className="not-heading">Lost Your Way ?</h1>
    <p className="not-text">
      we are sorry, the page you requested could not be found Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="back-to-home">
        Go to Home
      </button>
    </Link>
  </div>
)
export default NotFound
