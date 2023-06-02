// Review.js
import { getDatabase, ref, get } from 'firebase/database';
import firebase from '../../util/firebase.js';
import { getAuth } from "firebase/auth";
import { useEffect, useState } from 'react';



const Review = () => {
  const auth = getAuth();

  const [flashCards, setFlashCards] = useState([]);
  
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/profiles/${auth.currentUser.uid}/cards`);
    
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        
        const newState = [];
        const cards = snapshot.val()
        
        for (const key in cards) {
          const cardData = {
            key: key,
            card: cards[key]
          };

          newState.push(cardData);
        }

        setFlashCards(newState);
        
      } else {
        console.log("No Cards Created");
      }
    }).catch((error) => {
      console.log(error);
    })

  }, [])


  const handleReveal = (e) => {
    const reveal = e.target.parentElement.nextElementSibling;
    reveal.classList.remove('reviewCard--hidden');
    reveal.classList.add('reviewCard--active');
  };

  const handleHide = (e) => {
    console.log('answer card', e.target.parentElement);
    const hide = e.target.parentElement;
    hide.classList.remove('reviewCard--active');
    hide.classList.add('reviewCard--hidden');
  };

  return (
    <>
      <section className="reviewSection wrapper">
        <div className="flashCards">
          <div className="reviewHeader">
            <h2>Review</h2>
          </div>

          <ul>
            {flashCards.map((flashCard) => {
              return (
                <li>
                  <div className="reviewCard--active">
                    <p>{flashCard.card.front}</p>
                    <button className='btn' onClick={handleReveal}>Answer</button>

                  </div>
                  <div className="reviewCard--hidden">
                    <p>{flashCard.card.back}</p>
                    <button className='btn' onClick={handleHide}>Hide</button>
                  </div>
                </li>
              )
            })}
          </ul>

        </div>
      </section>
    </>
  )
}

export default Review;