import styled from 'styled-components'

export const FeedPage = styled.div`
  font-family: 'Roboto';
  background: #E5E5E5;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`
export const Content = styled.div`
  width: 800px;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
`
export const LeftBar = styled.div`
  width: 250px;
  height: 290px;
  border-radius: 10px;
  background: #fff;
  position: relative;
  line-height: 48px;
  input {
    margin-left: 12%;
    height: 30px;
    width: 75%;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #eeeeee;
    text-indent: 30px;
    outline: none;
  }
  #searchIcon {
    position: absolute;
    left: 37px;
    top: 26px;
  }
  p {
    font-family: 'RobotoBold';
    font-size: 13px;
    color: gray;
    margin-bottom: -10px
  }
`
export const FeedHistory = styled.div`
  width: 530px;
  height: 88vh;
  border-radius: 10px;
  background: #fff;
  margin-left: 26px;
  overflow-y: auto;
  ::-webkit-scrollbar{
    display: none
  }
`

export const RightBar = styled.div `

`
export const NewPost = styled.div `
  margin-left: 26px;
  margin-bottom: 10px;
  width: 530px;
  height: 50px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    background-color: white;
    font-size: 18px;
    font-family: "RobotoBold";
    outline: none;
    span {
      color: rgba(0,0,0,0.6);
      margin-left: 5px;
      :hover {
        text-decoration: underline;
      }
    }
  }
`

export const OnlineFriends = styled.div`
  margin-left: 12%;
  margin-top: 10px;
  img {
    width: 35px;
    border-radius: 50%;
  }
  span {
    font-family: 'RobotoBold';
    margin-left: 5px;
  }
`
export const Friend = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const NewPostBackground = styled.div`
  display: none;
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
`

export const NewPostModal = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 0 auto;
  margin-top: 5%;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 500px;
  padding: 20px;
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
  form {
    display: flex;
    flex-direction: column;
    input[type = "file"] {
      display: none;
    }
    label {
      border: 1px solid #aaaa;
      width: 100%;
      height: 300px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 38px;
      cursor: pointer;
      :hover {
        background-color: #eeee;
      }
    }
    label.hidden {
      display: none;
    }
    img {
      max-height: 450px;
    }
    img.hidden {
      display: none;
    }
    textarea {
      resize: none;
      margin-top: 10px;
      outline: none;
      font-size: 16px;
      font-family: 'Roboto';
      }
    }
    button {
      background-color: #0F92FF;
      color: white;
      width: 100px;
      height: 30px;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: -10px !important;
      :hover {
        filter: brightness(0.8)
      }
    }
  }
`