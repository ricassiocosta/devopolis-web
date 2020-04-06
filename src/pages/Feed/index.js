import React from 'react'

import { 
  FeedPage,
  Content,
  Sidebar,
  FeedHistory,
} from './styles'

import Header from '../../components/Header'
import Post from '../../components/Post'

export default function Feed() {
  return (
    <FeedPage>
      <Header/>
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