import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from './helpers/data/AuthorData';

const AuthorForm = ({
  setAuthors,
  firebaseKey,
  firstName,
  lastName,
  email,
}) => {
  const [author, setAuthor] = useState({
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author).then((authorsArray) => setAuthors(authorsArray));
    } else {
      addAuthor(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
    <>
    <div className='author-form'>
      <form id='addAuthorForm'
      autoComplete='off'
      onSubmit={handleSubmit}
      >
        <h2>Add New Author</h2>
        <label>First Name: </label>
        <input
        name="firstName"
        type="text"
        placeholder="first name"
        value={author.firstName}
        onChange={handleInputChange}
        ></input>
        <br/>
        <label>Last Name: </label>
        <input
        name="lastName"
        type="text"
        placeholder="last name"
        value={author.lastName}
        onChange={handleInputChange}
        ></input>
        <br/>
        <label>Email: </label>
        <input
        name="email"
        type="text"
        placeholder="email"
        value={author.email}
        onChange={handleInputChange}
        ></input>
        <br/>
        <Button color="success" type='submit'>Submit</Button>
      </form>
    </div>
    </>
  );
};

AuthorForm.propTypes = {
  setAuthors: PropTypes.func,
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

export default AuthorForm;
