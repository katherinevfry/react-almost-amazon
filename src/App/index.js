import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import AuthorForm from '../AuthorForm';
import { getAuthors } from '../helpers/data/AuthorData';
import AuthorCard from '../components/AuthorCard';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  return (
    <div className='App'>
      <AuthorForm
       id="author-form"
       setAuthors={setAuthors}/>
       <div id="card-container">
       {authors.map((authorInfo) => (
        <AuthorCard
          key={authorInfo.firebaseKey}
          firebaseKey={authorInfo.firebaseKey}
          firstName={authorInfo.firstName}
          lastName={authorInfo.lastName}
          email={authorInfo.email}
          setAuthors={setAuthors}
          />
       ))}
       </div>
    </div>
  );
}

export default App;
