import React, { useContext, useState } from "react";
import react from "../assets/react.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const ForgetPass = () => {

    const [error, setError] = useState(null);

  const { forgetPassword } = useContext(AuthContext);

  const handleForget = (e) => {
    e.preventDefault();
    const email = e.target.forget.value;
    forgetPassword(email)
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });
  };

  return (
    <>
    <form onSubmit={handleForget} className="form">
    <img src={react} alt="react" height="100px" width="100px" />
          <div className="subtitle">Enter Your E-mail Address!</div>
          <div>
            <button><Link to="/signin">Login</Link></button>
            <button><Link to="/signup">Signup</Link></button>
          </div>
          <div className="input-container ic2">
            <input
              id="email"
              className="input"
              name="email"
              type="text"
              placeholder=" "
              required
            />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">
              Email
            </label>
          </div>
          <div className="error">{error && <p>{error}</p>}</div>
          <button type="text" className="submit">
            Send E-mail
          </button>
          <div>
            <div className="others">
              <p>
                Go Back To {" "}
                <Link to="/signin">Log In</Link>
              </p>
            </div>
          </div>
        </form>
    </>
  );
};

export default ForgetPass;
