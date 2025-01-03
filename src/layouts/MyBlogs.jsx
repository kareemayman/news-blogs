import React from 'react'
import Card from '../components/Card'

import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import blog4 from '../assets/images/blog4.jpg'
import tech from '../assets/images/tech.jpg'

function MyBlogs() {
  return (
    <div className='my-blogs'>
        <h2>my blogs</h2>
        <div className="my-blogs__grid">
            <Card title="this is my first blog" img={blog1}></Card>
            <Card title="this is my second blog" img={blog2}></Card>
            <Card title="this is my third blog" img={blog3}></Card>
            <Card title="this is my fourth blog" img={blog4}></Card>
            <Card title="this is my fifth blog" img={tech}></Card>
        </div>
    </div>
  )
}

export default MyBlogs