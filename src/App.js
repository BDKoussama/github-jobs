import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSuitcase ,  faGlobeAfrica , faClock} from '@fortawesome/free-solid-svg-icons'
import Header from './Components/Header';
import Search from './Components/Search';
import Content from './Content' ; 
import Footer from './Components/Footer';
import './styles/App.scss';


library.add(faSuitcase , faGlobeAfrica, faClock );



function App() {
  return (
    <div className="App">
        <div className = "container">
              <Header/>
              <Search/>
              <Content/>
              <Footer/>
        </div>
    </div>
  );
}

export default App;
