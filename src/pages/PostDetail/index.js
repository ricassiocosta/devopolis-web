import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getPost } from '../../services/posts'
import { getDevInfoById } from '../../services/dev'
import { 
  PostPage,
  Content
} from './styles.js'
import Header from '../../components/Header'
import Post from '../../components/Post'

const PostDetail = ({ history }) => {
  const [post, setPost] = useState([])
  const [postOwner, setPostOwner] = useState([])
  const devInfo = useSelector(state => state.dev.devInfo)
  const postId = localStorage.getItem('postId')
  localStorage.removeItem('postId')
  
  useEffect(() => {
    async function callApi() {
      const requestedPost = await getPost(devInfo.github_username, postId)
      const response = await getDevInfoById(requestedPost.author)
      setPost(requestedPost)
      setPostOwner(response)
    }
    callApi()
  })

  return(
    <PostPage>
      <Header 
        name={devInfo.name}
        username={devInfo.github_username}
        profilePhoto={devInfo.avatar_url}
        history={history}
      />
      <Content> 
        {post.map(post => (
          <Post
            key={post._id}
            author={postOwner.name}
            authorPhoto={postOwner.avatar_url}
            post={post.post}
            thumbnail={post.thumbnail}
          />
        ))}
      </Content>
    </PostPage>
  )
}

export default PostDetail