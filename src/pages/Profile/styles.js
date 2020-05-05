import styled from 'styled-components'

export const ProfilePage = styled.div`
  font-family: 'Roboto';
  background: #E5E5E5;
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  width: 800px;
  background-color: white;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  padding: 30px;
  border-radius: 10px;
  img {
    width: 200px;
    border-radius: 50%;
  }
`
export const ProfileHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
  img {
    margin-left: 15%
  }
`
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  span:nth-child(1){
    font-family: 'RobotoBold';
    font-size: 22px;
  }
  span:nth-child(2){
    font-size: 18px;
  }
  p {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`