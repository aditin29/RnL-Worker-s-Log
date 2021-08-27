import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import CreateWorker from './Workers/CreateWorker';
import Workers from './Workers/Workers';
import MonthlyReport from './Workers/MonthlyReport';
import Sites from './Sites/Sites';
import Login from './Components/Login';

import PrivateRoute from './PrivateRoute';

import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadAdmin } from './actions/auth';
import { LOGOUT } from './actions/types';



function App() {

  useEffect(() => {
    
    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(loadAdmin());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, [])


  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute path='/monthly-report' exact component={MonthlyReport} />
          <PrivateRoute path='/add-site' exact component={Sites} />
          <PrivateRoute path='/workers' exact component={Workers} />
          <PrivateRoute path='/create-worker' exact component={CreateWorker} />
          <Route path='/login' exact component={Login} />

          <PrivateRoute exact path='/' component={Home} />

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
