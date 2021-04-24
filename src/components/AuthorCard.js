import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
} from 'reactstrap';
import PropTypes from 'prop-types';

const AuthorCard = ({
  firstName,
  lastName,
  email
}) => (
  <Card body>
    <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
    <CardText>{email}</CardText>
  </Card>
);

AuthorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default AuthorCard;
