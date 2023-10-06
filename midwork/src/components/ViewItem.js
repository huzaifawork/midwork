import React from 'react'
import { Link } from 'react-router-dom'
function ViewItem() {
  return (
    <div> <div class="col-md-3">
    <label for="inputEmail4" class="form-label">Enter ID Of Item</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label">Enter Price Of Item</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div><div>

<Link to="/s">

<button type="submit" class="btn btn-primary mt-5">Sign in</button>
</Link>
</div>
 </div>
  )
}

export default ViewItem