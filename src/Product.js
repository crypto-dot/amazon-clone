import React from 'react'
import Star from './images/star.png';
import HalfStar from './images/halfStar2.png';
import { useStateValue } from './StateProvider';
function Product({ keyID, key, id, title, image, rating, ratingCount, price }) {
  let halfStar = '';
  if (rating - Math.floor(rating) !== 0) {
    halfStar = <img alt="star rating icon" width='20px' src={HalfStar} />
    rating = Math.floor(rating);
  }

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        keyID: new Date().getTime(),
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  }
  return (
    <div className='product'>
      <div className='title'>{title}</div>
      <img alt={title} className='productImg' width='300px' src={image} />
      <div className='ratingAndCount'> <span className='rating'>{Array(rating).fill().map((_, i) => (<img alt={title} width='20px' src={Star} />))} {halfStar}</span> <span className='reviewCount'>{ratingCount}</span></div>
      <div className='price'> <span className='moneySymbol'>$</span> <span className='moneyAmount'>{price}</span></div>
      <button className='addToCart' onClick={addToBasket}>Add To Cart</button>
    </div>
  )
}

export default Product