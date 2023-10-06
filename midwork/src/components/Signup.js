import { Link } from "react-router-dom";
 
function Signup(){
    return (
        <form class="ms-5  mt-3 " style={{marginTop: '10px' , }}>
  <div class="col-md-3">
    <label for="inputEmail4" class="form-label">Email or Phone</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div style={{marginLeft:"-15px"}} class="container ">
  <div class="row">
    <div class="col-md-4">
      <label for="inputAddress" class="form-label">Address</label>
      <input type="text" class="form-control" id="inputAddress" />
    </div>

    <div class="col-md-4">
      <label for="inputCity" class="form-label">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>

    <div class="col-md-4">
      <label for="inputexperience" class="form-label">Experience</label>
      <select id="inputExperience" class="form-select">
        <option selected>Choose Level</option>
        <option>Rookie</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
    </div>
  </div>
</div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Remember Me
      </label>
    </div>
  </div>
  <div class="col-12">
 
    <Link to="/sidebar-menu">

    <button type="submit" class="btn btn-primary">Sign in</button>
    </Link>
 
  </div>
</form>
    )
}

export default Signup;