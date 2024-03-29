// Articles.js
import art1 from "../../assets/aaron-burden-QJDzYT_K8Xg-unsplash.jpg";
import art2 from "../../assets/jo-szczepanska-bjemWZcNF34-unsplash.jpg";
import art3 from "../../assets/afonso-coutinho-2mN0Bxrnr34-unsplash.jpg";

const Articles = () => {
  return (
    <section className="articles" id="articles">
      <div className="wrapper">
        <h2 className="callH2">Articles</h2>
        <h3 className="callH3">Read the latest about study techniques!</h3>

        <div className="artCardContain">
          <div className="artCard">
            <div className="artCardHeader">
              <img src={art1} alt="Open books on a table" />
            </div>
            <div className="artCardBody">
              <h4>Boosting Memory Recollection:</h4>
              <h5>Unleashing the Power of Flash Card Technique</h5>
              <p>
                In the realm of memory recollection, the flash card technique
                has proven to be a powerful tool. From students aiming to excel
                in exams to professionals seeking to retain vast amounts of
                information, flash cards offer an effective and efficient way...
              </p>
              <p>Author: Apaneh Eye</p>
              <button>read more</button>
            </div>
          </div>

          <div className="artCard">
            <div className="artCardHeader">
              <img src={art2} alt="cork board with post it notes" />
            </div>

            <div className="artCardBody">
              <h4>Unleashing the Power of Visual Memory:</h4>
              <h5>How Humans Retain Memories Using Images</h5>
              <p>
                Throughout our lives, our minds become a treasure trove of
                memories, storing countless experiences and information. Among
                the various tools that aid in memory retention, images hold a
                remarkable place. From childhood recollections...
              </p>
              <p>Author: Chagee Teapi</p>
              <button>read more</button>
            </div>
          </div>

          <div className="artCard">
            <div className="artCardHeader">
              <img src={art3} alt="Man sitting on a rock over looking water" />
            </div>

            <div className="artCardBody">
              <h4>Striking a Balance:</h4>
              <h5>Study Duration and the Vitality of Breaks</h5>
              <p>
                The pursuit of effective studying involves understanding the
                delicate interplay between study duration and the value of
                taking breaks. In this article, we delve into the optimal length
                of study sessions, explore the science behind the importance of
                breaks...
              </p>
              <p>Author: Avans Dayeye</p>
              <button>read more</button>
            </div>
          </div>

          {/* wrapper end */}
        </div>
        {/* section end */}
      </div>
    </section>
  );
};

export default Articles;
