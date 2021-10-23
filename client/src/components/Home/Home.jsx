import React, { useState } from 'react'
import '../../assets/styles/home.scss';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

const initialState = {
  username: '',
  password: '',
}

const Home = () => {

  const [formLoginH, setFormLoginH] = useState(initialState)

  const handleChangeL = (e) => {
    setFormLoginH({...formLoginH, [e.target.name]: e.target.value})

    //console.log(formLoginH);
  }

  const handleSubmitL = async (e) => {
    e.preventDefault();

    const { username, password } = formLoginH;

    const URL = 'http://localhost:5000/auth'

    const { data: { token, userId} } = await axios.post(`${URL}/login`, { username, password });

    cookies.set('token', token);
    cookies.set('username', username);
    // cookies.set('fullname', fullname);
    cookies.set('userId', userId);
    // cookies.set('hashedPassword', hashedPassword);

    window.location.reload();
  }

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
          <form className="form" onSubmit={handleSubmitL}>
            <input 
            type="text" 
            placeholder="Username"
            name='username' 
            onChange={handleChangeL} 
            required/>
            <input 
            type="password" 
            placeholder="Password"
            name='password' 
            onChange={handleChangeL} 
            required/>
            <div className="buttonsConatLap">
              <button className="loginLap buttonlap">Login</button>
              <Link className='linkLap' to="/signup">
                <div className="signUpLap buttonlap">Sign Up?</div>
              </Link>
            </div>
          </form>
          
        </div>
      </div>

      {/* mobile */}
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
