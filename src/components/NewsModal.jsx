import React, { useEffect } from "react"
import { format } from "date-fns"

export default function NewsModal({
  data,
  img,
  title,
  cardModalVisible,
  changeCardModalVisible,
  isBlog,
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
        <img src={img} alt="article image" />
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum consequuntur ipsa beatae harum quasi. Soluta voluptatibus perferendis nemo qui doloribus. Necessitatibus iusto corporis voluptatibus eius. In officia debitis doloremque, natus eligendi, sequi sunt perferendis consectetur commodi aliquam perspiciatis maiores velit corrupti ullam nulla? Aperiam perspiciatis vel ipsum quibusdam dolorem recusandae, explicabo quo quidem? Expedita corrupti reiciendis obcaecati fugit enim culpa ipsam accusamus, beatae quam optio, quidem, architecto a reprehenderit inventore id maiores ex deleniti minus incidunt at recusandae. Nesciunt quis eligendi similique aut dolores provident tenetur reiciendis nulla exercitationem, cum saepe sequi eveniet eaque maiores dolorum dolore perspiciatis! Amet laudantium perferendis dicta accusantium inventore architecto tempore vitae provident vel placeat doloremque, accusamus reiciendis eveniet dolorem corrupti assumenda impedit tenetur illo ex rerum nostrum harum fugit! Sed, suscipit eum praesentium, iste voluptate quaerat quasi assumenda tenetur voluptatum debitis, ducimus cupiditate. Reiciendis quaerat officia maxime numquam placeat quasi perspiciatis, voluptate necessitatibus quia. Quis, id iure. Mollitia magni consectetur officiis. Quidem, ipsa, unde aut qui corporis tenetur ratione sapiente maiores in, asperiores vel perferendis commodi sunt dolore exercitationem provident officia. Ullam veniam, sunt minus nihil temporibus illum aliquid, odit aspernatur adipisci officia facere molestiae repudiandae porro accusamus consequuntur possimus totam iure consequatur quos!
        </p>
      )}
    </div>
  )
}
