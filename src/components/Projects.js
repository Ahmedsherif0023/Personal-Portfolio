import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Todo List App",
      description: "Planning Tasks",
      imgUrl: projImg1,
      projlink:"https://todo-list-79d85.web.app/",
      code:"https://github.com/Ahmedsherif0023/Todo-List.git",
    },
    {
      title: "Weather App",
      description: "Checking the weather all over the world",
      imgUrl: projImg2,
      projlink:"https://weather-app-d7c99.web.app/",
      code:"https://github.com/Ahmedsherif0023/weather-app.git",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      projlink:"",
      code:"",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      projlink:"",
      code:"",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      projlink:"",
      code:"",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      projlink:"",
      code:"",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have built modern, responsive, and user-friendly web applications using React.js, Next.js, Tailwind CSS, and TypeScript. My projects focus on performance, accessibility, and delivering seamless user experiences.<br></br>
                Here are some of my projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Coming Soon</p>
                        </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Coming Soon</p>                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
