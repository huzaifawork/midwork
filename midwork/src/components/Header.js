import React from 'react'
import { Link, useHref } from 'react-router-dom'

function Header() {
  return (
    <>
    <Link to="https://www.realmadrid.com/en" style={{textDecoration:"none"}}>
      
        <p style={{color:"white", backgroundColor:"#14142b",textAlign:"center",margin:"0",padding:"0",height:"40px", paddingTop:"10px", textDecoration:"none" } }>Register for free here and get discount on your favourite items</p>
    </Link>
    </>
  )
}

export default Header