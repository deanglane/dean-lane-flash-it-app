// Feature.js

const Feature = () => {
  return (
    <section className="feature">
      <div className="wrapper featureContain">

        <div className="upperFeature">
          <p>Why do flashcards remain a tried-and-true method for effective learning? It's simple. Our brains are wired to learn through repetition and association. Flashcards leverage these natural cognitive processes, making them a potent tool for information retention. By employing a combination of text, visuals, and active recall, our web app harnesses the full potential of flashcards to optimize your study sessions and supercharge your memory.</p>
          <div className="featureImg">
            <img src={require('../../assets/man_studying.png')} alt="Cartoon illustration of a man sitting a a computer studying" />
          </div>
        </div>

        <div className="lowerFeature">
          <div className="featureImg">
            <img src={require('../../assets/man_using_computer.png')} alt="Cartoon illustration of a man sitting a a computer learning" />
          </div>
          <p>We believe that learning should be engaging, efficient, and tailored to individual needs. With our user-friendly interface and intuitive features, you can create and customize your own flashcards effortlessly. Whether you're studying for exams, learning a new language, or simply expanding your knowledge, our web app provides a versatile platform for mastering any subject.</p>
        </div>

      </div>
    </section>
  )
}

export default Feature;