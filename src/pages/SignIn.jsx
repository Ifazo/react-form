import React, { useContext, useState } from "react";
import react from '../assets/react.svg'
import google from '../assets/google.svg'
import facebook from '../assets/facebook-f.svg'
import twitter from '../assets/twitter.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {

    const [error, setError] = useState(null);

  const { signIn, googleSignIn, facebookSignIn, twitterSignIn } =
    useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  // const twitterProvider = new TwitterAuthProvider();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
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
    <>
      <div>
        <form onSubmit={handleLogIn} className="form">
            <img src={react} alt="react" height='100px' width='100px' />
          <div className="subtitle">Welcome To Our Website!</div>
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
            Log In
          </button>
          <div className="link">
            <Link to="/forget">Forget Password?</Link>
          </div>
          <div>
            <p>or login with</p>
            <button type="submit" onClick={handleGoogleSignIn}><img src={google} height='30px' width='30px' alt="google" /></button>
            <button type="submit" onClick={handleFacebookSignIn}><img src={facebook} height='30px' width='30px' alt="google" /></button>
            <button type="submit" onClick={handleTwitterSignIn}><img src={twitter} height='30px' width='30px' alt="google" /></button>
          </div>
          <div>
            <div className="others">
              <p>
                Don't have an account?{" "}
                <Link to="/signup">Create new now!</Link>
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
    </>
  );
};

export default SignIn;
