import React, { useEffect, useRef } from "react"

function NewsArticle({ img }) {

  const imgRef = useRef(null)

  useEffect(() => {
    imgRef.current.style.backgroundImage = `url(${img})`
  }, [img])

  return (
    <div className="news-card">
      <div className="img" ref={imgRef}>
        {/* <img src={img} alt="highlight-img" /> */}
      </div>

      <div className="title">
        <h2 className="bebas-neue-regular">
          children know unhealthy foods become abcs
        </h2>
        <div className="bookmark-icon">
          <i className="fa-regular fa-bookmark"></i>
          <i className="fa-regular fa-bookmark"></i>
        </div>
      </div>
    </div>
  )
}

export default NewsArticle
