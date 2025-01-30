import React, { useState } from "react"
import Card from "../components/Card"

import blog3 from "../assets/images/blog3.jpg"

function MyBlogs() {
  const [blogs, setBlogs] = useState(() => {
    const localData = localStorage.getItem("blogs") || null
    if (localData) {
      return JSON.parse(localData)
    } else {
      return []
    }
  })

  return (
    <div className="my-blogs">
      <h2>my blogs</h2>
      <div className="my-blogs__grid">
        {blogs.map((blog, index) => {
          return (
            <Card
              key={index}
              title={blog.title}
              img={blog.img || blog3}
              description={blog.description}
              blog={true}
            ></Card>
          )
        })}
      </div>
    </div>
  )
}

export default MyBlogs
