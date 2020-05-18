import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { getDashboard } from '../../services/dashboard'

import { useSelector } from 'react-redux'

import { 
  FeedPage,
  Content,
  Sidebar,
  FeedHistory,
  OnlineFriends,
  Friend
} from './styles'

import Header from '../../components/Header'
import Post from '../../components/Post'

const Feed = ({ history }) => {
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
        history={history}
      />
      <Content>
        <Sidebar>
          <input type="text" placeholder="Pesquisar devs"/>
          <FaSearch color="gray" id="searchIcon"/>
          <OnlineFriends>
            <p>Amigos Online</p>
            <Friend>
              <img src="https://avatars1.githubusercontent.com/u/33037089?v=4" alt=""/>
              <span>olucasgomes</span>
            </Friend>
            <Friend>
              <img src="https://avatars2.githubusercontent.com/u/8683378?v=4" alt=""/>
              <span>gustavoguanabara</span>
            </Friend>
            <Friend>
              <img src="https://avatars1.githubusercontent.com/u/499550?v=4" alt=""/>
              <span>yyx990803</span>
            </Friend>
          </OnlineFriends>
        </Sidebar>
        <FeedHistory>
          {
            posts.map(post => (
              <Post
                key={post._id}
                author={post.author}
                authorPhoto={post.authorPhoto}
                post={post.post}
                thumbnail={post.thumbnail}
              />
            ))
          }
        </FeedHistory>
      </Content>
    </FeedPage>
  )
}

export default Feed