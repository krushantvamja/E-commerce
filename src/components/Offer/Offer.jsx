import React from 'react'
import './Offer.css';
import exclusive_image from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offer'>
        
        <div className="offer-left">
            <h2>Exclusive</h2>
            <h1>Offers For You </h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button >Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offer