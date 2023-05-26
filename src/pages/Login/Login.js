import React, { useEffect, useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

import { update, 
  ref, 
  getDatabase } from 'firebase/database';
import firebase from '../../util/firebase.js';

import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const auth = getAuth();
  const database = getDatabase(firebase);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedIn) {
      navigate('/build');
    }
  }, [userLoggedIn, navigate]);

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential);
        const user = userCredential.user;
        const date = new Date();
        update(ref(database, 'profiles/' + user.uid), {
          last_login: date
        })

        console.log('User signed in');
        setUserLoggedIn(true);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(error);
      });
    setEmail('');
    setPassword("");
  };
  return (
    <>
      <section className="authentication">
        <div className="wrapper authContain">
          <h1>Login</h1>
          <form onSubmit={signIn}>
            <label htmlFor="email"></label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" placeholder="E-mail Address" required />
            <label htmlFor="password"></label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" placeholder="Password" />
            <button className="btn">Log in</button>
          </form>
          <p>Don't have an account?<Link to="/register" className="loginText">Signup</Link></p>
        </div>
      </section>
    </>
  )
}

export default Login;