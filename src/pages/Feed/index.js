import React, { useState, useEffect } from 'react'
import { FaSearch, FaNewspaper, FaTimes } from 'react-icons/fa'
import { MdAddAPhoto } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { getDashboard } from '../../services/dashboard'
import Header from '../../components/Header'
import Post from '../../components/Post'

import { 
  FeedPage,
  Content,
  LeftBar,
  RightBar,
  NewPost,
  FeedHistory,
  OnlineFriends,
  Friend,
  NewPostBackground,
  NewPostModal
} from './styles'

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

  function openNewPostModal() {
    document.querySelector('#newPostModalBackground').style.display = "block"
  }

  function closeNewPostModal() {
    document.querySelector('#newPostModalBackground').style.display = "none"
  }

  function handleNewPost(event) {
    event.preventDefault()
    // TODO
  }

  function previewImage(e) {
    const $ = document.querySelector.bind(document)
    const previewImg = $('.preview-img')
    const labelPreview = $('.label-preview')
    const image = e.target.files.item(0)
    const reader = new FileReader()
    reader.onload = e => previewImg.src = e.target.result
    reader.readAsDataURL(image)
    labelPreview.classList.add('hidden')
    previewImg.classList.remove('hidden')
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
        </LeftBar>
        <RightBar>
          <NewPost>
            <button onClick={openNewPostModal}>
              <FaNewspaper color="rgba(0,0,0,0.6)"/>
              <span>Comece uma publicação</span>
            </button>
            <NewPostBackground id="newPostModalBackground">
              <NewPostModal>
                <FaTimes id="closeModal" onClick={closeNewPostModal}/>
                <span>Crie uma publicação</span>
                <hr/>
                <form onSubmit={handleNewPost}>
                  <input type="file" name="postImage" id="postImage" accept="image/*" onChange={previewImage}/>
                  <img className="preview-img hidden" alt="preview"></img>
                  <label htmlFor="postImage" className="label-preview"><MdAddAPhoto color="rgba(0,0,0,0.6)"/></label>
                  <textarea name="postBody" id="postBody" cols="30" rows="10" placeholder="No que você está pensando?"></textarea>
                  <hr/>
                  <button type="submit">Publicar</button>
                </form>
              </NewPostModal>
            </NewPostBackground>
          </NewPost>
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
        </RightBar>
      </Content>
    </FeedPage>
  )
}

export default Feed