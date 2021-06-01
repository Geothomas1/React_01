import React,{useState,useEffect} from 'react'
//update state
function Counter2() {
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    useEffect(()=>{
        console.log("Mounting..");
        console.log('Updating...Count 1 '+count1);
        console.log('Updating... Count 2 '+count2);
        return()=>{
            console.log('Count clean from '+count1);
        }
    },[count1,count2])
    
    return (
        <div>
            <h1>Simple userEffect : {count1}</h1>
            <button onClick={()=>setCount1(count1+1)}>Increment 1</button>
            <h1>Simple userEffect :{count2}</h1>
            <button onClick={()=>setCount2(count2+1)}>Increment 2</button>
        </div>
    )
}

export default Counter2
