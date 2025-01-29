import React from "react"

export default function CreateBlog({ CreateBlog, setCreateBlog }) {
  return (
    <div className="create-blog">
      <div className="wallpaper"></div>

      <div className="create-blog__form">
        <button className="create-post-button">CREATE NEW POST</button>

        <h2 className="back-button" onClick={() => setCreateBlog(false)}>
          BACK <i className="fa-solid fa-angle-right"></i>
        </h2>
      </div>

      <div className="profile-picture">
      </div>
    </div>
  )
}
