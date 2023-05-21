// Intro.js

const Intro = () => {
  return (
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
  )
}

export default Intro;