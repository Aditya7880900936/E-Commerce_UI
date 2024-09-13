import React, { useContext } from 'react'
import { productContext } from '../Context/ProductContext'
import { MdFilter4 } from 'react-icons/md'
import Product from './Product'

const Shop = () => {

  const {products}= useContext(productContext)
  // console.log(products)

  // get only mens and womens category

  const filterProducts=products.filter((item) =>{
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category==='jewelery' || item.category==='electronics'
    )
  })
  console.log(filterProducts)


  return (
     <section id='shop' className='max-padd-container py-20 bg-[#f8f7f4]'>
      {/* title */}
      <h3 className='h3'>Our Products</h3>
      <hr className='h-[2px] md:w-1/2 max-w-96 bg-gradient-to-l 
      from-transparent via-black to-black mb-24
       border-none rounded'/>

       {/* shop container */}
      <div className='grid grid-cols-1 xs:grid-cols-2
      md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {filterProducts.map((product)=>(
            <Product product={product} key={product.id}/>
        ))}
      </div>
     </section>
  )
}

export default Shop
