import React, { useState } from 'react'
import CreateBlog from './CreateBlog'

export default function BlogProfile({ img, user }) {
  const [createBlog, setCreateBlog] = useState(false)

  return (
    <div className="blog-profile">
        <div onClick={() => setCreateBlog(true)}>
            <img src={img} alt={`${user}'s img`} />
        </div>
        <p className='comfortaa' onClick={() => setCreateBlog(true)}>{user}'s Blog</p>
        {createBlog && <CreateBlog createBlog={createBlog} setCreateBlog={setCreateBlog}/>}
    </div>
  )
}
