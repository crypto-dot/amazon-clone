import React from 'react';
import PictureSlide1 from './images/slidePicture1.jpg';
import PictureSlide2 from './images/slidePicture2.jpg';
import PictureSlide3 from './images/slidePicture3.jpg';
import PictureSlide4 from './images/slidePicture4.jpg';
import TVMount from './images/TVMount.jpg';
import Thermostat from './images/thermostat.jpg';
import Blender from './images/blender.jpg';
import InstaPot from './images/instaPot.jpg';
import ShittyMouse from './images/shittyMouse.jpg';
import HP from './images/HP.jpg';
import AppleAirTag from './images/appleAirTag.jpg';
import Prev from './images/prev.png';
import Next from './images/next.png';
import Product from './Product';
import './Home.css'

function imgCarousel () {
    return (
        <ol className = 'carousel_viewport'>
            <li className="carousel_slide" id="carousel_slide1" tabIndex="0"><div className='carousel_snapper'> </div><img alt="Prime day deals" src = {PictureSlide1}/> <a href="#carousel_slide4" className="prev"><img src= {Prev} alt="" /></a> <a href="#carousel_slide2" className="next"><img src={Next} alt="" /></a> </li>
            <li className="carousel_slide" id="carousel_slide2" tabIndex="0"><div className='carousel_snapper'> </div><img alt = "Fire stick ad"src = {PictureSlide2}/> <a href="#carousel_slide1" className="prev"><img src={Prev} alt="" /> </a><a href="#carousel_slide3" className="next"><img src={Next} alt="" /></a>  </li>
            <li className="carousel_slide" id="carousel_slide3" tabIndex="0"><div className='carousel_snapper'> </div><img alt="Amazon prime day ad" src = {PictureSlide3}/> <a href="#carousel_slide2" className="prev"><img src={Prev} alt="" /> </a> <a href="#carousel_slide4" className="next"><img src={Next} alt="" /></a> </li>
            <li className="carousel_slide" id="carousel_slide4" tabIndex="0"><div className='carousel_snapper'> </div><img alt="The boys TV series ad" src = {PictureSlide4}/> <a href="#carousel_slide3" className="prev"><img src={Prev} alt="" /></a> <a href="#carousel_slide1" className="next"><img src={Next} alt="" /></a> </li>
        </ol>
    )
}

function Home() {
  return (
    <div className='homePage'>
        {imgCarousel()}
        <div className='homeRowContainer'>
        <div id = 'homeRow1'>
        <Product
                keyID = {null}
                key = {123}
                id = {0} 
                title = 'M Series TV Mount'
                image = {TVMount}
                rating = {4}
                ratingCount = {5312}
                price = {69.99}/>              
        <Product 
            keyID = {null}
            key = {212}
            id = {1}
            title = 'Google Nest Learning Thermostat'
            image = {Thermostat}
            rating = {5}
            ratingCount = {12110}
            price = {99.99}/>              
        <Product
            keyID = {null}
            key = {125}
            id = {2}  
            title = 'Ninja BL610 Professional'
            image = {Blender}
            rating = {4.5}
            ratingCount = {12302}
            price = {199.99}/> 
        <Product 
            keyID = {null}
            key= {109}
            id = {3}
            title = 'Apple Air Tag'
            image = {AppleAirTag}
            rating = {4.5}
            ratingCount = {9422}
            price = {29.99}/> 
        </div>
        <div id = 'homeRow2'> 
            <Product 
                keyID = {null}
                key = {993}
                id = {4}
                title = 'Instant Pot Duo 7-in-1 Electric Cooker'
                image = {InstaPot}
                rating = {3.5}
                ratingCount = {3012}
                price = {49.99}/> 
            <Product
                keyID = {new Date().getTime()}
                key = {221}
                id = {5} 
                title = 'HP Pavillon 5'
                image = {HP}
                rating = {4.5}
                ratingCount = {12030}
                price = {599.99}/> 
            <Product
                keyID = {null}
                key = {101}
                id = {6} 
                title = 'BlastCase Black 3-Button 3D USB '
                image = {ShittyMouse}
                rating = {1.5}
                ratingCount = {9921}   
                price = {5.99}/> 
            <Product
                keyID = {null}
                key = {312}
                id = {7} 
                title = 'M Series TV Mount'
                image = {TVMount}
                rating = {5}
                ratingCount = {2130}
                price = {199.99}/> 
    </div>
    </div>
    </div>
  )
}

export default Home