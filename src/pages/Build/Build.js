import React, { useState } from "react"
import firebase from "../../util/firebase.js"
import { getDatabase, ref, push } from "firebase/database"
import { getAuth } from "firebase/auth"
import { Link } from "react-router-dom"

const Build = () => {
  const [userInput, setUserInput] = useState({
    back: "",
    front: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const auth = getAuth()
    const database = getDatabase(firebase)

    const dbRef = ref(database, `/profiles/${auth.currentUser.uid}/cards`)

    push(dbRef, userInput)

    setUserInput({
      back: "",
      front: "",
    })
    alert("Card Submitted")
  }
  const handleChange = (e) => {
    //spreading existing state back into new state value
    // pushes each new card to the ned of the array
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }
  return (
    <>
      <section className="formSection">
        <div className="buildHeader wrapper">
          <h2>Card Builder</h2>
          <div className="navButtons">
            <Link to="/build">
              <button className="btn">Build</button>
            </Link>
            <Link to="/review">
              <button className="btn">Review</button>
            </Link>
          </div>
        </div>
        <div className="formContain">
          <form onSubmit={handleSubmit} action="submit">
            <label htmlFor="front">Front</label>
            <textarea
              name="front"
              id="front"
              onChange={handleChange}
              value={userInput.front}
              placeholder="Enter your question or statement here"
            ></textarea>

            <label htmlFor="back">Back</label>
            <textarea
              name="back"
              id="back"
              onChange={handleChange}
              value={userInput.back}
              placeholder="enter your answer here"
            ></textarea>

            <div className="formButtons">
              <button className="btn">Clear</button>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Build
