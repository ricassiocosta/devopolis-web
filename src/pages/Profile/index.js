import React, { useState, useEffect } from 'react'
import { getPosts } from '../../services/posts'

import { useSelector } from 'react-redux'
import { 
  ProfilePage,
  ProfileHeader,
  ProfileInfo,
  Content,
  PostsHistory 
} from './styles.js'
import Header from '../../components/Header'

const Profile = ({ history }) => {
  const [posts, setPosts] = useState([])
  const devInfo = useSelector(state => state.dev.devInfo)

  useEffect(() => {
    async function callApi() {
      const posts = await getPosts(devInfo.github_username)
      setPosts(posts)
    }
    callApi()
  }, [])


  return(
    <ProfilePage>
      <Header 
        name={devInfo.name}
        username={devInfo.github_username}
        profilePhoto={devInfo.avatar_url}
        history={history}
      />
      <Content>
        <ProfileHeader>
          <img src={devInfo.avatar_url} alt=""/>
          <ProfileInfo>
            <span>{devInfo.name}</span>
            <span>{devInfo.github_username}</span>
            <p>"{devInfo.bio}"</p>
            <span><strong>{posts.length}</strong> Publicações | <strong>{devInfo.followedList.length}</strong> Conexões</span>
          </ProfileInfo>
        </ProfileHeader>
        <hr/>
        <PostsHistory>
          {
            posts.map(post => (
              <img src={"data:image/png;base64," + post.thumbnail} alt=""/>
            ))
          }
        </PostsHistory>
      </Content>
    </ProfilePage>
  )
}

export default Profile