import React from "react";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
// import Insta from '@mui/icons-material/Instagram';
import { Container } from "react-bootstrap";
import "../Header-Footer/Footer.css";
import logo from '../component/images/logo-j.jpeg'

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <Container>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase social">JOURNAL APP</h5>
            <p>
              Our tool provides users with a private digital location to record
              their thoughts and experiences. It is full of customizable entries
              and safe storage for reflection and privacy, maintained with a login
              ID.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase social">ABOUT</h5>
            <ul className="list-unstyled links">
              <li>
                <a href="#!">OUR MISSION</a>
              </li>
              <li>
                <a href="#!">WHAT WE OFFER</a>
              </li>
              <li>
                <a href="#!">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="mailto:kunalwadile@gmail.com">EMAIL</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase social">SOCIAL LINKS</h5>
            <div className="social-icons icon">
              <a href="https://www.instagram.com/_kunal.wadile_?igsh=d2dxanRmdWI2am8z"><Instagram style={{ marginRight: '15px',color:"black" }} /></a>
              <a href="https://github.com/Monu4442"><GitHub style={{ marginRight: '15px',color:"black" }} /></a>
              <a href="https://www.linkedin.com/in/kunal-wadile-773706258/"><LinkedIn style={{ marginRight: '15px', color:"black" }} /></a><br />
              <a href="/"><img src={logo} style={{ height: "30px", width: "33px" }} className="LG" alt="" /></a>
              {/* <Link to="/note" className="my-3 btn btn-primary">WRITE NOTE</Link> */}
            
            </div>
          </div>
        </div>
      </div>
    </Container>
    <hr />

    <div className="footer-copyright text-center py-3">
      © 2024 Copyright : Kunal Wadile
    </div>
  </footer>
);

export default Footer;
