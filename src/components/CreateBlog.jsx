import React, { useState } from "react"

export default function CreateBlog({ CreateBlog, setCreateBlog }) {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  function showFormFunction(e) {
    e.target.style.display = "none"
    setShowForm(true)
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
          <form>
            <h1 className="comfortaa">NEW POST</h1>

            <label htmlFor="imageUpload">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              Upload Image
              <input type="file" id="imageUpload" accept="image/*" required/>
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
      </div>

      <div className="profile-picture"></div>
    </div>
  )
}
