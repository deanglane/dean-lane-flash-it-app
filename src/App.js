import './styles.css';


function App() {
  return (
    <>
      <header>

        <nav className="topNav">
          <div className="wrapper navBar">

            <div className="navMenu">
              <div className="logo">
                <img className="logoImg" src={require('./assets/logo2.png')} alt="" />
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

        <div className="heroContain">
          <div className="heroHeadlines">
            {/* here headline font 72px weight 400 */}
            <h1>Flash It helps you study more efficiently</h1>
              {/* here sub-headline font 24px-ish weight 400 */}
            <h3>Say goodbye to mindless memorization and hello to an interactive learning experience.</h3>
            <button className="btn">Get Started</button>
          </div>
        </div>
        {/* <div className="introImage">
          <img src="http://via.placeholder.com/1000x200" alt="" />
        </div> */}

      </header>

      <main>
        <section>
          <div className="wrapper introContain">
            <div className="intro">
              <h2 className="introTitleH2">say hello to flash it</h2>
              <p>A web-based flash card app to help with your memory recollection.</p>
              <p>Are you tired of traditional study methods that feel mundane and ineffective? Look no further! Introducing the power of flashcards. The time-tested technique that has helped countless learners around the world achieve academic success.
              </p>
              <p>We believe that learning should be engaging, efficient, and tailored to individual needs. With our user-friendly interface and intuitive features, you can create and customize your own flashcards effortlessly.</p>
              <div className="introBtns">
                <a className="btn" href="#articles">Learn More</a>
                <button className="btn">Get Started</button>
              </div>
            </div>

          </div>
        </section>

        <section className="feature">
          <div className="wrapper featureContain">

            <div className="upperFeature">
              <p>Why do flashcards remain a tried-and-true method for effective learning? It's simple. Our brains are wired to learn through repetition and association. Flashcards leverage these natural cognitive processes, making them a potent tool for information retention. By employing a combination of text, visuals, and active recall, our web app harnesses the full potential of flashcards to optimize your study sessions and supercharge your memory.</p>
              <div className="featureImg">
                <img src="http://via.placeholder.com/400x400" alt="" />
              </div>
            </div>

            <div className="lowerFeature">
              <div className="featureImg">
                <img src="http://via.placeholder.com/400x400" alt="" />
              </div>
              <p>We believe that learning should be engaging, efficient, and tailored to individual needs. With our user-friendly interface and intuitive features, you can create and customize your own flashcards effortlessly. Whether you're studying for exams, learning a new language, or simply expanding your knowledge, our web app provides a versatile platform for mastering any subject.</p>
            </div>

          </div>
        </section>

        <section className="callToAction">
          <div className="wrapper">

            <h2 className="callH2">Stay In Touch</h2>
            <h3 className="callH3">Join our mailing list</h3>

            <form action="">
              <label className="sr-only" htmlFor="name"></label>
              <input type="text" id="name" placeholder="Name" />
              <label className="sr-only" htmlFor="email"></label>
              <input type="email" id="email" placeholder="E-mail Address" />
              <button className="btn">Join</button>
            </form>
          </div>
        </section>

        {/* articles */}
        <section className="articles" id="articles">
          <div className="wrapper">

            <h2 className="callH2">Articles</h2>
            <h3 className="callH3">Read the latest about study techniques!</h3>

            <div className="artCardContain">

              <div className="artCard">
                <div className="artCardHeader">
                  <img src={require('./assets/aaron-burden-QJDzYT_K8Xg-unsplash.jpg')} alt="Photo by Aaron-Burden " />
                </div>
                <div className="artCardBody">
                  <h4>Boosting Memory Recollection:</h4>
                  <h5>Unleashing the Power of Flash Card Technique</h5>
                  <p>In the realm of memory recollection, the flash card technique has proven to be a powerful tool. From students aiming to excel in exams to professionals seeking to retain vast amounts of information, flash cards offer an effective and efficient way...</p>
                  <button>read more</button>
                </div>
              </div>

              <div className="artCard">
                <div className="artCardHeader">
                  <img src={require('./assets/jo-szczepanska-bjemWZcNF34-unsplash.jpg')} alt="Photo by Jo Szczepanska" />
                </div>
                
                <div className="artCardBody">
                  <h4>Unleashing the Power of Visual Memory:</h4>
                  <h5>How Humans Retain Memories Using Images</h5>
                  <p>Throughout our lives, our minds become a treasure trove of memories, storing countless experiences and information. Among the various tools that aid in memory retention, images hold a remarkable place. From childhood recollections...</p>
                  <button>read more</button>
                </div>
              </div>

              <div className="artCard">
                <div className="artCardHeader">
                  <img src={require('./assets/afonso-coutinho-2mN0Bxrnr34-unsplash.jpg')} alt="Photo by Afonso Coutinho" />
                </div>

                <div className="artCardBody">
                  <h4>Striking a Balance:</h4>
                  <h5>Study Duration and the Vitality of Breaks</h5>
                  <p>The pursuit of effective studying involves understanding the delicate interplay between study duration and the value of taking breaks. In this article, we delve into the optimal length of study sessions, explore the science behind the importance of breaks...</p>
                  <button>read more</button>
                </div>
              </div>

            {/* wrapper end */}
            </div>
            {/* section end */}
          </div>

        </section>
      </main>
      <footer>

        <div className="upperFooter">

          <div className="wrapper siteMap">
            <div className="branding">
              <div className="logo">
                <img className="logoImg" src={require('./assets/logo2.png')} alt="" />
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
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Build</a>
                  </li>
                  <li>
                    <a href="#">Review</a>
                  </li>
                  <li>
                    <a href="#articles">Articles</a>
                  </li>
                  <li>
                    <a href="#">Setting</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
        </div>
        
        <div className="lowerFooter">
          <div className="junoBrand">
            <div className="junoLogo">
              <img src={require('./assets/Juno_college_logo.webp')} alt="" />
            </div>
            <p>Created at <a href="https://junocollege.com/">Juno College</a></p>
          </div>
        </div>

      </footer>
    </>
  );
}

export default App;
