import React from 'react';
import Home from '../components/Home/Home';
import Login from '../components/Home/Login';
import SignUp from '../components/Home/SignUp';
import Cookies from 'universal-cookie';
import { StreamChat } from 'stream-chat'
// import MainViewChat from '../components/chats/MainViewChat';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ViewMain from '../ViewChats/ViewMain';


const cookies = new Cookies();

const apiKey = 'qhk2getw4t93';

const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey)

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    role: cookies.get('post'),
    name: cookies.get('username'),
    fullname: cookies.get('name'),
    lastName: cookies.get('lastName'),
    email: cookies.get('email'),
    hashedPassword: cookies.get('hashedPassword'),
    hashedRepeatPassword: cookies.get('hashedRepeatPassword'),


  }, authToken)

  console.log(authToken)
}


const App = () => {

  if (!authToken) {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </>
    )
  }
  else {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={ViewMain} />
          </Switch>
        </Router>
      </>
    )
  }


}

export default App;