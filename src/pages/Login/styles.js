import styled from 'styled-components'

export const LoginPage = styled.div`
  font-family: 'RobotoBold';
`

export const HeaderWelcome = styled.div`
  width: 100%;
  height: 50px;
  background-color: #008CFF;
  font-family: 'ArvoBold';
  text-align: center;
  line-height: 50px;
  span{
    color: #fff;
  }
`

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 50px;
`

export const LoginBox = styled.div`
  width: 370px;
  height: 200px;
  background: #EEEEEEEE;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 280px;
    margin-top: 36px;
    margin-bottom: 36px;
    color: #008CFF;
  }
`

export const LoginButton = styled.a`
  width: 245px;
  height: 45px;
  background-color: #008CFF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  img {
    width: 32px;
  }
  span {
    font-size: 18px;
    color: white;
    margin-left: 10px;
  }
  &:hover {
    filter: brightness(0.8);
  }
` 

export const Img = styled.img`
  width: 550px;
  margin-left: 60px
` 

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
` 

export const Container = styled.div`
  margin-top: 50px;
` 
