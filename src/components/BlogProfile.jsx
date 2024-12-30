import React from 'react'

export default function BlogProfile({ img, user }) {
  return (
    <div className="blog-profile">
        <div>
            <img src={img} alt={`${user}'s img`} />
        </div>
        <p className='comfortaa'>{user}'s Blog</p>
    </div>
  )
}
