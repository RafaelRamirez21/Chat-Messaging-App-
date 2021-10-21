import React from 'react'
import '../../assets/styles/home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='animationArea'>


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
          
          <div className="signUp button">Sign Up</div>
          
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
  )
}

export default Home
