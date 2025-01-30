import React, { useContext, useState } from 'react'
import CreateBlog from './CreateBlog'
import { NewsContext } from '../context/NewsContext'

export default function BlogProfile({ img, user }) {
  const [createBlog, setCreateBlog] = useState(false)
  const {renderBlogs, setRenderBlogs} = useContext(NewsContext)

  function handleProfileClick() {
    setCreateBlog(true)
    setRenderBlogs(false)
  }

  return (
    <div className="blog-profile">
        <div onClick={handleProfileClick}>
            <img src={img} alt={`${user}'s img`} />
        </div>
        <p className='comfortaa' onClick={handleProfileClick}>{user}'s Blog</p>
        {createBlog && <CreateBlog createBlog={createBlog} setCreateBlog={setCreateBlog}/>}
    </div>
  )
}
