// NavBar.js

//Import: Components
import NavLanding from '../../components/NavLanding.js';
import NavSignin from '../../components/NavSignin.js';
import NavSignedIn from '../../components/NavSignedIn.js';
import NavLogin from '../../components/NavLogin.js';

// Import: Modules

import {
  Routes,
  Route
} from 'react-router-dom';

const NavBar = () => {

  return (
    <>
      
      <nav className="topNav">
        <div className="wrapper navBar">

          <div className="navMenu">
            <div className="logo">
              <img className="logoImg" src={require('../../assets/logo.png')} alt="Company logo" />
            </div>
            {/* Loading menu components based on whats in the URL. If the user is logged then NavLogin will display. If anything is typed that is not a page then default to the homepage */}
            <Routes>
              <Route path="*" element={<NavLanding />}/>
              <Route path="/Build" element={<NavLogin />}/>
              <Route path="/Review" element={<NavLogin />} />
            </Routes>
          </div>

          <Routes>
            <Route path="*" element={<NavSignin />} />
            <Route path="/Build" element={<NavSignedIn />} />
            <Route path="/Review" element={<NavSignedIn />} />
          </Routes>

        </div>
      </nav>
     
    </>
  )
}

export default NavBar;