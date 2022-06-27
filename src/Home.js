import React from 'react';
import PictureSlide1 from './images/slidePicture1.jpg';
import PictureSlide2 from './images/slidePicture2.jpg';
import PictureSlide3 from './images/slidePicture3.jpg';
import PictureSlide4 from './images/slidePicture4.jpg';
import Prev from './images/prev.png';
import Next from './images/next.png';
import './Home.css'

(function showSlides () {
    let slideIndex = 1;



})();
function imgCarousel () {
    return (
        <ol className = 'carousel_viewport'>
            <li className="carousel_slide" id="carousel_slide1" tabIndex="0"><div className='carousel_snapper'> </div><img src = {PictureSlide1}/> <a href="#carousel_slide4" className="prev"><img src= {Prev} alt="" /></a> <a href="#carousel_slide2" className="next"><img src={Next} alt="" /></a> </li>
            <li className="carousel_slide" id="carousel_slide2" tabIndex="0"><div className='carousel_snapper'> </div><img src = {PictureSlide2}/> <a href="#carousel_slide1" className="prev"><img src={Prev} alt="" /> </a><a href="#carousel_slide3" className="next"><img src={Next} alt="" /></a>  </li>
            <li className="carousel_slide" id="carousel_slide3" tabIndex="0"><div className='carousel_snapper'> </div><img src = {PictureSlide3}/> <a href="#carousel_slide2" className="prev"><img src={Prev} alt="" /> </a> <a href="#carousel_slide4" className="next"><img src={Next} alt="" /></a> </li>
            <li className="carousel_slide" id="carousel_slide4" tabIndex="0"><div className='carousel_snapper'> </div><img src = {PictureSlide4}/> <a href="#carousel_slide3" className="prev"><img src={Prev} alt="" /></a> <a href="#carousel_slide1" className="next"><img src={Next} alt="" /></a> </li>
        </ol>
    )
}

function Home() {
  return (
    <div className='homePage'>
        {imgCarousel()}
    </div>
  )
}

export default Home