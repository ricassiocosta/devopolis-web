import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

import Logo from '../assets/images/logo.svg'
import Home from '../assets/images/home.svg'
import Logout from '../assets/images/logout.svg'
import Button from './Button'

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
  cursor: pointer;
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
    font-family: 'Roboto';
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
  img {
    cursor: pointer;
  }
`

const LogoutBackground = styled.div`
  display: none;
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`

const LogoutModal = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 400px;
  height: 150px;
  text-align: center;
  span {
    font-size: 18px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 30px;
    color: gray;
    border: 1px solid #dddddd;
  }
  #closeModal {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    color: gray;
    :hover {
      color: black;
    }
  }
`

const Header = ({ profilePhoto, name, username, history }) => {

  function handleProfile() {
    history.push('/profile')
  }
  
  function handleHome() {
    history.push('/dashboard')
  }

  function handleLogout() {
    // TO DO
  }

  function openModal() {
    document.querySelector('#modalBackground').style.display = "block";
  }

  function closeModal() {
    document.querySelector('#modalBackground').style.display = "none";
  }

  return (
    <Background>
      <HeaderContent>
        <LogoImg src={Logo} alt="Logo"/>
        <HeaderTop>
          <DevInfo onClick={handleProfile}>
            <img src={profilePhoto} alt="dev"/>
            <DevName>
              <span>{name}</span>
              <span>{username}</span>
            </DevName>
          </DevInfo>
          <HeaderBtn>
            <img src={Home} alt="Inicio" onClick={handleHome}/>
            <img src={Logout} alt="Sair" onClick={openModal}/>
          </HeaderBtn>
        </HeaderTop>
      </HeaderContent>
      <LogoutBackground id="modalBackground">
        <LogoutModal>
          <FaTimes id="closeModal" onClick={closeModal}/>
          <span>Deseja sair da sua conta?</span>
          <hr/>
          <Button text="Sim, fazer logout" textColor="white" backgroundColor ="gray" onClick={handleLogout}/>
        </LogoutModal>
      </LogoutBackground>
    </Background>
  )
}

Header.propTypes = {
  profilePhoto: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string
};

export default Header