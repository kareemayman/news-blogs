import React from "react"
import tech from "/src/assets/images/blog2.jpg"
import Card from "../components/Card"

export default function News() {
  return (
    <>
      <div className="news-highlight">
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
      </div>

      <div className="news-grid">
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
        <Card img={tech} bookmark={true} title="children know unhealthy foods become abcs"></Card>
      </div>
    </>
  )
}
