import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {orginals,actions} from './urls'
function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <RowPost url={orginals} title='Netflix Orginals'/>
    <RowPost url={actions} title='Action' isSmall/>
    </div>
  );
}

export default App;
