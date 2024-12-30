import React from 'react'
import BlogProfile from '../components/BlogProfile'
import kareem from '../assets/images/kareem.jpg'

export default function Main() {
  return (
    <main>

        <div className="flex">
            <BlogProfile img={kareem} user='Kareem'></BlogProfile>
            <div></div>
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
