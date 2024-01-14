import React, { useState } from "react";
import firebase from "../../util/firebase.js";
import { getDatabase, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Build = () => {
  const [userInput, setUserInput] = useState({
    back: "",
    front: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    const database = getDatabase(firebase);

    const dbRef = ref(database, `/profiles/${auth.currentUser.uid}/cards`);

    push(dbRef, userInput);

    setUserInput({
      back: "",
      front: "",
    });

    toast.success("Successfully created!");
  };
  const handleChange = (e) => {
    //spreading existing state back into new state value
    // pushes each new card to the end of the array
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setUserInput({
      back: "",
      front: "",
    });
    toast("Form Cleared!");
  };

  return (
    <>
      <section className="formSection">
        <div className="buildHeader wrapper">
          <h2>Topic Builder</h2>
          <div className="navButtons">
            <Link to="/build">
              <button className="btn btn1">Build</button>
            </Link>
            <Link to="/review">
              <button className="btn">Review</button>
            </Link>
          </div>
        </div>
        <div className="formContain">
          <form onSubmit={handleSubmit} action="submit">
            <div className="inputContainer">
              <div className="front">
                <label htmlFor="front">Front</label>
                <textarea
                  name="front"
                  id="front"
                  onChange={handleChange}
                  value={userInput.front}
                  placeholder="Enter your question or statement here"
                ></textarea>
              </div>

              <div className="back">
                <label htmlFor="back">Back</label>
                <textarea
                  name="back"
                  id="back"
                  onChange={handleChange}
                  value={userInput.back}
                  placeholder="enter your answer here"
                ></textarea>
              </div>
            </div>

            <div className="formButtons">
              <button className="btn" type="button" onClick={handleClear}>
                Clear
              </button>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default Build;
