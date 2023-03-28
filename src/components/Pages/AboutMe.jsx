import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/Photo_4.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import CV from "../../assets/CV_Web_Goldenberg.pdf"
import "../../styles/AboutMe.css"

const AboutMe = () => {
    const [text] = useState('');


    let TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    
    TxtRotate.prototype.tick = function() {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
      let that = this;
      let delta = 200 - Math.random() * 100;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function() {
        that.tick();
      }, delta);
    };
    
    window.onload = function() {
      let elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-rotate');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
  
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
  
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div>
                  <span className="tagline">Welcome to my Portfolio!</span>
                  <h1>Hello! I'm <span className="purpleText">Alex Goldenberg</span><br/> <span className="txt-rotate" dataPeriod="200" data-rotate='[ " Frontend Developer"]'><span className="wrap">{text}</span></span></h1>
                    <p>Originally from Russia, I have been working in the automation of personnel training systems for several years. <br/>
                        Currently I’m studying on a Masa Web developement programm. You can check out my projects below.
                        If you like my works, feel free to contact me by any link listed below. <br/> Also, you can <a href={CV} download><span className="purpleText">❮download❯</span></a> my CV
                    </p>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
                  <div >
                    <img src={headerImg} alt="Header Img"/>
                  </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
export default AboutMe;