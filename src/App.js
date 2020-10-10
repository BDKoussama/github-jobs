import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSuitcase ,  faGlobeAfrica , faClock} from '@fortawesome/free-solid-svg-icons'
import './styles/App.scss';
import Home from './pages/Home' ;
import Detail from './pages/Detail' ;
import Header from './Components/Header';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

library.add(faSuitcase , faGlobeAfrica, faClock );



function App() {
  return (
    <Router>
       <div className = 'container'>
        <Header/>
        <Switch>
              <Route exact path = "/" >
                  <Home />
              </Route>
              <Route path = "/detail" >
                  <Detail />
              </Route>
          </Switch>
          <Footer/>
       </div>
    </Router>
   
  );
}

export default App;


/*
   
<div>
        <nav>
          <ul>
            <li>
              <Link  to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>
</div>
*/
