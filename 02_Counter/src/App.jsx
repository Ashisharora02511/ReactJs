import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  //let counter=5

  let addValue=()=>{
    console.log("value added",count)
  
    if(count<=20){
      count=count+1;
    setCount(count)
    }
  }
  let removeValue=()=>{

    if(count>0){
    setCount(count-1);
    }
  }
  return (
    <>
   <h1>Chai Aur Code </h1>
   <h2>Counter value :{count}</h2>
   <button onClick={addValue}>Add value{count}</button>
   <br>
   </br>
   <button onClick={removeValue}>Remove Value{count}</button>
    </>
  )
}

export default App
