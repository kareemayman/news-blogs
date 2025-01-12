import React from 'react'

export default function NewsModal({ data, img, title }) {
  return (
    <div className="news-modal-box">
        <div className="img">
            <img src={img} alt="article image" />
        </div>

        <h3>{title}</h3>

        <p className="source">Source: <a href={data.source.url}>{data.source.name}</a></p>

        <p className='date'></p>
    </div>
  )
}
