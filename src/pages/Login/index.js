import React from 'react'

import './index.scss'
import logo from '../../assets/network.svg'
import githubLogo from '../../assets/github.svg'

import { AUTHORIZE_URL } from '../../constants'
import { GITHUB_CLIENT_ID } from '../../env'

export default function Login () {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo"/>
        <span>Devopolis</span>
      </div>
      <div className="login-box">
        <p>Already have a Github account? Just login bellow.</p>
      <a className="login-button" href={`${AUTHORIZE_URL}?client_id=${GITHUB_CLIENT_ID}`}>
          <img src={githubLogo} alt="github logo"/>
          <span>Github</span>
        </a>
      </div>
    </>
  )
}
