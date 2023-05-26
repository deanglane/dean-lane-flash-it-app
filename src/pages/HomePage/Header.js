// Header.js
import NavBar from "./NavBar.js";

const Header = () => {
  return (
    <header>

      <div className="wrapper heroContain">
        <div className="heroHeadlines">
          {/* here headline font 72px weight 400 */}
          <h1><span>Flash It</span> helps you study more efficiently</h1>
          {/* here sub-headline font 24px-ish weight 400 */}
          <h3>Say goodbye to mindless memorization and hello to an interactive learning experience.</h3>
          <button className="btn">Get Started</button>
        </div>
        {/* <div className="download">
            <p>Coming Soon!</p>
            <img src={require('./assets/google-play-app-store-mobile-phones-google-thumbnail.jpg')} alt="" />
          </div> */}
      </div>

    </header>

  )
}

export default Header;