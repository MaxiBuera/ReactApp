import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import UsersComponent from './Components/UsersComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={UsersComponent} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
