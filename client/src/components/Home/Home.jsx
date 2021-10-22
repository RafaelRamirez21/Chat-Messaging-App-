import React from 'react'
import '../../assets/styles/home.scss';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';

const Home = () => {

  return (
    <>
      <div className='laptop'>
        <div className='left'>
          <div className="banner">
            <div className="banner-text">
              <h1>Your Space To Be Social</h1>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className="textContLap">
            <h1>INTOPCOL</h1>
            <p>Communication</p>
          </div>
          <div className="profileContainer">
            <UserOutlined className='profile' />
          </div>
          <form className="form">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
          </form>
          <div className="buttonsConatLap">
            <Link className='linkLap' to="#">
              <div className="loginLap buttonlap">Login</div>
            </Link>
            <Link className='linkLap' to="/signup">
              <div className="signUpLap buttonlap">Sign Up?</div>
            </Link>
          </div>
        </div>
      </div>
      <div className='animationArea' >
        <div className='staticContainer'>
          <div className="textContainer">
            <h1>INTOPCOL</h1>
            <p>Communication</p>
          </div>
          <div className='logo'></div>
          <div className="buttonsConatiner">
            <Link className='link' to="/login">
              <div className="login button">Login</div>
            </Link>
            <Link className='link' to="/signup">
              <div className="signUp button">Sign Up</div>
            </Link>
          </div>
        </div>
      

        <ul className='boxArea'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  )
}

export default Home
