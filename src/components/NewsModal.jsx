import React, { useEffect } from "react"
import { format } from "date-fns"

export default function NewsModal({
  data,
  img,
  title,
  cardModalVisible,
  changeCardModalVisible,
  isBlog,
  description
}) {
  // Adding Event For Clicks When NewsModal Is Visible
  useEffect(() => {
    function clickEventListener(e) {
      if (cardModalVisible) {
        if (e.target.matches(".news-modal-box .img")) {
          changeCardModalVisible(false)
        }
      }
    }

    document.addEventListener("click", clickEventListener)

    return () => {
      document.removeEventListener("click", clickEventListener)
    }
  }, [])

  let formattedDate = ""
  if (!isBlog) {
    formattedDate = format(new Date(data.publishedAt), "MMM dd, yyyy, hh:mm a")
  }

  return (
    <div className="news-modal-box">
      <div className="img">
        <div className="img-wrapper">
          <img src={img} alt="article image" />
        </div>
      </div>

      <h3>{title}</h3>

      {!isBlog ? (
        <>
          <p className="source comfortaa">
            Source:{" "}
            <a href={data.source.url} target="_blank">
              {data.source.name}
            </a>
          </p>

          <p className="date comfortaa">{formattedDate}</p>

          <p className="description">{data.description}</p>

          <div className="read-more">
            <a href={data.url} target="_blank">
              READ MORE
            </a>
          </div>
        </>
      ) : (
        <p className="description blog-description comfortaa">
          {description}
        </p>
      )}
    </div>
  )
}
