import React, { useContext, useState } from "react"
import { NewsContext } from "../context/NewsContext"

import blog3 from "../assets/images/blog3.jpg"

export default function CreateBlog({ CreateBlog, setCreateBlog }) {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [showFormSubmitted, setShowFormSubmitted] = useState(false)
  const {renderBlogs, setRenderBlogs} = useContext(NewsContext)

  function showFormFunction(e) {
    e.target.style.display = "none"
    setShowForm(true)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    const newPost = {
      title: title,
      description: text,
    }

    let localData = localStorage.getItem("blogs")
    if (localData) {
      localData = JSON.parse(localData)
      localData.push(newPost)
      localStorage.setItem("blogs", JSON.stringify(localData))
    } else {
      localStorage.setItem("blogs", JSON.stringify([newPost]))
    }

    setTitle("")
    setText("")
    setShowForm(false)
    setShowFormSubmitted(true)
    setRenderBlogs(true)
  }

  return (
    <div className="create-blog">
      <div className="wallpaper"></div>

      <div className="create-blog__form">
        <h2 className="back-button" onClick={() => setCreateBlog(false)}>
          BACK <i className="fa-solid fa-angle-right"></i>
        </h2>

        <button
          className="create-post-button"
          onClick={(e) => showFormFunction(e)}
        >
          CREATE NEW POST
        </button>

        {showForm && (
          <form onSubmit={handleFormSubmit}>
            <h1 className="comfortaa gradient-header">NEW POST</h1>

            <label htmlFor="imageUpload">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              Upload Image
              <input type="file" id="imageUpload" accept="image/*"/>
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
            <h1 className="comfortaa gradient-header form-submitted">POST SUBMITTED!</h1>
        )}
      </div>

      <div className="profile-picture"></div>
    </div>
  )
}
