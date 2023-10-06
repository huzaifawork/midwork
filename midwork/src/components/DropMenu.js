import React from 'react'
import "../css/Drop.css";
function DropMenu() {
  return (
    <div id='dropmenu' >
        <nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid">
    <a id='nav1' class="navbar-brand" href="#">KITS</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">SHOPBYPLAYER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">TRAINING</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FASHION
          </a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link  active" aria-disabled="true">ACCESSORIES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  active  " aria-disabled="true">SALE</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default DropMenu