// Footer.js

const Footer = () => {
  return (
    <footer>

      <div className="upperFooter">

        <div className="wrapper siteMap">
          <div className="branding">
            <div className="logo">
              <img className="logoImg" src={require('../assets/logo2.png')} alt="" />
            </div>
            <address>
              <p>Flash It</p>
              <p><a href="https://deanlane.ca/"> Dean Lane</a></p>
              <p>Toronto, ON</p>
            </address>
            <p>Copyright <span>&copy;</span> All rights reserved</p>
          </div>

          <div className="quote">
            <q>I am still learning.</q>
            <cite> Michelangelo</cite>
          </div>

          <div className="footerNav">
            <nav>
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
            </nav>
          </div>
        </div>

      </div>

      <div className="lowerFooter">
        <div className="junoBrand">
          <div className="junoLogo">
            <img src={require('../assets/Juno_college_logo.webp')} alt="" />
          </div>
          <p>Created at <a href="https://junocollege.com/">Juno College</a></p>
        </div>
      </div>

    </footer>
  )
}

export default Footer;