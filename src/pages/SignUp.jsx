import React, { useContext, useState } from "react";
import react from "../assets/react.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook-f.svg";
import twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState(null);

  const { createUser, googleSignIn, facebookSignIn, twitterSignIn } =
    useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  // const twitterProvider = new TwitterAuthProvider();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn(facebookProvider)
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });
  };

  const handleTwitterSignIn = () => {
    twitterSignIn(twitterProvider)
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className="form">
        <img src={react} alt="react" height="100px" width="100px" />
        <div className="subtitle">Welcome To Our Website!</div>
        <div>
          <button>
            <Link to="/signin">Login</Link>
          </button>
          <button>
            <Link to="/signup">Signup</Link>
          </button>
        </div>
        <div className="input-container ic1">
          <input
            id="fullname"
            className="input"
            name="name"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut"></div>
          <label htmlFor="fullname" className="placeholder">
            Full name
          </label>
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
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            name="password"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut"></div>
          <label type="password" htmlFor="password" className="placeholder">
            Password
          </label>
        </div>
        <div className="error">{error && <p>{error}</p>}</div>
        <button type="text" className="submit">
          Sign Up
        </button>
        <div>
          <p>Or sign up with</p>
          <button type="submit" onClick={handleGoogleSignIn}>
            <img src={google} height="30px" width="30px" alt="google" />
          </button>
          <button type="submit" onClick={handleFacebookSignIn}>
            <img src={facebook} height="30px" width="30px" alt="google" />
          </button>
          <button type="submit" onClick={handleTwitterSignIn}>
            <img src={twitter} height="30px" width="30px" alt="google" />
          </button>
        </div>
        <div>
          <div className="others">
            <p>
              Already have an account? <Link to="/signin">Please sign-in!</Link>
            </p>
          </div>
          <div className="others">
            <p>
              By signing up, you agree with our{" "}
              <Link to="/terms">Terms & Conditions</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
