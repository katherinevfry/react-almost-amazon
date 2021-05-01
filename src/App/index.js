import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import firebaseConfig from '../helpers/apiKeys';
import NavBar from '../components/NavBar';
import { getAuthors } from '../helpers/data/AuthorData';
import Routes from '../helpers/Routes';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@gmail.com')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <Router>
      <NavBar user ={user} />
      <Routes
      user={user}
      authors={authors}
      setAuthors={setAuthors} />
    </Router>
    </>
  );
}

export default App;
