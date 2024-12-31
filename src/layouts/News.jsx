import React from "react"
import tech from "/src/assets/images/blog2.jpg"
import NewsArticle from "../components/NewsArticle"

export default function News() {
  return (
    <>
      <div className="news-highlight">
        <NewsArticle img={tech}></NewsArticle>
      </div>

      <div className="news-grid">
        <NewsArticle img={tech}></NewsArticle>
        <NewsArticle img={tech}></NewsArticle>
        <NewsArticle img={tech}></NewsArticle>
        <NewsArticle img={tech}></NewsArticle>
        <NewsArticle img={tech}></NewsArticle>
        <NewsArticle img={tech}></NewsArticle>
      </div>
    </>
  )
}
