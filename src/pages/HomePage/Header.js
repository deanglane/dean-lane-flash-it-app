// Header.js

// import: Modules
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>

      <div className="wrapper heroContain">
        <div className="heroHeadlines">
          <h1><span>Flash It</span> helps you study more efficiently</h1>
          <h3>Say goodbye to mindless memorization and hello to an interactive learning experience.</h3>
          <button className="btn">
            <Link to="/register">Get Started</Link>
          </button>
        </div>
      </div>

    </header>

  )
}

export default Header;