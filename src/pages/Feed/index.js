import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import 'react-image-crop/dist/ReactCrop.css'

import { getDashboard } from '../../services/dashboard'
import { search } from '../../services/search'
import Header from '../../components/Header'
import Post from '../../components/Post'
import NewPost from '../../components/NewPost'

import { 
  FeedPage,
  Content,
  LeftBar,
  RightBar,
  FeedHistory,
  OnlineFriends,
  Friend,
  DevsFound
} from './styles'

const Feed = ({ history }) => {
  const [posts, setPosts] = useState([])
  const devInfo = useSelector(state => state.dev.devInfo)
  const [searchQuery, setSearchQuery] = useState('')
  const [queriedDevs, setQueriedDevs] = useState([])

  useEffect(() => {
    async function callApi() {
      const posts = await getDashboard()
      setPosts(posts)
    }
    callApi()
  }, [])
  
  const onSearch = async (e) =>{
    const searchQuery = e.target.value
    setSearchQuery(searchQuery)

    if (searchQuery.length >= 3) {
      const devs = await search(searchQuery)
      setQueriedDevs(devs)
      showSearchSelect()
    } else {
      setQueriedDevs([])
      hideSearchSelect()
    }
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
          <input placeholder="Pesquisar devs" value={searchQuery} onChange={onSearch} onBlur={hideSearchSelect} onFocus={showSearchSelect} />
          <DevsFound id='devsFound' className='hidden'>
            {
              queriedDevs.map((dev, index) => (
                  <div key={index}>
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
        </RightBar>
      </Content>
    </FeedPage>
  )
}

export default Feed