import React from "react"
import Card from "../components/Card"

import blog1 from "../assets/images/blog1.jpg"
import blog2 from "../assets/images/demo.jpg"
import blog3 from "../assets/images/blog3.jpg"
import blog4 from "../assets/images/health.jpg"
import tech from "../assets/images/tech.jpg"

function MyBlogs() {
  return (
    <div className="my-blogs">
      <h2>my blogs</h2>
      <div className="my-blogs__grid">
        <Card title="this is my first blog" img={blog1} blog={true}></Card>
        <Card title="this is my second blog" img={blog2} blog={true}></Card>
        <Card title="this is my third blog" img={blog3} blog={true}></Card>
        <Card title="this is my fourth blog" img={blog4} blog={true}></Card>
        <Card title="this is my fifth blog" img={tech} blog={true}></Card>
      </div>
    </div>
  )
}

export default MyBlogs
