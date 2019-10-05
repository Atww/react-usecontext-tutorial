import "./index.scss";
import * as React from 'react';
import Library from './library.component';
import Welcome from './welcome.component';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./header.component";


export function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/library" render={Library} />
          <Redirect from="*" to="/welcome" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
