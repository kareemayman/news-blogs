import React from "react"
import BlogProfile from "../components/BlogProfile"
import kareem from "../assets/images/kareem.jpg"
import Categories from "../components/Categories"
import News from "./News"
import MyBlogs from "./MyBlogs"
import Footer from "./Footer"

export default function Main() {
  return (
    <main>
      <div className="flex flex-nav">
        <BlogProfile img={kareem} user="Kareem"></BlogProfile>
        <Categories></Categories>
      </div>

      <div className="flex flex-news">
        <News></News>
      </div>

      <MyBlogs></MyBlogs>

      <div className="flex">
        <div></div>
        <div></div>
      </div>
      
      <Footer></Footer>
    </main>
  )
}
