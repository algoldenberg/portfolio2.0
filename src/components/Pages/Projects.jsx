import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../../assets/img/LeadLogo.png";
import projImg2 from "../../assets/img/KAM_Logo.png";
import projImg3 from "../../assets/img/Ozon_LP_Logo.png";
import TrackVisibility from 'react-on-screen';
import "../../styles/Projects.css"
import StudentProjects from './StudentProjects';


const Projects = () => {
    return ( 
        <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Work Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Student Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h2>OZON</h2>
                    <p>In Ozon I worked as a T&D automatization manager. My responsibilities included designing (planning) landing pages of training courses for the specialists of the company. You can see the examples of the pages by following the links below. They were created by my team according to the technical tasks issued by me.</p>
                      <Row>
                        <div className="projectRow">
                          <a href="#" target={'_blank'}><img className="projectImg" src={projImg1}></img></a>
                          <a href="#" target={'_blank'}><img className="projectImg" src={projImg2}></img></a>
                          <a href="#" target={'_blank'}><img className="projectImg" src={projImg3}></img></a>
                        </div>
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>❮Click on card to learn more❯</p>
                    <p>❮Click on <span class="whiteText">&#10094;project name&#10095;
                    </span> to open link❯</p>
                      <StudentProjects/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
     );
}
 
export default Projects;