import './App.css'
import Header from './components/Header'
function App() {
  const data="Geo Thomas";
  return (
    <div>
      <Header data={data}/>
    <h1 className={'hello'}>Hello {data}</h1>
    </div>
  );
}

export default App;
