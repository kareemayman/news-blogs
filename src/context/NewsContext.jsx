import { createContext, useState } from "react"

const GNewsAPIKey = import.meta.env.VITE_GNEWS_API_KEY
let GNewsEndpoint =
  "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=7&apikey=" +
  GNewsAPIKey

export const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
  const [newsEndpoint, setNewsEndpoint] = useState(GNewsEndpoint)
  const [renderBlogs, setRenderBlogs] = useState(true)
  const [createBlog, setCreateBlog] = useState(false)
  const [editingBlog, setEditingBlog] = useState(false)

  return (
    <NewsContext.Provider
      value={{
        newsEndpoint,
        setNewsEndpoint,
        renderBlogs,
        setRenderBlogs,
        createBlog,
        setCreateBlog,
        editingBlog,
        setEditingBlog,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}
