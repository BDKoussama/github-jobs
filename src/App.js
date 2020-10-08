import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/Header';
import Search from './Components/Search';
import Content from './Content' ; 
import './styles/App.scss';


library.add(faSuitcase);



function App() {
  return (
    <div className="App">
        <div className = "container">
              <Header/>
              <Search/>
              <Content/>
        </div>
    </div>
  );
}

export default App;
