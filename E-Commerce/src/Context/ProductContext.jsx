// import React, { createContext, useEffect, useState } from 'react'

// export const productContext= createContext()

// const ProductProvider = ({children}) => {

//   const [products,setProducts] = useState([])

//   // fetch products 
   
//   useEffect(()=>{
//     const fetchProducts = async()=>{
//         const response = await fetch('https://fakestoreapi.com/products/1')
//         const data = await response.json()
//         console.log(data)
//         setProducts(data) 
//     }
//     fetchProducts()
//   },[])

//   return (
//    <productContext.Provider value={{products}}>
//     {children}
//    </productContext.Provider>
//   )
// }

// export default ProductProvider


import React, { createContext, useEffect, useState } from 'react';

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Fetch all products
        const data = await response.json();
        console.log("Fetched products:", data); // Debugging
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
