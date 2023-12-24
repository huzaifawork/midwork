import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contactus() {
  return (
    <div>
      <div class="section-p1" style={{ padding: "60px", display: "flex", flexWrap: "wrap", fontSize: "1.3rem" }}>
        {/* Form for user input */}
        <div class="col" style={{ marginTop: "20px", padding: "50px", textAlign: "left", flex: "1" }}>
          <h4 style={{ padding: "10px", color: "black" }}>Contact Information</h4>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label" style={{ color: "black" }}>Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputContactInfo" class="form-label" style={{ color: "black" }}>Contact Information</label>
              <input type="text" class="form-control" id="exampleInputContactInfo" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <div class="col" style={{ marginTop: "20px", justifyContent: "space-between", padding: "50px", textAlign: "left", flex: "1" }}>
          <h1 style={{ padding: "10px", fontWeight: "bold", color: "black" }}>Contact Us</h1>
          <p style={{ padding: "10px", color: "black" }}>
            <FaMapMarkerAlt /> <strong>Address:</strong> Main cities, Pakistan
          </p>
          <p style={{ padding: "10px", color: "black" }}>
            <FaPhoneAlt /> <strong>Phone:</strong> 03232603250
          </p>
          <p style={{ padding: "10px", color: "black" }}>
            <strong>Email:</strong> <FaEnvelope /> mhuzaifatariq7@gmail.com
          </p>
          <div class="follow" >
            <h4 style={{ padding: "10px", color: "black" }}>Follow us</h4>
            <div class="icons" >
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <BsFacebook className="display-4" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <AiFillTwitterSquare className="display-4" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <AiOutlineInstagram className="display-4" />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <BiLogoPinterest className="display-4" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <BiLogoYoutube className="display-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;