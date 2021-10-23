import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../../assets/styles/signup.scss';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';

const cookies = new Cookies();

const initialState = {
  name: '',
  lastName: '',
  email: '',
  post: '',
  username: '',
  password: '',
  repeatPassword: '',
}

const SignUp = () => {

  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})

    // console.log(form);
  }

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, lastName, email, post, username, password } = form;

    const URL = 'http://localhost:5000/auth'

    const { data: { token, userId, hashedPassword} } = await axios.post(`${URL}/signup`, { name, lastName, email, post, username, password});

    cookies.set('token', token);
    cookies.set('username', username);
    cookies.set('name', name);
    cookies.set('userId', userId);
    cookies.set('lastName', lastName);
    cookies.set('email', email);
    cookies.set('post', post);
    cookies.set('hashedPassword', hashedPassword);

    history.push("/");

    window.location.reload();
  }

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
          <form className="form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name" 
              name='name' 
              onChange={handleChange} 
              required/>
            <input 
              type="text" 
              placeholder="Last Name"
              name='lastName' 
              onChange={handleChange} 
              required/>
            <input 
              type="email" 
              placeholder="Email"
              name='email' 
              onChange={handleChange} 
              required/>
            <input 
              type="text" 
              placeholder="Post"
              name='post' 
              onChange={handleChange} 
              required/>
            <input 
              type="text" 
              placeholder="Username"
              name='username' 
              onChange={handleChange} 
              required/>
            <input 
              type="password" 
              placeholder="Password"
              name='password' 
              onChange={handleChange} 
              required/>
            

            <div className="buttonsConatLap">
              <button className="loginLap buttonlap">Sign Up</button>
              <Link className='linkLap' to="/">
                <div className="signUpLap buttonlap">Login</div>
              </Link>
            </div>
          </form>
          
        </div>
      </div>

      {/* mobile */}
      <div className="signup">
        <div className="containerTop">
          <div className="top"></div>
        </div>
        <div className="textContainer">
          <h1>INTOPCOL</h1>
          <p>Communication</p>
          <p>Sign Up</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            name='name' 
            onChange={handleChange} 
            required/>
          <input 
            type="text" 
            placeholder="Last Name"
            name='lastName' 
            onChange={handleChange} 
            required/>
          <input 
            type="email" 
            placeholder="Email"
            name='email' 
            onChange={handleChange} 
            required/>
          <input 
            type="text" 
            placeholder="Post"
            name='post' 
            onChange={handleChange} 
            required/>
          <input 
            type="text" 
            placeholder="Username"
            name='username' 
            onChange={handleChange} 
            required/>
          <input 
            type="password" 
            placeholder="Password"
            name='password' 
            onChange={handleChange} 
            required/>
            
            <button className='button'>Sign Up</button>
  
        </form>

          
        <div className="containerBottom">
          <div className="bottom"></div>
        </div>
      </div>
    </>
  )
}

export default SignUp
