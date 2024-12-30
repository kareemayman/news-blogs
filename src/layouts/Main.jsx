import React from 'react'
import BlogProfile from '../components/BlogProfile'
import kareem from '../assets/images/kareem.jpg'
import Categories from '../components/Categories'

export default function Main() {
  return (
    <main>

        <div className="flex">
            <BlogProfile img={kareem} user='Kareem'></BlogProfile>
            <Categories></Categories>
        </div>

        <div className="flex">
            <div></div>
            <div></div>
        </div>

        <div></div>

        <div className="flex">
            <div></div>
            <div></div>
        </div>

    </main>
  )
}
