import React, { useState, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaNewspaper, FaTimes } from 'react-icons/fa'
import { MdAddAPhoto } from 'react-icons/md'
import ReactCrop from 'react-image-crop'

import { createPost } from '../services/posts'

const NewPost = styled.div `
  margin-left: 26px;
  margin-bottom: 10px;
  width: 530px;
  height: 50px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    background-color: white;
    font-size: 18px;
    font-family: "RobotoBold";
    outline: none;
    span {
      color: rgba(0,0,0,0.6);
      margin-left: 5px;
      :hover {
        text-decoration: underline;
      }
    }
  }
`

const NewPostBackground = styled.div`
  display: none;
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
`

const NewPostModal = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 0 auto;
  margin-top: 5%;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 500px;
  padding: 20px;
  text-align: center;
  span {
    font-size: 18px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 30px;
    color: gray;
    border: 1px solid #dddddd;
  }
  #closeModal {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    color: gray;
    :hover {
      color: black;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    input[type = "file"] {
      display: none;
    }
    label {
      border: 1px solid #aaaa;
      width: 100%;
      height: 300px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 38px;
      cursor: pointer;
      :hover {
        background-color: #eeee;
      }
    }
    label.hidden {
      display: none;
    }
    img.preview-img {
      height: 458px;
    }
    img.hidden {
      display: none;
    }
    textarea {
      resize: none;
      margin-top: 10px;
      outline: none;
      font-size: 16px;
      font-family: 'Roboto';
    }
    button {
      background-color: #0F92FF;
      color: white;
      width: 100px;
      height: 30px;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: -10px !important;
      :hover {
        filter: brightness(0.8);
      }
    }
    button.cropImage {
      background-color: #07c42a;
      margin-top: 20px !important;
      margin-bottom: 20px !important;
    }
    button.hidden {
      display: none;
    }
    .react-crop.hidden {
      display: none;
    }
  }
`

const Header = () => {
  const $ = document.querySelector.bind(document)
  const [upImg, setUpImg] = useState()
  const imgRef = useRef(null)
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 })
  const [previewUrl, setPreviewUrl] = useState()
  const [newPostContent, setNewPostContent] = useState('')
  const [newPostThumbnail, setNewPostThumbnail] = useState('')

  function openNewPostModal() {
    document.querySelector('#newPostModalBackground').style.display = "block"
  }

  function closeNewPostModal() {
    document.querySelector('#newPostModalBackground').style.display = "none"
    setNewPostContent('')
    setNewPostThumbnail('')
    const previewImg = $('.preview-img')
    const labelPreview = $('.label-preview')
    previewImg.classList.add('hidden')
    labelPreview.classList.remove('hidden')
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
    const crop = $('.react-crop')
    const cropButton = $('.cropImage')
    crop.classList.remove('hidden')
    cropButton.classList.remove('hidden')
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

  return (
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
              onChange={onSelectFile} required/>
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
              placeholder="No que você está pensando?" 
              required 
            />
            <hr/>
            <button type="submit">Publicar</button>
          </form>
        </NewPostModal>
      </NewPostBackground>
    </NewPost>
  )
}

Header.propTypes = {
  profilePhoto: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string
};

export default Header