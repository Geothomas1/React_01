import Profile from "./Container/Profile";
import About from "./Container/About";
import {useState} from 'react'
import {Route,useHistory} from 'react-router-dom'
import {appContext} from './AppContextAPI'
function App() {
    const history=useHistory()
    const [state, setstate] = useState(20)
    return (
        <div>
          <button onClick={()=>history.push('/profile')}>Profile</button>
          <button onClick={()=>history.push('/about')}>About</button>
               <appContext.Provider value={{data:state}}>  
                <Route path='/profile'>
                  <Profile ></Profile>
                </Route>
                <Route path='/about'>
                  <About></About>
                </Route>
                </appContext.Provider>
        </div>
    );
}

export default App;
