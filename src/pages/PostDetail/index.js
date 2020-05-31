import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getPost } from '../../services/posts'
import { getDevInfo } from '../../services/dev'
import { 
  PostPage,
  Content
} from './styles.js'
import Header from '../../components/Header'
import Post from '../../components/Post'

const PostDetail = ({ history }) => {
  const [post, setPost] = useState([])
  const [postOwner, setPostOwner] = useState([])
  const loggedDev = useSelector(state => state.dev.devInfo)
  const devUsername = history.location.pathname.split('/', 2)[1]
  const postId = history.location.pathname.split('/', 3)[2]
  
  useEffect(() => {
    async function callApi() {
      const response = await getDevInfo(devUsername)
      setPostOwner(response)
    }
    callApi()
  }, [devUsername])

  useEffect(() => {
    async function callApi() {
      const response = await getPost(devUsername, postId)
      setPost(response)
    }
    callApi()
  },[devUsername, postId])

  return(
    <PostPage>
      <Header 
        name={loggedDev.name}
        username={loggedDev.github_username}
        profilePhoto={loggedDev.avatar_url}
        history={history}
      />
      <Content> 
        {
          post.map(post => (
            <Post
              key={post._id}
              author={postOwner.github_username}
              authorPhoto={postOwner.avatar_url}
              post={post.post}
              thumbnail={post.thumbnail}
              history={history}
            />
          ))
        }
        
      </Content>
    </PostPage>
  )
}

export default PostDetail