import logo from './logo.svg';
import './App.css';
import Header from'./Header.jsx';
import { useState } from 'react';
import header from './Header.jsx';

 
function App() {

  let [count,setcount]=useState(1)
 let displaydata=()=>{
   setcount(count+1)
 }
 let [show ,noshow]=useState(false)
 let [menustatus ,setmenustatus]=useState(false)
  return (
    <div className="App">
     <Header/> 
     
     {count}
     <br></br>
     <input type={show ? 'test ':'password' }/>
    <button onClick={()=>noshow(!show)}>
    {show ? 'text ':'password' }</button>
        <h1  > sachin</h1>
      
        <button onClick={displaydata  }>click me</button>

        
        <div className={`menu ${menustatus ?'activemenu': ''}`}>
          
      <ul  >
          <li>home </li>
          <li>about </li>
           <li>contact</li> 
          <li>summary</li>
          <li> feedback</li>
      </ul>
      </div>
      <div className='icon'>     
        < button className='micon' onClick={()=>setmenustatus(!menustatus)}>&#9776;</button>
      </div>

    </div>
  );  
}

export default App;

