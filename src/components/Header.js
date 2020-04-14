import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Logo from '../assets/images/logo.svg'
import Home from '../assets/images/home.svg'
import Logout from '../assets/images/logout.svg'

const Background = styled.div`
  width: 100%;
  height: 65px;
  background: #fff;
  border: 1px solid #ddd;
  display: flex;
`
const HeaderContent = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
`

const LogoImg = styled.img`
  width: 163px;
  height: 32px;
  display: flex;
  margin-right: 110px;
  align-self: center;
`

const HeaderTop = styled.div`
  width: 665px;
  display: flex;
  justify-content: space-between;
`
const DevInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 5px;
  img {
    width: 42px;
    border-radius: 50%;
    align-self: center;
  }
`

const DevName = styled.div`
  span:nth-child(1) {
    font-family: 'ArvoBold';
    font-size: 14px;
  }
  span:nth-child(2) {
    font-size: 11px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const HeaderBtn = styled.div`
  display: flex;
  align-items: center;
  img:nth-child(1){
    margin-right: 16px;
  }
`

const Header = ({ profilePhoto, name, username }) => {
  return (
    <Background>
      <HeaderContent>
        <LogoImg src={Logo} alt="Logo"/>
        <HeaderTop>
          <DevInfo>
            <img src={profilePhoto} alt="dev"/>
            <DevName>
              <span>{name}</span>
              <span>{username}</span>
            </DevName>
          </DevInfo>
          <HeaderBtn>
            <img src={Home} alt="Inicio"/>
            <img src={Logout} alt="Sair"/>
          </HeaderBtn>
        </HeaderTop>
      </HeaderContent>
    </Background>
  )
}

Header.propTypes = {
  profilePhoto: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string
};

export default Header