import React from 'react'

import { useSelector } from 'react-redux'

import { 
  FeedPage,
  Content,
  Sidebar,
  FeedHistory,
} from './styles'

import Header from '../../components/Header'
import Post from '../../components/Post'

export default function Feed() {
  const devInfo = useSelector(state => state.dev.devInfo)

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
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </FeedHistory>
      </Content>
    </FeedPage>
  )
}