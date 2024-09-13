import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { productContext } from '../Context/ProductContext'

const ProductDetails = () => {

const {id}=useParams()
const {products} =useContext(productContext)
const {addToCart}=useContext(CartContext)


const product = products.find((item)=>{
  return item.id === parseInt(id)
})

if(!product){
  return(
    <section className='h-screen flexCenter'>
     <h3 className='h3'>...Loading</h3>
    </section>
  )
}


// destructure product

const {title,price,description,image} = product

  return (
    <section className='max-padd container py-28 xl:py32'>
      <div>
        <div className='flex flex-col xl:flex-row gap-16'>
          <div className='flex-1 flexCenter'>
            <img src={image} alt="product image " height={255} width={255} 
             className='object-contain aspect-square p-1 hover:scale-150 transition-all duration-200 shadow-md'/>
          </div>
          <div className='flex-1'>
            <h3 className='h3'>{title}</h3>
            <h5 className='bold-24'>${price}</h5>
             <p className='my-8'>{description}</p>
             <button  onClick={()=>addToCart(product,product.id)} className='btn-dark'>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
