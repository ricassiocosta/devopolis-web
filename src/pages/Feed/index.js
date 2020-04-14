import React, { useState, useEffect } from 'react'
import { getDashboard } from '../../services/dashboard'

import { useSelector } from 'react-redux'

import { 
  FeedPage,
  Content,
  Sidebar,
  FeedHistory,
} from './styles'

import Header from '../../components/Header'
import Post from '../../components/Post'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const devInfo = useSelector(state => state.dev.devInfo)

  useEffect(() => {
    async function callApi() {
      const posts = await getDashboard()
      setPosts(posts)
    }
    callApi()
  }, [])

  return (
    <FeedPage>
      <Header
        name={devInfo.name}
        username={devInfo.github_username}
        profilePhoto={devInfo.avatar_url}
      />
      <Content>
        <Sidebar>

        </Sidebar>
        <FeedHistory>
          {
            posts.map(post => (
              <Post
                key={post._id}
                author={post.author}
                authorPhoto={post.authorPhoto}
                post={post.post}
              />
            ))
          }
        </FeedHistory>
      </Content>
    </FeedPage>
  )
}

export default Feed