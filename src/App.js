import React, { useState } from "react";
// all components
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
// context
import MyContext from "./MyContext";

// fire all auth
import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const App = () => {
  // all states
  const [screen, setscreen] = useState(0);
  const [user, setuser] = useState(null);

  // loading
  const [loading, setloading] = useState(false);

  const Display = () => {
    if (screen == 0) {
      return <Login />;
    } else if (screen == 1) {
      return <Register />;
    } else if (screen == 2) {
      return <Home />;
    }
  };

  const Loginfunc = (email, password) => {
    setloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setuser(response.user.displayName);
        setloading(false);
        setscreen(2);
      })
      .catch((err) => {
        setloading(false);
        alert(err.message);
      });
  };

  const Logout = () => {
    setuser(null);
    setscreen(0);
    alert("Logout successfull");
  };

  const Registers = (name, email, password) => {
    setloading(true);
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      updateProfile(response.user, { displayName: name })
        .then((user) => {
          alert("Account Created successFully");
          setloading(false);
        })
        .catch((err) => {
          alert(err.message);
          setloading(false);
        })
        .catch((err) => {
          alert(err.message);
          setloading(false);
        });
    });
  };

  return (
    <>
      <MyContext.Provider
        value={{ user, setscreen, Loginfunc, Registers, loading, Logout }}
      >
        {Display()}
      </MyContext.Provider>
    </>
  );
};

export default App;



