import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Header} from "./pages/header/Header";
import {HomePage} from "./pages/HomePage";
import {Footer} from "./pages/footer/Footer";
import {Redirect} from "react-router";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

function App() {
  return (
      <Router>
          <Header/>
          <Switch>
              <Route exact path='/'>
                  <HomePage />
              </Route>
              <Route path={'*'}>
                  <Redirect to='/' />
              </Route>
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App;
