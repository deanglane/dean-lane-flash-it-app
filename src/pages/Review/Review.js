// Review.js

// import Modules
import { getDatabase, ref, get } from "firebase/database";
import firebase from "../../util/firebase.js";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

// import components
import Cards from "./Cards.js";
import { Link } from "react-router-dom";

const Review = ({ displayName }) => {
  const [flashCards, setFlashCards] = useState([]);
  const [checkCards, setCheckCards] = useState("");

  const auth = getAuth();
  const userId = auth.currentUser.uid;

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/profiles/${userId}/cards`);

    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCheckCards(false);
          const newState = [];
          const cards = snapshot.val();

          for (const key in cards) {
            const cardData = {
              key: key,
              card: cards[key],
            };

            newState.push(cardData);
          }

          setFlashCards(newState);
        } else {
          setCheckCards(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, [userId]);

  return (
    <>
      <section className="reviewSection wrapper">
        <div className="flashCards">
          <div className="reviewHeader">
            <h2>Review</h2>
            <div className="reviewNavBtn">
              <Link to="/build">
                <button className="btn btn1">Build</button>
              </Link>
              <Link to="/review">
                <button className="btn">Review</button>
              </Link>
            </div>
          </div>
          {/* ternary expression to check if there are cards created in the database, If false a message will be displayed, if true the cards will display */}
          {checkCards ? (
            <div className="noCards">
              <h3>No Cards Created.</h3>
              <p>
                Go to the build page and start creating your flash it deck now!
              </p>
            </div>
          ) : (
            <div className="reviewCards">
              <div className="instructions">
                <p>Here are your flash cards to review</p>
                <p>Click on the answer button to reveal the back side</p>
                <p>
                  When the back is revealed, click the Hide button to remove the
                  card from view
                </p>
              </div>
              <Cards flashCards={flashCards} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Review;
