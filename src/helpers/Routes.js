import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import AddAuthors from '../views/AddAuthors';
import Authors from '../views/Authors';
import SingleAuthor from '../views/SingleAuthor';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

function Routes({ authors, setAuthors, user }) {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={() => <Home user={user}/>}
        />
        <PrivateRoute
        path='/add-authors'
        user={user}
        component={() => (<AddAuthors setAuthors={setAuthors}/>)} />
        <PrivateRoute
        exact
        path='/authors'
        user={user}
        component={() => (<Authors authors={authors} setAuthors={setAuthors} />)}
        />
        <PrivateRoute
        exact
        path='/author/:firebaseKey'
        user={user}
        component={SingleAuthor} />
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
