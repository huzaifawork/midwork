import React from 'react'
import "../css/Sidebar.css";
import {Link} from 'react-router-dom'
function SidebarMenu() {
  return (
    
<div id='admin1' class="d-flex justify-content-center align-items-start" >
  <button id='admin' class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Your Workplace</button>

  <div class="offcanvas offcanvas-top" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasScrollingLabel">YOUR WORKPLACE OPTIONS</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">

      <div  class="row">
        <Link to="/at">
            
        <div   class="col-md-3">
          <button>ADD ITEM</button>
        </div>
        </Link>
      <Link to="/dt">

      <div class="col-md-3">
          <button>DELETE ITEM</button>
        </div>
      </Link>
      <Link to="/vt">

        <div class="col-md-3">
          <button>VIEW ITEM</button>
        </div>
      </Link>
      <Link to="/ut">

        <div class="col-md-3">
          <button>UPDATE ITEM</button>
        </div>
      </Link>
      </div>
</div>
  </div>
</div>

  
    
    
  )
}

export default SidebarMenu