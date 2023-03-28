import React from 'react';
import "../../styles/StudentMobile.css"
import aimGame from "../../assets/img/aimGame.png"
import drag from "../../assets/img/dragGropDesk.png"
import aspectRatio from "../../assets/img/aspectRatio.png"
import photoSlider from "../../assets/img/photoSlider.png"
import colorDesk from "../../assets/img/colorDesk.png"
import Parrot from "../../assets/img/colorTheParrot.png"
import Drum from "../../assets/img/drumKit.png"
import Postcards from "../../assets/img/postCards.png"

const StudentMobile = () => {
    return(
        <div className='studentMobile'>
            <h1 className='warning1'>Most  of my student works are not adapted for screens other than 16:9</h1>
            <h1 className='warning2'>In order to fully appreciate my work,better watch them on PC</h1>
            <div className="projects">
                <div className='DrumKit'>
                <a href="https://drum-kit-student-project.netlify.app/" target="_blank" className="whiteText"><h1>&#10094;Drum Kit&#10095;</h1></a>
                    <div className='logo'>
                        <div className="circle">
                            <img className='logo1' src={Drum} alt="" />
                        </div>
                    </div>
                </div>
                <div className='Color The Parrot'>
                <a href="https://color-the-parrot-student-project.netlify.app/" target="_blank" className="whiteText"><h1>&#10094;Color The Parrot&#10095;</h1></a>
                    <div className='logo'>
                        <div className="circle">
                            <img className='logo1' src={Parrot} alt="" />
                        </div>
                    </div>
                </div>
                <div className='Aspect Ratio'>
                <a href="https://aspect-ratio-student-project.netlify.app/" target="_blank" className="whiteText"><h1>&#10094;Aspect Ratio&#10095;</h1></a>
                    <div className='logo'>
                        <div className="circle">
                            <img className='logo1' src={aspectRatio} alt="" />
                        </div>
                    </div>
                </div>
                <div className='Postcards'>
                <a href="https://postcards-student-project.netlify.app/" target="_blank" className="whiteText"><h1>&#10094;Postcards&#10095;</h1></a>
                    <div className='logo'>
                        <div className="circle">
                            <img className='logo1' src={Postcards} alt="" />
                        </div>
                    </div>
                </div>
                <div className='Drag&Drop Desk'>
                <a href="https://drag-and-prod-desk-student-project.netlify.app/" target="_blank" className="whiteText"><h1>&#10094;Drag&Drop Desk&#10095;</h1></a>
                    <div className='logo'>
                        <div className="circle">
                            <img className='logo1' src={drag} alt="" />
                        </div>
                    </div>
                </div>
                <div className='Photo Slider'>
                <a href="https://slider-student-project.netlify.app/" target="_blank" className="whiteText"><h1>&#10094;Photo Slider&#10095;</h1></a>
                    <div className='logo'>
                        <div className="circle">
                            <img className='logo1' src={photoSlider} alt="" />
                        </div>
                    </div>
                </div>
                <div className='Aim Game'>
                <a href="https://aim-training-student-project.netlify.app/" target="_blank" className="whiteText"><h1>&#10094;Aim Game&#10095;</h1></a>
                    <div className='logo'>
                        <div className="circle">
                            <img className='logo1' src={aimGame} alt="" />
                        </div>
                    </div>
                </div>
                <div className='Color Desk'>
                <a href="https://color-desk-student-project.netlify.app/" target="_blank" className="whiteText"><h1>&#10094;Color Desk&#10095;</h1></a>
                    <div className='logo'>
                        <div className="circle">
                            <img className='logo1' src={colorDesk} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentMobile;