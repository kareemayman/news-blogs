import React, { createContext, useContext, useEffect } from "react"
import { NewsContext } from "../context/NewsContext"

const GNewsAPIKey = import.meta.env.VITE_GNEWS_API_KEY

export default function Categories() {
  const { newsEndpoint, setNewsEndpoint } = useContext(NewsContext)

  return (
    <div className="categories">
      <h2>Categories</h2>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        General
      </span>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=world&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=world&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        World
      </span>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        business
      </span>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        technology
      </span>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=entertainment&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=entertainment&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        entertainment
      </span>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        sports
      </span>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=science&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=science&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        science
      </span>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        health
      </span>
      <span
        className={
          newsEndpoint ===
          "https://gnews.io/api/v4/top-headlines?category=nation&lang=en&country=us&max=7&apikey=" +
            GNewsAPIKey
            ? "category--active"
            : ""
        }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=nation&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        nation
      </span>
      <span
        // className={
        //   newsEndpoint ===
        //   "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=7&apikey=" +
        //     GNewsAPIKey
        //     ? "category--active"
        //     : ""
        // }
        onClick={() =>
          setNewsEndpoint(
            "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=7&apikey=" +
              GNewsAPIKey
          )
        }
      >
        bookmarks
        <i className="fa-solid fa-bookmark"></i>
        <i className="fa-solid fa-bookmark"></i>
      </span>
    </div>
  )
}
