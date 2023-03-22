import React from 'react'
//icons
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { VscStarHalf } from 'react-icons/vsc'

//css
import './ProductsCard.css'

const ProductsCard = ({product}) => {
  return (
    <div className='product-card-container'>
        <div key={product.id} className='product-info'>
            <img src={product.thumbnail} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>R$ {product.price},00</p> 

            <div className='icons'>
                <div className='rating'>
                    <VscStarHalf size={23} color='#eca400'/>{product.rating}
                </div>
                <div className='button-container'>
                    <button>
                        <FiHeart size={23} color='#2B2B2B'/>
                    </button>

                    <button>
                        <FiShoppingCart size={23} color='#2B2B2B'/>
                    </button>
              </div>  
            </div>
      </div>
    </div>
  )
}

export default ProductsCard