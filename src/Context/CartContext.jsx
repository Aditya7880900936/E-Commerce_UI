import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const[itemQuantity,setItemQuantity ] = useState(0)
  const [total,setTotal]=useState(0)

  useEffect(()=>{
    const total = cart.reduce((accumulator,currentItem )=>{
        return accumulator+currentItem.price * currentItem.quantity
    },0)
    setTotal(total)
  })

  // update item Quantity 

  useEffect(()=>{
    if(cart){
        const quantity = cart.reduce((accumulator,currentItem)=>{
            return accumulator + currentItem.quantity;
        },0)
       setItemQuantity(quantity)
    }
  })

  //add to cart function 

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    const cartItemIndex = cart.findIndex(item => item.id === id);

    if (cartItemIndex !== -1) {
      // If the item is already in the cart, increment its quantity
      const updatedCart = cart.map((item, index) =>
        index === cartItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it
      setCart([...cart, newItem]);
    }
  };

  // remove to cart function

  const removeFromCart=(id)=>{
    const newCart=cart.filter((item)=>{
        return item.id !== id;
        })
  }

  // clear cart

  const clearCart=()=>{
    setCart([])
  }

  // increase quantity

  const increaseQuantity =(id)=>{
     const cartItem = cart.find((item)=> item.id === id)
     addToCart(cartItem , id)
  }

  // decrease quantity

  const decreaseQuantity=(id)=>{
     const cartItem = cart.find((item)=>{
        return item.id===id
     })
     if(cartItem){
        const newCart = cart.map((item)=>{
            if(item.id===id){
                return{...item,quantity:cartItem.quantity -1}
            }else{
                return item
            }
        })
        setCart(newCart)
     }
     if(cartItem.quantity<2){
        removeFromCart(id)
     }
     
  }

  return (
    <CartContext.Provider value={{ addToCart, cart , removeFromCart,increaseQuantity,decreaseQuantity,clearCart,itemQuantity,total}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
