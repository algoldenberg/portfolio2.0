import React from 'react';
import "../../styles/Student.css"


const StudentProjects = () => {
const slides = document.querySelectorAll('.slide')
const point = document.querySelectorAll('.point')


for (const [i, slide] of slides.entries()) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
       slide.classList.add('active')
       point.forEach((point) => {
        point.classList.remove('none')
       })
       point[i].classList.add('none')
    })
}




function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}


    return (
        
        <div className='blockOne'>
            <div className='slide'>
                <span className="point">Drum Kit</span>
                <p> <a href="https://drum-kit-student-project.netlify.app/" target="_blank" className="whiteText">&#10094;Drum Kit&#10095;</a>
                <span className="projectText">Mission:   Make the audio file to make sounds on click on the keyboard keys (one listener)and on mouse click on the buttons in the page (one more listener)</span>
                </p>
            </div>
            <div className='slide'>
                <span className="point">Color The Parrot</span>
                <p> <a href="https://color-the-parrot-student-project.netlify.app/" target="_blank" className="whiteText">&#10094;Color The Parrot&#10095;</a> <br/>
                <span className="projectText">Mission:   Each button should change the color of 
                    the respective parrot part</span>
                </p>
            </div>
            <div className='slide'>
                <span className="point">Aspect Ratio</span>
                <p> <a href="https://aspect-ratio-student-project.netlify.app/" target="_blank" className="whiteText">&#10094;Aspect Ratio&#10095;</a> <br/>
                <span className="projectText">Mission:   Make aspect ratio calculator</span>
                </p>
            </div>
            <div className='slide'>
                <span className="point">Postcards</span>
                <p> <a href="https://postcards-student-project.netlify.app/" target="_blank" className="whiteText">&#10094;Postcards&#10095;</a> <br/>
                <span className="projectText">Mission:   Create animated Postcards, when 1 card is opened, other should be minimized</span>
                </p>
            </div>
            <div className='slide'>
                <span className="point">Drag&Drop Desk</span>
                <p> <a href="https://drag-and-prod-desk-student-project.netlify.app/" target="_blank" className="whiteText">&#10094;Grag&Drop Desk&#10095;</a> <br/>
                <span className="projectText">Mission:  Using Drag & Drop functions make a project desk with text windows</span>
                </p>
            </div>
            <div className='slide'>
                <span className="point">Photo Slider</span>
                <p> <a href="https://slider-student-project.netlify.app/" target="_blank" className="whiteText">&#10094;Photo Slider&#10095;</a> <br/>
                <span className="projectText">Mission:   Make reverse Photo & Text slider with 5 or more blocks</span>
                </p>
            </div>
            <div className='slide'>
                <span className="point">Aim Game</span>
                <p> <a href="https://aim-training-student-project.netlify.app/" target="_blank" className="whiteText">&#10094;Aim Game&#10095;</a> <br/>
                <span className="projectText">Mission:   Make a game in which when you click on an element, it will read how many times you clicked on the element with 4 timers and changing color on click</span>
                </p>
            </div>
            <div className='slide'>
                <span className="point">Color Desk</span>
                <p> <a href="https://color-desk-student-project.netlify.app/" target="_blank" className="whiteText">&#10094;Color Desk&#10095;</a> <br/>
                <span className="projectText">Mission:   Create a board,which elements will be highlited with different colors when hovered</span>
                </p>
            </div>
        </div>
     );
}
 
export default StudentProjects;