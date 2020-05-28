import React, { useState, useEffect, useCallback, useRef } from 'react'
import { FaSearch, FaNewspaper, FaTimes } from 'react-icons/fa'
import { MdAddAPhoto } from 'react-icons/md'
import { useSelector } from 'react-redux'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { getDashboard } from '../../services/dashboard'
import { createPost } from '../../services/posts'
import { search } from '../../services/search'

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
  DevsFound,
  NewPostBackground,
  NewPostModal
} from './styles'

const Feed = ({ history }) => {
  const $ = document.querySelector.bind(document)

  const imgRef = useRef(null)

  const devInfo = useSelector(state => state.dev.devInfo)

  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 })
  const [posts, setPosts] = useState([])
  const [upImg, setUpImg] = useState()
  const [previewUrl, setPreviewUrl] = useState()
  const [newPostContent, setNewPostContent] = useState('')
  const [newPostThumbnail, setNewPostThumbnail] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [queriedDevs, setQueriedDevs] = useState([])

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

  async function handleNewPost(event) {
    event.preventDefault()
    await createPost(newPostContent, newPostThumbnail)
    closeNewPostModal()
  }

  async function previewImage(e) {
    e.preventDefault()
    const previewImg = $('.preview-img')
    const labelPreview = $('.label-preview')
    const cropButton = $('.cropImage')
    const crop = $('.react-crop')
    previewImg.src = previewUrl
    let file = await fetch(previewUrl)
      .then(r => r.blob())
      .then(blobFile => new File([blobFile], "thumbnail", { type: "image/png" }))
    setNewPostThumbnail(file)
    labelPreview.classList.add('hidden')
    crop.classList.add('hidden')
    cropButton.classList.add('hidden')
    previewImg.classList.remove('hidden')
  }

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const [file] = e.target.files
      const reader = new FileReader()
      reader.addEventListener('load', () => setUpImg(reader.result))
      reader.readAsDataURL(file)
    }
  }
  
  const onLoad = useCallback(img => {
    imgRef.current = img
    const labelPreview = $('.label-preview')
    const cropImage = $('.cropImage')
    labelPreview.classList.add('hidden')
    cropImage.classList.remove('hidden')
  }, [$])

  const makeClientCrop = async crop => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, 'newFile.jpeg')
    }
  }

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Canvas is empty'))
          return
        }
        blob.name = fileName
        window.URL.revokeObjectURL(previewUrl)
        setPreviewUrl(window.URL.createObjectURL(blob))
      }, 'image/jpeg')
    })
  }

  const onSearch = async (e) =>{
    const searchQuery = e.target.value
    setSearchQuery(searchQuery)

    if (searchQuery.length >= 3) {
      const devs = await search(searchQuery)
      setQueriedDevs(devs)
      document.querySelector('.searchTitle').classList.remove('hidden')
    } else {
      setQueriedDevs([])
      document.querySelector('.searchTitle').classList.add('hidden')
    }
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
          <input placeholder="Pesquisar devs" value={searchQuery} onChange={onSearch}/>
          <DevsFound>
            <p className="searchTitle hidden">Resultado:</p>
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
                  <input
                    type="file"
                    name="post-image"
                    id="post-image"
                    accept="image/*"
                    onChange={onSelectFile} />
                  <img className="preview-img hidden" alt="preview"></img>
                  <ReactCrop
                    className="react-crop"
                    src={upImg}
                    onImageLoaded={onLoad}
                    crop={crop}
                    onChange={c => setCrop(c)}
                    onComplete={makeClientCrop}
                  />
                  <button className="cropImage hidden" onClick={previewImage}>Cortar</button>
                  <label htmlFor="post-image" className="label-preview"><MdAddAPhoto color="rgba(0,0,0,0.6)"/></label>
                  <textarea
                    name="post-body"
                    id="post-body"
                    cols="30"
                    rows="10"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="No que você está pensando?" />
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