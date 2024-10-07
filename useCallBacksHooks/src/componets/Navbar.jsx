import React from 'react';
import {memo} from 'react';

const Navbar =({adjective,getAdjective})=>{
  console.log("Navbar is render");
  return (
    <div>I am {adjective}  NavBar
    <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    
    </div>
    
  )
}
export default memo(Navbar);