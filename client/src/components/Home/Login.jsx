import React, { useState } from 'react'
import '../../assets/styles/login.scss'
import { UserOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const cookies = new Cookies();

const initialState = {
  username: '',
  password: '',
}

const Login = () => {

  const [formLogin, setFormLogin] = useState(initialState)

  const handleChange = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value })

    //console.log(formLogin);
  }

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formLogin;

    const URL = 'http://localhost:5000/auth'

    const { data: { token, userId } } = await axios.post(`${URL}/login`, { username, password });

    cookies.set('token', token);
    cookies.set('username', username);
    // cookies.set('name', name);
    cookies.set('userId', userId);

    history.push("/");

    window.location.reload();
  }


  return (
    <div className="login">
      <div className="containerTop">
        <div className="top"></div>
      </div>
      <div className="textContainer">
        <h1>INTOPCOL</h1>
        <p>Communication</p>
        <p>Log In</p>
      </div>
      <div className="profileContainer">
        <UserOutlined className='profile' />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="text"
          name='username'
          onChange={handleChange}
          required />
        <input
          type="password"
          placeholder="Password"
          name='password'
          onChange={handleChange}
          required />
        <div className="buttonsContainer">
          <button className='button'>Login</button>

          <Link className='link' to="/signup">
            <div className="signUp">Sign Up</div>
          </Link>
        </div>
      </form>

      <div className="containerBottom">
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Login
