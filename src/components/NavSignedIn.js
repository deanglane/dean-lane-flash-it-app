import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const NavSignedIn = () => {
  const [authUser, setAuthUser] = useState('')
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        setAuthUser(user);
        // ...
      } else {
        // User is signed out
        setAuthUser(null)
        navigate('/');
        // ...
      }
      return () => {
        listen();
      }
    });
  }, [auth, navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log('sign out successful!');
      
    }).catch(error => console.log(error))
  };

  return (
    <div>
        <>
          <p>{authUser.email}</p>
          <button className='btn' onClick={handleSignOut}>Log Out</button>
        </> 
    </div>
  )
}

export default NavSignedIn;
// AuthDetails