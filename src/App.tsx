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
import {RoutesPage} from "./pages/routes/RoutesPage";

function App() {
    let [smallSize, setSmallSize] = useState(window.innerWidth < 850);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        if(window.innerWidth < 850) {
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
              <RoutesPage smallSize={smallSize}/>
              <Route path={'*'}>
                  <Redirect to='/' />
              </Route>
          </Switch>
          <Footer smallSize={smallSize}/>
      </Router>
  );
}

export default App;
