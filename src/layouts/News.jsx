import React from "react"
import Card from "../components/Card"

import blog2 from "/src/assets/images/blog2.jpg"
import health from "/src/assets/images/health.jpg"
import tech from "/src/assets/images/tech.jpg"
import science from "/src/assets/images/science.jpg"
import world from "/src/assets/images/world.jpg" 
import nation from "/src/assets/images/nation.jpg"

export default function News() {
  return (
    <>
      <div className="news-highlight">
        <Card img={blog2} bookmark={true} title="children know unhealthy foods become abcs"></Card>
      </div>

      <div className="news-grid">
        <Card img={health} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={science} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={world} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={nation} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
      </div>
    </>
  )
}
