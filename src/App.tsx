import "./index.scss";
import * as React from 'react';
import Header from "./header.component";
import Library from './library.component';
import Welcome from './welcome.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export function App() {

  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
