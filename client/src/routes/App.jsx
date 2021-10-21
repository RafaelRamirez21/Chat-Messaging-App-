import React from 'react';
import Home from '../components/Home/Home';
import Login from '../components/Home/Login';
import SignUp from '../components/Home/SignUp';
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
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  )
}

export default App;