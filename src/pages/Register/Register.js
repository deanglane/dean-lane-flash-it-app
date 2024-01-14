// Register.js
import React, { useState, useEffect } from "react";
import { getDatabase, set, ref } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebase from "../../util/firebase.js";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const database = getDatabase(firebase);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedIn) {
      navigate("/build");
    }
  });

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: userName,
        });

        set(ref(database, "profiles/" + user.uid), {
          email: email,
          userName: userName,
        });
        setUserLoggedIn(true);
      })
      .catch((error) => {
        const errorMessage = error.code;
        if (errorMessage === "auth/email-already-in-use") {
          toast.error(
            "This email is already in use, Please try a different Email address"
          );
        }
        if (errorMessage === "auth/weak-password") {
          toast.error(
            "The password is to weak, Please use another. *hint more than 6 characters"
          );
        } else {
          toast.error(`${errorMessage}`);
        }
      });

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section className="authentication">
        <div className="wrapper authContain">
          <h1>Signup</h1>
          <form onSubmit={handleRegister}>
            <label htmlFor="userName"></label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              id="userName"
              placeholder="User Name"
              required
            />

            <label htmlFor="email"></label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              id="email"
              placeholder="E-mail Address"
              required
            />

            <label htmlFor="password"></label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              placeholder="Password"
              required
            />
            <button className="btn">Signup</button>
          </form>
          <p>
            Already have an account?
            <Link to="/login" className="loginText">
              Login
            </Link>
          </p>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default Register;
