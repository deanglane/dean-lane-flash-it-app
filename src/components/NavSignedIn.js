import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const NavSignedIn = () => {
  const [authUser, setAuthUser] = useState('')
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      // If the user has signed in
      if (user) {

        setAuthUser(user);

      } else {
        // if User is signed out set AuthUser State to null
        setAuthUser(null)
        // navigate to the default home page
        navigate('/');
        
      }
      return () => {
        listen();
      }
    });
  // dependency arrays watching for changes, then run the useEffect
  }, [auth, navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      
    }).catch(error => alert(error))
  };

  return (
    <div>
        <>
        <p>Welcome {authUser.displayName}!</p>
          <button className='btn' onClick={handleSignOut}>Log Out</button>
        </> 
    </div>
  )
}

export default NavSignedIn;
// AuthDetails