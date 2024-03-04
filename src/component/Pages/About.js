import React from "react";
import img from "../images/Aboutbg.png";
import "../Style/About.css";
import logo from '../images/logo-j.jpeg';


function About() {
  return (
    <div className="bg">
      <div className="bg-img">
        <img
          className="background-image"
          style={{ height: "500px" }}
          src={img}
          alt="About Background"/>
        <div className="overlay-text text">About</div>
        <div className="overlay-texts text">us</div>
      </div>
      <br className="bg" />


      <section className="about-text bg container">
        <h3 className="UC" style={{ fontSize: "40px" }}>
          About this Journal
        </h3>
        <p className="p=1">
          Welcome to our personal journal app! We're thrilled to have you here.
        </p>

        <h4 className="UC" style={{ fontSize: "30px" }}>
          Our Mission
        </h4>
        <p>
          At Personal Journaling, our mission is to provide a safe, secure, and private
          space for you to express yourself, reflect on your thoughts and
          emotions, and document your life journey. We understand the importance
          of having a personal space where you can freely express your thoughts,
          feelings, and experiences without any judgment.
        </p>

        <h4 className="UC" style={{ fontSize: "30px" }}>
          What we offer
        </h4>
        <p>
          {""}
          <strong>Secure and Private: </strong>Your privacy and security are our
          top priorities. Our app is designed with advanced encryption and
          security measures to ensure that your journal entries remain private
          and confidential. You can trust us to keep your personal information
          safe.
        </p>
        <p>
          {" "}
          <strong>User-friendly Interface:</strong> We've created an intuitive
          and user-friendly interface that makes it easy for you to write, edit,
          and organize your journal entries. Whether you're writing a quick note
          or a detailed reflection, our app makes the process seamless and
          enjoyable.
        </p>
        <h4 className="UC" style={{ fontSize: "25px" }}>
          Get in Touch
        </h4>
        <p>
          We'd love to hear from you! If you have any questions, feedback, or
          suggestions, please don't hesitate to reach out to us. You can contact
          us via email at <a href="mailto:kunalwadile12@gmail.com">kunalwadile12@gmail.com</a> or connect with us on social
          media <a href="https://www.instagram.com/_kunal.wadile_?igsh=d2dxanRmdWI2am8z">Inatagram</a>.<br />
          Thank you for choosing [<img className="PJ" src={logo} alt="PJ" />] Personal Journaling  as your personal journaling
          companion. We hope our app helps you on your journey of self-discovery
          and personal growth.
          <br />
          <p className="end">Happy journaling!</p>
        </p>
      </section>
      <br className="bg" />
    </div>
  );
}

export default About;
