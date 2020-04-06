import React from 'react'

import { HeaderWelcome, Logo, LoginBox, LoginButton, Img, LoginPage, Content, Container } from './styles'
import logo from '../../assets/logo.svg'
import githubLogo from '../../assets/github.svg'
import welcome from '../../assets/welcome.jpg'

import { AUTHORIZE_URL } from '../../constants'
import { GITHUB_CLIENT_ID } from '../../env'

export default function Login () {
  return (
    <LoginPage>
      <HeaderWelcome>
        <span>print(' Be welcome to our community! ');</span>
      </HeaderWelcome>

      <Content>
        <Container>
          <Logo src={logo} alt="logo"/>

          <LoginBox>
            <p>Already have a Github account?<br/> Just login bellow.</p>

            <LoginButton href={`${AUTHORIZE_URL}?client_id=${GITHUB_CLIENT_ID}`}>
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
