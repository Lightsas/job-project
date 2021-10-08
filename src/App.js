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
import LaunchesDetails from './component/home/launchesDetails/LaunchesDetails';

function App() {
  return (
      <Router>
          <Switch>
            {/* <Route>
                <Home></Home>
            </Route> */}
            <Route exact path="/">
              <LaunchesList></LaunchesList>
            </Route>
            <Route path={"/launches/:launchesId"}>
              <LaunchesDetails></LaunchesDetails>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
