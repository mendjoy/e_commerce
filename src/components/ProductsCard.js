import React from 'react'
//icons
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { VscStarHalf } from 'react-icons/vsc'
import { Link, useNavigate } from 'react-router-dom'

//css
import './ProductsCard.css'

const ProductsCard = ({product}) => {

    const navigate = useNavigate();

    const handleLinkClick = async (event) => {
        event.preventDefault();
        await navigate('/');
        setTimeout(() => {
          navigate(`/product/${product.id}`);
        }, 100);
      };

  return (
    <div className='product-card-container'>
        <div key={product.id} className='product-info'>
            <Link onClick={handleLinkClick}>
                <img src={product.thumbnail} alt={product.title}/>
                <h3>{product.title}</h3>
                <p>R$ {product.price},00</p> 
            </Link>
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