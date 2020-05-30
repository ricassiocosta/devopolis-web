import React, { useState, useEffect } from 'react'
import { getPosts } from '../../services/posts'
import { getDevInfo } from '../../services/dev'
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
  const [devInfo, setDevInfo] = useState({})
  const devUsername = history.location.pathname.split('/', 2)[1]
  const loggedDev = useSelector(state => state.dev.devInfo)
  let followedList = []
  followedList.push(devInfo.followedList)

  useEffect(() => {
    async function getDev() {
      const response = await getDevInfo(devUsername)
      setDevInfo(response)
    }
    getDev()
  }, [devUsername])

  useEffect(() => {
    async function callApi() {
      const response = await getPosts(devUsername)
      setPosts(response)
    }
    callApi()
  }, [devUsername])

  function handlePost(devUsername, postId) {
    history.push(`/${devUsername}/${postId}`)
  }

  return(
    <ProfilePage>
      <Header 
        name={loggedDev.name}
        username={loggedDev.github_username}
        profilePhoto={loggedDev.avatar_url}
        history={history}
      />
      <Content>
        <ProfileHeader>
          <img src={devInfo.avatar_url} alt=""/>
          <ProfileInfo>
            <span>{devInfo.name}</span>
            <span>{devInfo.github_username}</span>
            <p>"{devInfo.bio}"</p>
            <span><strong>{posts.length}</strong> Publicações | <strong>{followedList.length}</strong> Conexões</span>
          </ProfileInfo>
        </ProfileHeader>
        <hr/>
        <PostsHistory>
          {
            posts.map(post => (
              <img key={post._id} src={"data:image/png;base64," + post.thumbnail} alt="" onClick={() => handlePost(devUsername ,post._id)}/>
            )).reverse()
          }
        </PostsHistory>
      </Content>
    </ProfilePage>
  )
}

export default Profile