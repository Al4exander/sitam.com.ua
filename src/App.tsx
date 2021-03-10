import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Header} from "./pages/header/Header";
import {HomePage} from "./pages/HomePage/HomePage";
import {Footer} from "./pages/footer/Footer";
import {Redirect} from "react-router";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

function App() {
    let [smallSize, setSmallSize] = useState(window.innerWidth < 800);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        if(window.innerWidth < 800) {
            !smallSize && setSmallSize(true);
        } else {
            smallSize && setSmallSize(false);
        }
    };

    return (
      <Router>
          <Header smallSize={smallSize}/>
          <Switch>
              <Route exact path='/'>
                  <HomePage smallSize={smallSize}/>
              </Route>
              <Route path={'*'}>
                  <Redirect to='/' />
              </Route>
          </Switch>
          <Footer smallSize={smallSize}/>
      </Router>
  );
}

export default App;
