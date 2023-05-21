// Navigation.js

const Navigation = () => {
  return (
    <nav className="topNav">
      <div className="wrapper navBar">
        <div className="navMenu">
          <div className="logo">
            {/* <img className="logoImg" src={require('./assets/logo2.png')} alt="" /> */}
          </div>
          <ul>
            <li>
              <a href="#">Build</a>
            </li>
            <li>
              <a href="#">Review</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
          </ul>
        </div>
      </div>  
    </nav>
  )
}

export default Navigation