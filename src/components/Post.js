import React from 'react'
import styled from 'styled-components'

import postImg from '../assets/post-img-test.png'
import likeImg from '../assets/like.svg'

const Background = styled.div`
  width: 460px;
  margin: 20px auto;
  background: #fbfbfb;
  border: 1px solid #d2d2d2;
`
const PostTitle = styled.div`
  display: flex;
  align-items: center;
  line-height: 40px;
  img {
    width: 24px;
    margin: 5px;
    border-radius: 50%;
  }
  span {
    font-family: 'RobotoBold'
  }
`

const Img = styled.img`
  width: 100%;
`

const Like = styled.div`
  padding: 3px;
  img {
    margin-right: 3px;
  }
  span {
    font-family: 'RobotoBold';
    font-size: 14px;
    color: #666666;
  }
`
const Description = styled.div`
  font-size: 14px;
  padding: 3px;
`

export default function Post() {
  return(
    <Background>
      <PostTitle>
        <img src="https://avatars1.githubusercontent.com/u/42079830?v=4" alt="devprofile"/>
        <span>ricassiocosta</span>
      </PostTitle>
      <Img src={postImg}/>
      <Like>
        <img src={likeImg} alt="like"/>
        <span>Gostei</span>
      </Like>
      <Description>
        <span><strong>ricassiocosta</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, dui bibendum venenatis lacinia, sapien felis sodales mauris, eget convallis dolor lectus sed mi.</span>
      </Description>
    </Background>
  )
}