import React from 'react'
import '../../assets/styles/signup.scss'

const SignUp = () => {
  return (
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
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
      </form>
      <div className='button'>Sign Up</div>
      <div className="containerBottom">
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default SignUp
