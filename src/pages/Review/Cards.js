import React from "react";

const Cards = ({ flashCards }) => {
  const handleReveal = (e) => {
    const reveal = e.target.parentElement.nextElementSibling;
    reveal.classList.remove("reviewCard--hidden");
    reveal.classList.add("reviewCard--active");
  };

  const handleHide = (e) => {
    const hide = e.target.parentElement;
    hide.classList.remove("reviewCard--active");
    hide.classList.add("reviewCard--hidden");
  };
  return (
    <ul>
      <div className="instructions">
        <p>Here are your flash cards to review</p>
        <p>Click on the answer button to reveal the back side</p>
        <p>
          When the back is revealed, click the Hide button to remove the card
          from view
        </p>
      </div>
      {flashCards.map((flashCard) => {
        return (
          <li>
            <div className="reviewCard--active">
              <p>{flashCard.card.front}</p>
              <button className="btn" onClick={handleReveal}>
                Reveal Answer
              </button>
            </div>
            <div className="reviewCard--hidden">
              <p>{flashCard.card.back}</p>
              <button className="btn" onClick={handleHide}>
                Hide
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;
