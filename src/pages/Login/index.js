import React from 'react'

import { HeaderWelcome, Logo, LoginBox, LoginButton, Img, LoginPage, Content, Container } from './styles'
import logo from '../../assets/network.svg'
import githubLogo from '../../assets/github.svg'
import welcome from '../../assets/welcome.jpg'

export default function Login () {
  return (
    <LoginPage>
      <HeaderWelcome>
        <span>print(' Be welcome to our community! ');</span>
      </HeaderWelcome>

      <Content>
        <Container>
          <Logo>
            <img src={logo} alt="logo"/>
            <span>Devopolis</span>
          </Logo>

          <LoginBox>
            <p>Already have a Github account? Just login bellow.</p>

            <LoginButton>
              <img src={githubLogo} alt="github logo"/>
              <span>Github</span>
            </LoginButton>
          </LoginBox>
        </Container>
        <Img src={welcome} alt="networking"/>
      </Content>
    </LoginPage>
  )
}
