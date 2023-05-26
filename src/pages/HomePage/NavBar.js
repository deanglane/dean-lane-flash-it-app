// NavBar.js
//Import: Components
import Register from '../Register/Register.js';
import NavLanding from '../../components/NavLanding.js';
import NavSignin from '../../components/NavSignin.js';
import NavSignedIn from '../../components/NavSignedIn.js';
import NavLogin from '../../components/NavLogin.js';

// Import: Modules
import {
  Link,
  Routes,
  Route,
  // useLocation
} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      
      <nav className="topNav">
        <div className="wrapper navBar">

          <div className="navMenu">
            <div className="logo">
              <img className="logoImg" src={require('../../assets/logo2.png')} alt="" />
            </div>
            <Routes>
              <Route path="*" element={<NavLanding />}/>
              <Route path="/Build" element={<NavLogin />}/>
            </Routes>
          </div>

          <Routes>
            <Route path="*" element={<NavSignin />} />
            <Route path="/Build" element={<NavSignedIn />} />
          </Routes>

        </div>
      </nav>


      
    </>
  )
}

export default NavBar;