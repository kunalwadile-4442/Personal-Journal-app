import React from "react";
import './LoginSign.css';
import { Link } from 'react-router-dom';

export default function LoginSign() {
  return (
    <div className="form-container">
      <form className="Auth-form">
        <div className="Auth">
          <h3 className="form-title">REGISTER</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link to="/login">Log in</Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text" required
              className="form-control mt-1"
              placeholder="e.g kunal wadile"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email" required
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input required
              type="password"
              className="form-control mt-1"
              placeholder="*****"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
