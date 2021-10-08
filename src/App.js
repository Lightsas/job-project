import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';
import LaunchesList from './component/home/launchesList/LaunchesList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
            {/* <Route>
                <Home></Home>
            </Route> */}
            <Route>
              <LaunchesList></LaunchesList>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
