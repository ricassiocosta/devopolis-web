import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import postImg from '../assets/images/post-img-test.png'
import likeImg from '../assets/images/like.svg'

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
    font-family: 'RobotoBold';
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

  span:first-child {
    font-family: 'RobotoBold';
    padding-right: 5px;
  }
`

const Post = ({ authorPhoto, author, post }) => {
  return (
    <Background>
      <PostTitle>
        <img src={authorPhoto} alt="devprofile" />
        <span>{author}</span>
      </PostTitle>
      <Img src={postImg} />
      <Like>
        <img src={likeImg} alt="like" />
        <span>Gostei</span>
      </Like>
      <Description>
        <span>{author}</span>
        <span>{post}</span>
      </Description>
    </Background>
  )
}

Post.propTypes = {
  authorPhoto: PropTypes.string,
  author: PropTypes.string,
  post: PropTypes.string
}

export default Post
