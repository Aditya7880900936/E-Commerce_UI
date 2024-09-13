// import React from "react";
// import { Link } from "react-router-dom";

// const CartItem = ({ item }) => {
//   const { id, title, image, quantity, price } = item;

//   return (
//     <div className="flex items-center border-b py-4">
//       {/* Image */}
//       <Link to={`/product/${id}`}>
//         <img
//           src={image}
//           alt={title}
//           className="w-20 h-20 object-cover rounded-md"
//         />
//       </Link>

//       {/* Details */}
//       <div className="ml-4 flex-1">
//         <Link to={`/product/${id}`} className="text-lg font-semibold text-blue-600 hover:underline">
//           {title}
//         </Link>
//         <p className="text-gray-600">Quantity: {quantity}</p>
//         <p className="text-gray-800 font-bold">${price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, quantity, price } = item;
  const {removeFromCart,increaseQuantity,decreaseQuantity}=useContext(CartContext)

  return (
    <div className="flex gap-x-3">
      {/* image */}
      <Link
        to={"/product/${id}"}
        className="flexCenter flex-1 m-1 *:py-1 rounded-xl ring-1 ring-slate-900/5 h-[74px]"
      >
        <img
          src={image}
          alt=""
          height={55}
          width={55}
          className="object-contain aspect-square p-1 "
        />
      </Link>
      <div className="flex flex-[4] flex-col gap-y-2 mr-3">
        <div className="flex justify-between gap-8 items-baseline">
          <div className="medium-14 uppercase line-clamp-2">{title}</div>
          <div onClick={()=>removeFromCart(id)} className="cursor-pointer text-gray-50 ">
            <MdClose />
          </div>
        </div>
        <div className="flexBetween ">
          <div className="flexBetween gap-4 ring-1 ring-slate-900/5 px-2">
            <FaMinus onClick={()=>decreaseQuantity(id)} className="cursor-pointer" />
            <span>{quantity}</span>
            <FaPlus onClick={()=> increaseQuantity(id)} className="cursor-pointer" />
          </div>
          <p>${price}</p>
          <div className="medium-15">{`${parseFloat(price * quantity).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
