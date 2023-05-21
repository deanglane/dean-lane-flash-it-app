// NavBar.js

const NavBar = () => {
  return (
    <nav className="topNav">
      <div className="wrapper navBar">

        <div className="navMenu">
          <div className="logo">
            <img className="logoImg" src={require('../../assets/logo2.png')} alt="" />
          </div>
          <ul>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Who We Are</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="auth">
          <button className="btn">Log in</button>
          <button className="btn">Get Started</button>
        </div>


      </div>
    </nav>
  )
}

export default NavBar;