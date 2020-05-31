import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import likeImg from '../assets/images/like.svg'

const Background = styled.div`
  width: 460px;
  margin: 0 auto 20px;
  background: #fbfbfb;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
`
const PostTitle = styled.div`
  display: flex;
  align-items: center;
  line-height: 40px;
  img {
    width: 24px;
    margin: 5px;
    border-radius: 50%;
    cursor: pointer;
  }
  span {
    font-family: 'RobotoBold';
    cursor: pointer;
  }
`

const Img = styled.img`
  width: 100%;
`

const Like = styled.div`
  padding: 3px;
  margin-left: 3px;
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
  font-size: 16px;
  padding: 7px;

  span:first-child {
    font-family: 'RobotoBold';
    padding-right: 5px;
  }
`

const Post = ({ authorPhoto, author, post, thumbnail, history }) => {

  function handleProfile() {
    history.push(`/${author}`)
  }

  return(
    <Background>
      <PostTitle>
        <img src={authorPhoto} alt="devprofile" onClick={handleProfile}/>
        <span onClick={handleProfile}>{author}</span>
      </PostTitle>
      <Img src={"data:image/png;base64," + thumbnail} />
      <Like>
        <img src={likeImg} alt="like"/>
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
  post: PropTypes.string,
  thumbnail: PropTypes.string
};

export default Post