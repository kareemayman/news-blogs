import React from "react"
import { format } from "date-fns"

export default function NewsModal({ data, img, title }) {
    
  const formattedDate = format(
    new Date(data.publishedAt),
    "MMM dd, yyyy, hh:mm a"
  )

  return (
    <div className="news-modal-box">
      <div className="img">
        <img src={img} alt="article image" />
      </div>

      <h3>{title}</h3>

      <p className="source">
        Source: <a href={data.source.url}>{data.source.name}</a>
      </p>

      <p className="date">{formattedDate}</p>

      <p className="description">{data.description}</p>

      <div className="read-more">
        <a href={data.url}>READ MORE</a>
      </div>
    </div>
  )
}
