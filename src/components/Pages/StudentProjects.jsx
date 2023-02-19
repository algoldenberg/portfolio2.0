import React from 'react';
import "../../styles/Student.css"


const StudentProjects = () => {
const slides = document.querySelectorAll('.slide')
const point = document.querySelectorAll('.point')
const a = document.querySelectorAll('.projectText')


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
            <div className='slide'><span className="point">Drum Kit</span>
                <p> <a href="./StudentWorks/drumKit/index.html" target="_blank" class="whiteText">&#10094;Drum Kit&#10095;</a> <br/><br/><br/><span class="projectText">Mission:   Make the audio file to make sounds 
                    on click on the keyboard keys (one listener)
                    and on mouse click on the buttons in the page 
                    (one more listener)</span></p>
            </div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
        </div>
     );
}
 
export default StudentProjects;