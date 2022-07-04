import React from 'react'
import Star from './images/star.png';
import HalfStar from './images/halfStar2.png';
function Product({title, image, rating, ratingCount, price}) {
    let halfStar = '';
    if(rating - Math.floor(rating) !== 0) {
        halfStar = <img width = '20px' src={HalfStar}/>
        rating = Math.floor(rating);
    }
  return (
    <div className = 'product'>
        <div className= 'title'>{title}</div>
        <img className='productImg' width = '300px' src= {image}/>
        <div className= 'ratingAndCount'> <span className= 'rating'>{Array(rating).fill().map((_,i) => ( <img width = '20px'src= {Star}/> ))} {halfStar}</span> <span className = 'reviewCount'>{ratingCount}</span></div>
        <div className='price'> <span className='moneySymbol'>$</span> <span className= 'moneyAmount'>{price}</span></div>
        <button className='addToCart'>Add To Cart</button>
    </div>
  )
}

export default Product