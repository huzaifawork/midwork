import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <div>
     <nav class="navbar navbar-light border">
  <div class="container" style={{marginLeft:"230px"}}>
  <Link to="/homepage">

    <a class="navbar-brand" href="#">
      <img src="rm.jpg" alt="" width="150" height="60"/>
      
    </a>
   
  </Link>
</div>
<div style={{textAlign: "center", marginLeft:"400px", marginTop:"-70px", }}>
  <form class="d-flex ">
        <input  class="form-control    " style={{width:"600px", borderRadius:"0", border:"1px solid black"}} type="search" placeholder="Search" aria-label="Search"/>
        <i class="fa-solid fa-magnifying-glass "style={{marginLeft:"-25px", marginTop:"10px"}}></i>
        
      </form>
      
    </div>
    <Link to="/adminpage">
      
    <div class="d-flex justify-content-end">
  <i class="fa-regular fa-user" style={{marginLeft:"120px",marginTop:"-45px ", fontSize:"20px" }}></i>
</div>
    </Link>
<div class="d-flex justify-content-end ">
<i class="fa-solid fa-bag-shopping" style={{marginRight:"20px", fontSize:"20px", marginTop:"-45px "}}></i>
</div>
  
</nav>
  </div>


  )
}

export default Navbar