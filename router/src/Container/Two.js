import React,{useContext} from 'react'
import {appContext} from '../AppContextAPI'
function Two() {
    const {data}=useContext(appContext)
    return (
        <div style={{backgroundColor:'yellow',width:'200px'}}>
            <h1>Layer 2 {data}</h1>
        </div>
    )
}

export default Two
