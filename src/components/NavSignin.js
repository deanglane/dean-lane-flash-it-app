// NavSignIn.js
// Components
import Hamburger from './Hamburger.js';

// Modules
import { Link } from 'react-router-dom';

const NavSignin = () => {
  return (
    <>
      <div className="auth">
        <Link to="/login" className="navLogin">Log in</Link>
        <Link to="/register" className="btn">Get Started</Link>
      </div>
      <Hamburger />
    </>
  )
}

export default NavSignin;