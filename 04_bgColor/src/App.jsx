import { useState } from 'react'

import Button from './Button';



function App() {  
 const [color,setColor]= useState('olive')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>

    <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

      <Button  style={"red"} onClick={()=>{setColor("red")}}>Red</Button>
      <Button  style={"Blue"} onClick={()=>{setColor("Blue")}}>Blue</Button>
      <Button  style={"Green"} onClick={()=>{setColor("Green")}}>Green</Button>
      <Button style={"Magenta"} onClick={()=>{setColor("Magenta")}} >Magenta</Button>
      <Button style={"Lime"} onClick={()=>{setColor("Lime")}}>Lime</Button>
      <Button style={"Aqua"} onClick={()=>{setColor("Aqua")}}>Aqua</Button>
      <Button style={"Pink"} onClick={()=>{setColor("Pink")}}>Pink</Button>
      <Button style={"Olive"} onClick={()=>{setColor("Olive")}}>Olive</Button>
      <Button style={"Silver"} onClick={()=>{setColor("Silver")}}>Silver</Button>
      <Button style={"Navy"} onClick={()=>{setColor("Navy")}}>Navy</Button>

    </div>
    </div>
    </div>
  )
}

export default App;
