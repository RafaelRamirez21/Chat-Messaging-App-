import React from 'react'
import '../../assets/styles/login.scss'
import { UserOutlined } from '@ant-design/icons';

const Login = () => {
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
      <form className="form">
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
      </form>
      <div className='button'>Login</div>
      <div className="containerBottom">
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Login
