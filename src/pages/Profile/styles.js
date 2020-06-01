import styled from 'styled-components'

export const ProfilePage = styled.div`
  font-family: 'Roboto';
  background: #E5E5E5;
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  width: 800px;
  height: 89%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10px;
  padding: 30px;
  border-radius: 10px;
  hr {
    border: 1px solid #dddddd;
    margin-top: 20px;
  }
`
export const ProfileHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
  position: relative;
  img {
    width: 200px;
    border-radius: 50%;
    margin-left: 15%
  }
  button {
    font-size: 16px;
    font-family: 'RobotoBold';
    color: #fff;
    background-color:#008CFF;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    position: absolute;
    right: 50px;
    bottom: 0;
    :hover {
      background-color:#007bff;
    }
  }

  button.unfollowBtn {
    font-size: 16px;
    font-family: 'RobotoBold';
    color: #fff;
    background-color: gray;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    :hover {
      background-color: #545454;
    }
  }

  button.hidden {
    display: none;
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
export const PostsHistory = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  height: 60vh;
  margin: 30px 0 auto;
  img {
    width: 230px;
    cursor: pointer;
  }
  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none
  }
`