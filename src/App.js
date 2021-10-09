import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/home/Home';


function App() {
  return (
      <Router>
          <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
