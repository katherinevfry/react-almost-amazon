import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleAuthor } from '../helpers/data/AuthorData';

export default function SingleAuthor() {
  const [author, setAuthor] = useState({});
  const { firebaseKey } = useParams();
  useEffect(() => {
    getSingleAuthor(firebaseKey)
      .then(setAuthor);
  }, []);

  return (
    <div>
      <h3>{ author?.firstName } { author?.lastName }</h3>
    </div>
  );
}

SingleAuthor.propTypes = {
  user: PropTypes.any,
  id: PropTypes.string
};
