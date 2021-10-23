import React from 'react';
import Home from '../Home';
import Login from '../Login';
// import MainViewChat from '../components/chats/MainViewChat';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ViewMain from '../ViewChats/ViewMain';



const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/chat" component={ViewMain} />
        </Switch>
      </Router>
    </>
  )
}

export default App;