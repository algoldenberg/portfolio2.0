import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import "../../styles/Skills.css"
import htmlLogo from "../../assets/img/htmlLogo.png"
import cssLogo from "../../assets/img/cssLogo.png"
import jsLogo from "../../assets/img/js.png"
import reactLogo from "../../assets/img/reactLogo.png"
import grphLogo from "../../assets/img/graphic-design.png"
import teamLogo from "../../assets/img/team.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 className='purpleText'>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={reactLogo} alt="Image" />
                                    <h5>React.JS</h5>
                                </div>                               
                                <div className="item">
                                    <img src={htmlLogo} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={cssLogo} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={jsLogo} alt="Image" />
                                    <h5>JS</h5>
                                </div>
                                <div className="item">
                                    <img src={teamLogo} alt="Image" />
                                    <h5>Team Couching</h5>
                                </div>
                                <div className="item">
                                    <img src={grphLogo} alt="Image" />
                                    <h5>Web Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
    }
export default Skills;