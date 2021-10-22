import React from 'react';
import Home from '../components/Home/Home';
import Login from '../components/Home/Login';
import SignUp from '../components/Home/SignUp';
// import MainViewChat from '../components/chats/MainViewChat';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ViewMain from '../components/ViewChats/ViewMain';



const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/chat" component={ViewMain} />
        </Switch>
      </Router>
    </>
  )
}

export default App;