import React from "react";
import react from "../assets/react.svg";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="form">
      <img src={react} alt="react" height="100px" width="100px" />
      <h3>Our Terms & Conditions...</h3>
      <div className="terms">
        <h5>This Site is created with React, React-router, Firebase etc. </h5>
        <h5>This is created by Ziaul Karim Ifaz.</h5>
      </div>
      <div>
        <button>
          <Link to="/signin">Login</Link>
        </button>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
};

export default Terms;
