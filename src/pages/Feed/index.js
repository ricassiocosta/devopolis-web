import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { SolarSystemLoading } from 'react-loadingg';
import 'react-image-crop/dist/ReactCrop.css'

import { getDashboard } from '../../services/dashboard'
import { search } from '../../services/search'

import Header from '../../components/Header'
import Post from '../../components/Post'
import NewPost from '../../components/NewPost'

import { logout } from '../../store/actions'

import { 
  FeedPage,
  Content,
  LeftBar,
  RightBar,
  FeedHistory,
  OnlineFriends,
  DevsFound,
  Friend,
  LoadingWrapper
} from './styles'

const Posts = ({ posts, history }) => {
  return posts.map(post => (
    <Post
      key={post._id}
      author={post.author}
      authorPhoto={post.authorPhoto}
      post={post.post}
      thumbnail={post.thumbnail}
      history={history}
    />
  )).reverse()
}

const Feed = ({ history }) => {
  const dispatch = useDispatch()
  const [posts, setPosts] = useState([])
  const devInfo = useSelector(state => state.dev.devInfo)
  const [searchQuery, setSearchQuery] = useState('')
  const [queriedDevs, setQueriedDevs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function callApi() {
      try {
        setIsLoading(true)
        const posts = await getDashboard()
        setPosts(posts)
      } catch (err) {
        dispatch(logout())
      } finally {
        setIsLoading(false)
      }
    }
    callApi()
  }, [dispatch])
  
  const onSearch = async (e) =>{
    const searchQuery = e.target.value
    setSearchQuery(searchQuery)

    if (searchQuery.length >= 3) {
      try {
        const devs = await search(searchQuery)
        setQueriedDevs(devs)
        showSearchSelect()
      } catch (err) {
        dispatch(logout())
      }
    } else {
      setQueriedDevs([])
      hideSearchSelect()
    }
  }

  function handleDevProfile(dev) {
    history.push(`/${dev.github_username}`)
  }

  const hideSearchSelect = () => {
    document.getElementById('devsFound').classList.add('hidden')
  }

  const showSearchSelect = () => {
    document.getElementById('devsFound').classList.remove('hidden')
  }

  return (
    <FeedPage>
      <Header
        name={devInfo.name}
        username={devInfo.github_username}
        profilePhoto={devInfo.avatar_url}
        history={history}
      />
      <Content>
        <LeftBar>
          <input placeholder="Pesquisar devs" value={searchQuery} onChange={onSearch} /*onBlur={hideSearchSelect}*/ onFocus={showSearchSelect} />
          <DevsFound id='devsFound' className='hidden'>
            {
              queriedDevs.map((dev, index) => (
                  <div key={index} onClick={() => handleDevProfile(dev)}>
                    <img src={dev.avatar_url} alt={`Foto de ` + dev.name}/>
                    <span>{ dev.github_username }</span>
                  </div>
              ))
            }
          </DevsFound>
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
        </LeftBar>
        <RightBar>
          <NewPost />
          <FeedHistory>
            {
              !isLoading
              ? (posts.length
                  ? <Posts posts={posts} history={history} />
                  : "Você ainda não segue ninguém. Procure algum dev na barra de pesquisa!")
              : (
                <LoadingWrapper>
                  <SolarSystemLoading color='#008CFF' className='loading' />
                </LoadingWrapper>
              )
            }
          </FeedHistory>
        </RightBar>
      </Content>
    </FeedPage>
  )
}

export default Feed