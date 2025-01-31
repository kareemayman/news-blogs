import React, { useContext, useEffect, useRef, useState } from "react"
import { NewsContext } from "../context/NewsContext"

export default function CreateBlog({ CreateBlog, setCreateBlog }) {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [image, setImage] = useState(null)
  const [showFormSubmitted, setShowFormSubmitted] = useState(false)
  const { renderBlogs, setRenderBlogs, editingBlog, setEditingBlog } =
    useContext(NewsContext)

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog[0])
      setText(editingBlog[1])
    }
  }, [editingBlog])

  let postToEdit = null

  function showFormFunction(e) {
    e.target.style.display = "none"
    setShowForm(true)
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    if (editingBlog) {
      let localData = JSON.parse(localStorage.getItem("blogs"))
      let newLocalData = localData.map((post) => {
        if (
          post.title === editingBlog[0] &&
          post.description === editingBlog[1]
        ) {
          post.title = title
          post.description = text
          post.img = image
        }

        return post
      })

      localStorage.setItem("blogs", JSON.stringify(newLocalData))
    } else {
      const newPost = {
        title: title,
        description: text,
        img: image,
      }

      let localData = localStorage.getItem("blogs")
      if (localData) {
        localData = JSON.parse(localData)
        localData.push(newPost)
        localStorage.setItem("blogs", JSON.stringify(localData))
      } else {
        localStorage.setItem("blogs", JSON.stringify([newPost]))
      }
    }

    setTitle("")
    setText("")
    setImage(null)
    setShowForm(false)
    setEditingBlog(false)
    setShowFormSubmitted(true)
  }

  function handleBackButtonClick() {
    setEditingBlog(false)
    setCreateBlog(false)
    setRenderBlogs(true)
  }

  function handleImageUpload(e) {
    if (e.target.files.length) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        setImage(reader.result)
      }

      reader.readAsDataURL(file)
    }
  }

  if (editingBlog) {
    let localData = JSON.parse(localStorage.getItem("blogs"))
    postToEdit = localData.find((post) => {
      return (
        post.title === editingBlog[0] && post.description === editingBlog[1]
      )
    })
    return (
      <div className="create-blog">
        <div className="wallpaper"></div>

        <div className="create-blog__form">
          <h2 className="back-button" onClick={handleBackButtonClick}>
            BACK <i className="fa-solid fa-angle-right"></i>
          </h2>

          <form onSubmit={handleFormSubmit}>
            <h1 className="comfortaa gradient-header">NEW POST</h1>

            <label htmlFor="imageUpload">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              Upload Image
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>

            <input
              className="comfortaa"
              type="text"
              placeholder="Add Title (Max 60 characters)"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="comfortaa"
              placeholder="Add Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <button type="submit" className="comfortaa">
              SUBMIT POST
            </button>
          </form>

          {showFormSubmitted && (
            <h1 className="comfortaa gradient-header form-submitted">
              POST SUBMITTED!
            </h1>
          )}
        </div>

        <div className="profile-picture"></div>
      </div>
    )
  }

  return (
    <div className="create-blog">
      <div className="wallpaper"></div>

      <div className="create-blog__form">
        <h2 className="back-button" onClick={handleBackButtonClick}>
          BACK <i className="fa-solid fa-angle-right"></i>
        </h2>

        {!showFormSubmitted && (
          <button
            className="create-post-button"
            onClick={(e) => showFormFunction(e)}
          >
            CREATE NEW POST
          </button>
        )}

        {showForm && (
          <form onSubmit={handleFormSubmit}>
            <h1 className="comfortaa gradient-header">NEW POST</h1>

            <label htmlFor="imageUpload">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              Upload Image
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>

            <input
              className="comfortaa"
              type="text"
              placeholder="Add Title (Max 60 characters)"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="comfortaa"
              placeholder="Add Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <button type="submit" className="comfortaa">
              SUBMIT POST
            </button>
          </form>
        )}

        {showFormSubmitted && (
          <h1 className="comfortaa gradient-header form-submitted">
            POST SUBMITTED!
          </h1>
        )}
      </div>

      <div className="profile-picture"></div>
    </div>
  )
}
