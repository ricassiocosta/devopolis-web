import React from 'react'
import axios from 'axios'

import './index.scss'
import logo from '../../assets/network.svg'
import home from '../../assets/home.svg'
import logout from '../../assets/logout.svg'

export default function Feed() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="logo"/>
            <span>Devopolis</span>
          </div>
          <div className="header-top">
            <div className="logged-dev">
              <div className="logged-dev-img">
                <img src="https://avatars1.githubusercontent.com/u/42079830?v=4" alt=""/>
              </div>
              <div className="logged-dev-info">
                <span>Ricássio Costa</span>
                <span>@ricassiocosta</span>
              </div>
            </div>
            <div className="header-btn">
              <img src={home} alt="home"/>
              <img src={logout} alt="logout"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}