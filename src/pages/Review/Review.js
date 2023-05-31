// Review.js
import { getDatabase, ref, push } from 'firebase/database';
import firebase from '../../util/firebase.js';
import { getAuth } from "firebase/auth";

// TODO - Map through all the cards one by one
// Fronts
// retrieve the users first flash card front
// put all the fronts into an array?
// iterate through the array onClick


const Review = () => {
  return (
    <>
      <section className="reviewSection wrapper">
        <div className="flashCard">
          <h2>Review</h2>
          {/* show front card here */}
          <div className="reviewButtons">
            <button className="btn">previous</button>
            <button className="btn">answer</button>
            <button className="btn">next</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Review;