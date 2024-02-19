import React from 'react'
import { Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div className='header'>
       
    <Navbar.Brand href="/"className='ms-5 fs-4 p-2' >
    <i class="fa-solid fa-circle-play"style={{color: "#e82011;"}}></i>
<span style={{color:"red"}}> V</span><span className='text-black '>ideo</span> <span   style={{color:"red"}} >U</span><span className='text-black '>ploader</span>
  </Navbar.Brand>

  </div>     
  )
}

export default Header