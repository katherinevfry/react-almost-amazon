import React, { useState } from 'react';
import { addAuthor } from './helpers/data/AuthorData';

export default function AuthorForm() {
  const [author, setAuthor] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author);
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

        <label>Last Name: </label>
        <input
        name="lastName"
        type="text"
        placeholder="last name"
        value={author.lastName}
        onChange={handleInputChange}
        ></input>

        <label>Email: </label>
        <input
        name="email"
        type="text"
        placeholder="email"
        value={author.email}
        onChange={handleInputChange}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  );
}
