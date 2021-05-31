import './App.css'
import Header from './components/Header'
import {useState} from 'react'
import Counter from './components/Counter';

function App() {
  const [count,setCount]=useState(0);
  const data="Geo Thomas";
  // const addCount=()=>{
  //   setCount(count+1)
  //   console.log(count);
  // }
  //Spread Operator usecase
  //call as ...obj that is object name
  let obj={
    title:'First_Counter',
    count
  }
  return (
    <div>
      <Header data={data}/>
    <h1 className={'hello'}>Hello {data}</h1>
    <Counter {...obj}/>
    <Counter title="Second_Counter" count={count}/>


    <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  );
}

export default App;
