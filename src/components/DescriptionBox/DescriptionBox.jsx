import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online market platform that facilitates buying and selling of products or services over the internet as a virtual marketplace where business and individual showcase their product </p>
            <p>
                E-commerce websites typically display products or services as detailed descriptions images, prices, and any available variations (eg. sizes,color)
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox