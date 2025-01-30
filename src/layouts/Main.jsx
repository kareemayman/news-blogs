import React, { useContext } from "react"
import BlogProfile from "../components/BlogProfile"
import kareem from "../assets/images/kareem.jpg"
import Categories from "../components/Categories"
import News from "./News"
import MyBlogs from "./MyBlogs"
import Footer from "./Footer"
import Weather from "../components/Weather"
import Calender from "../components/Calender"
import { NewsContext } from "../context/NewsContext"

export default function Main() {
  const {renderBlogs, setRenderBlogs} = useContext(NewsContext)

  return (
    <main>
      <div className="flex flex-nav">
        <BlogProfile img={kareem} user="Kareem"></BlogProfile>
        <Categories></Categories>
      </div>

      <div className="flex flex-news">
        <News></News>
      </div>

      {renderBlogs && <MyBlogs></MyBlogs>}

      <div className="flex flex-weather-calender">
        <Weather></Weather>
        <Calender></Calender>
      </div>

      <Footer></Footer>
    </main>
  )
}
