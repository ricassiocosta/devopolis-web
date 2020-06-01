import React, { useState, useEffect } from 'react'
import { FaHeart, FaHeartBroken } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { SolarSystemLoading } from 'react-loadingg';

import { getPosts } from '../../services/posts'
import { getDevInfo, follow, unfollow } from '../../services/dev'

import { setDevInfo } from '../../store/actions/dev'

import { 
  ProfilePage,
  ProfileHeader,
  ProfileInfo,
  Content,
  PostsHistory 
} from './styles.js'
import Header from '../../components/Header'


const Profile = ({ history }) => {
  const dispatch = useDispatch()
  const [posts, setPosts] = useState([])
  const [profileInfo, setProfileInfo] = useState({})
  const [profileConnections, setProfileConnections] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const devUsername = history.location.pathname.split('/', 2)[1]
  const devInfo = useSelector(state => state.dev.devInfo)

  useEffect(() => {
    async function getDev() {
      const response = await getDevInfo(devUsername)
      setProfileInfo(response)
      setProfileConnections(response.followedList.length)
    }
    getDev()
  }, [devUsername])

  useEffect(() => {
    async function callApi() {
      setIsLoading(true)
      const response = await getPosts(devUsername)
      setPosts(response)
      setIsLoading(false)
      console.log({isLoading})
    }
    callApi()
  }, [devUsername])

  useEffect(() => {
    function verifyFollow() {
      if(devInfo.github_username === devUsername) {
        document.querySelector('.unfollowBtn').classList.add('hidden')
        document.querySelector('.followBtn').classList.add('hidden')
        return
      }

      if(devInfo.followedList.includes(profileInfo._id)) {
        document.querySelector('.unfollowBtn').classList.remove('hidden')
      } else {
        document.querySelector('.followBtn').classList.remove('hidden')
      }
    }
    verifyFollow()
  }, [profileInfo._id, devUsername, devInfo.followedList, devInfo.github_username, devInfo, profileInfo])

  function handlePost(devUsername, postId) {
    history.push(`/${devUsername}/${postId}`)
  }

  async function handleFollow() {
    const response = await follow(devUsername)
    console.log(response)
    dispatch(setDevInfo(response))
    document.querySelector('.followBtn').classList.add('hidden')
    document.querySelector('.unfollowBtn').classList.remove('hidden')
  }

  async function handleUnfollow() {
    const response = await unfollow(devUsername)
    console.log(response)
    dispatch(setDevInfo(response))
    document.querySelector('.unfollowBtn').classList.add('hidden')
    document.querySelector('.followBtn').classList.remove('hidden')
  }

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
          <img src={profileInfo.avatar_url} alt=""/>
          <ProfileInfo>
            <span>{profileInfo.name}</span>
            <span>{profileInfo.github_username}</span>
            <p>"{profileInfo.bio}"</p>
            <span><strong>{posts.length}</strong> Publicações | <strong>{profileConnections}</strong> Conexões</span>
          </ProfileInfo>
          <button className="followBtn hidden" onClick={handleFollow}>Seguir <FaHeart/></button>
          <button className="unfollowBtn hidden" onClick={handleUnfollow}>Deixar de Seguir <FaHeartBroken/></button>
        </ProfileHeader>
        <hr/>
        <PostsHistory>
          {
            !isLoading
            ? (posts.map(post => (
              <img key={post._id} src={"data:image/png;base64," + post.thumbnail} alt="" onClick={() => handlePost(devUsername ,post._id)}/>
            )).reverse())
            : <SolarSystemLoading color='#008cff' />
          }
        </PostsHistory>
      </Content>
    </ProfilePage>
  )
}

export default Profile