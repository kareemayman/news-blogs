import React from "react"
import BlogProfile from "../components/BlogProfile"
import kareem from "../assets/images/kareem.jpg"
import Categories from "../components/Categories"
import News from "./News"
import MyBlogs from "./MyBlogs"
import Footer from "./Footer"
import Weather from "../components/Weather"
import Calender from "../components/Calender"

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

      <div className="flex flex-weather-calender">
        <Weather></Weather>
        <Calender></Calender>
      </div>

      <Footer></Footer>
    </main>
  )
}
