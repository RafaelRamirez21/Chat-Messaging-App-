import React from 'react';
import Home from '../components/Home';
import Login from '../components/Login';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


const App = () => {

  return( 
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App;