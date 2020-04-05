import React from 'react'

import './index.scss'
import logo from '../../assets/network.svg'
import githubLogo from '../../assets/github.svg'
import welcome from '../../assets/welcome.jpg'

export default function Login () {
  return (
    <>
      <div className="welcome">
        <span>print(' Be welcome to our community! ');</span>
      </div>
      <div className="container">
        <div className="login">
          <div className="logo">
            <img src={logo} alt="logo"/>
            <span>Devopolis</span>
          </div>
          <div className="login-box">
            <p>Already have a Github account? Just login bellow.</p>
            <div className="login-button">
              <img src={githubLogo} alt="github logo"/>
              <span>Github</span>
            </div>
          </div>
        </div>
        <div className="login-img">
          <img src={welcome} alt="networking"/>
        </div>
      </div>
    </>
  )
}
