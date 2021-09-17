import React from 'react';
import Home from './containers/home'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import contactList from './components/contactList'
import FriendCircle from './components/friendCircle'
import {GlobalProvider} from './GlobalState'


const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
      <BrowserRouter>
        <Home />
        <Switch>
          <Route path="/" exact component={contactList} />
          <Route path="/contactList" exact component={contactList} />
          <Route path="/friendCircle" exact component={FriendCircle} />
        </Switch>
      </BrowserRouter>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
