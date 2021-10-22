import React from 'react'
import '../../assets/styles/signup.scss';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';

const SignUp = () => {
  return (
    <>
      <div className="sigpUpLap">
        <div className="left">
          <div className="banner">
            <div className="banner-text">
              <h1>Your Space To Be Social</h1>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="textContLap">
            <h1>INTOPCOL</h1>
            <p>Communication</p>
          </div>
          <div className="profileContainer">
            <UserOutlined className='profile' />
          </div>
          <form className="form">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="text" placeholder="Post"></input>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Repeat Password"></input>
          </form>
          <div className="buttonsConatLap">
            <Link className='linkLap' to="#">
              <div className="loginLap buttonlap">Sign Up</div>
            </Link>
            <Link className='linkLap' to="/">
              <div className="signUpLap buttonlap">Login</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="signup">
        <div className="containerTop">
          <div className="top"></div>
        </div>
        <div className="textContainer">
          <h1>INTOPCOL</h1>
          <p>Communication</p>
          <p>Sign Up</p>
        </div>
        <form className="form">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="text" placeholder="Post"></input>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Repeat Password"></input>
        </form>
        <Link className='linkLap' to="/login">
          <div className='button'>Sign Up</div>
        </Link>
        <div className="containerBottom">
          <div className="bottom"></div>
        </div>
      </div>
    </>
  )
}

export default SignUp
