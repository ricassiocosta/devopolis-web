import React from 'react'

import './index.scss'
import logo from '../../assets/network.svg'
import githubLogo from '../../assets/github.svg'

export default function Login () {
  return (
    <>
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
    </>
  )
}
