import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import AddAuthors from '../views/AddAuthors';
import Authors from '../views/Authors';
import SingleAuthor from '../views/SingleAuthor';

function Routes({ authors, setAuthors, user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user}/>} />
        <Route path='/add-authors' component={() => (<AddAuthors setAuthors={setAuthors}/>)} />
        <Route exact path='/authors' component={() => (<Authors authors={authors} setAuthors={setAuthors} />)} />
        <Route exact path='/author/:firebaseKey' component={SingleAuthor} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array,
  setAuthors: PropTypes.func,
  user: PropTypes.any
};

export default Routes;
