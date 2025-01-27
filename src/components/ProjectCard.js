import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , projlink , code}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
        <div className="bttn"> 
            <a href={projlink} target="_blank">
              <button className="xz">Project Link</button>
            </a>
            <a href={code} target="_blank">
              <button className="xz">Code For Project</button>
            </a>
        </div>
    </Col>
  )
}
