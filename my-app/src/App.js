import './App.css'
import Header from './components/Header'
import {useState} from 'react'
import Counter from './components/Counter';
import Employee from './components/Employee';

function App() {
  const [count,setCount]=useState(0);
  const data="Geo Thomas";
  // const addCount=()=>{
  //   setCount(count+1)
  //   console.log(count);
  // }
  //Spread Operator usecase
  //call as ...obj that is object name
  let value={
    title:'First_Counter',
    count
  }
  let emp=[{name:'Geo',age:23},{name:'Appu',age:23}]
  //Example of external data from web service use of map func
  //<Employee key={index} name={obj.name} age={obj.age}/>  
  //other way use with spread operator
  //we can avoid return in map and also use () for mult exp

  return (
    <div>
      <Header data={data}/>
    <h1 className={'hello'}>Hello {data}</h1>
    <Counter {...value}/>
    <Counter title="Second_Counter" count={count}/>
    <button onClick={()=>setCount(count+1)}>Add</button>
    {
      emp.map((obj,index)=>
          <Employee key={index} {...obj}/>
      
      )
    }
    </div>
  );
}

export default App;
