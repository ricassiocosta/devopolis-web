import React, { useState, useEffect } from 'react'
import { FaHeart, FaHeartBroken } from 'react-icons/fa'

import { getPosts } from '../../services/posts'
import { getDevInfo, follow, unfollow } from '../../services/dev'
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

  useEffect(() => {
    async function verifyFollow() {
      const list = []
      list.push(loggedDev.followedList)
      console.log(list)
      if(loggedDev.github_username === devUsername) {
        document.querySelector('.unfollowBtn').classList.add('hidden')
        document.querySelector('.followBtn').classList.add('hidden')
      }
      else if(list.indexOf(devInfo._id)) {
        document.querySelector('.unfollowBtn').classList.remove('hidden')
      } else if(!list.indexOf(devInfo._id)) {
        document.querySelector('.followBtn').classList.remove('hidden')
      }
    }
    verifyFollow()
  }, [devInfo._id, devUsername, loggedDev.followedList, loggedDev.github_username])

  function handlePost(devUsername, postId) {
    history.push(`/${devUsername}/${postId}`)
  }

  async function handleFollow() {
    const response = await follow(devUsername)
    console.log(response)
    document.querySelector('.followBtn').classList.add('hidden')
    document.querySelector('.unfollowBtn').classList.remove('hidden')
  }

  async function handleUnfollow() {
    const response = await unfollow(devUsername)
    console.log(response)
    document.querySelector('.unfollowBtn').classList.add('hidden')
    document.querySelector('.followBtn').classList.remove('hidden')
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
          <button className="followBtn hidden" onClick={handleFollow}>Seguir <FaHeart/></button>
          <button className="unfollowBtn hidden" onClick={handleUnfollow}>Deixar de Seguir <FaHeartBroken/></button>
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