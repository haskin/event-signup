import React from 'react';
import EventSignUp from './components/EventSignUp';
import Success from './components/Success';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Registrees from './components/Registrees';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
            <Switch>
              <Route path="/registered">
                <Registrees />
              </Route>
              <Route path="/success">
                <Success />
              </Route>
              <Route path="/">
                <EventSignUp />
              </Route>
            </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
