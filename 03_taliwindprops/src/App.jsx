import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './componets/Cards'

function App() {
  const [count, setCount] = useState(0)
 let myObj={
  name:"Ashish",
  age:29,
  email:"ashisharora@gmail.com"

 }
 let newArr=[1,2,3,4,4]
  return (
    <>
    <h1 className="text-2xl font-bold underline">
      Hello world!
    </h1>
    <Cards channel="Ashish Arora" someObj={myObj} myArray={newArr}></Cards>
    </>
  )
}

export default App
