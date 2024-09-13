import React, { useContext } from "react";
import PropTypes from 'prop-types';
import {FaStar,FaLink,FaPlus} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";


 
const Product = ({ product }) => {

   const {addToCart} =useContext(CartContext)

  const { id, image, category, title, description, price, rating } = product;

  return (
    <div className="bg-white ring-1 ring-slate-900/5 rounded-xl group hover:scale-105 transition-all duration-200 shadow-md">
      <div
        className="bg-white flexCenter m-1.5 py-10 rounded-xl
      ring-1 ring-slate-200/20 shadow-sm relative"
      >
        <img
          src={image}
          alt="productImg"
          height={122}
          width={122}
          className="object-contain aspect-square hover:scale-125 transition-all duration-500 "
        />
        <span
          className={
            id === 1 || id === 2 || id === 3
              ? "flex text-xs font-bold bg-[#e3f7fa] p-1 px-2 rounded-full absolute top-3 right-3"
              : "hidden"
          }
        >
          NEW
        </span>
        <span className="flexCenter gap-x-1 text-sm font-bold bg-[#e3f7fa] p-1 px-2 rounded-full absolute top-3 left-3">
          <FaStar className="text-yellow-500" />
          {rating.rate}
        </span>
        <div
          className="absolute -bottom-4 right-3 flexCenter
           flex-col gap-2 bg-white p-1 rounded-full ring-1
           ring-slate-900/5"
        >
          <Link
            to={`/product/${id}`}
            className="hidden group-hover:flex duration-300"
          >
            <FaLink className="bg-secondary text-white h-7 
            w-7 p-1.5 rounded-full cursor-pointer" />
          </Link>
          <FaPlus onClick={()=>addToCart(product, id)} className="bg-secondary text-white h-7 w-7
           p-1.5 rounded-full cursor-pointer" />
        </div>
      </div>
      <div className="p-3">
        <h5 className="medium-14 text-gray-900/50 mb-1">{category}</h5>
        <h4 className="bold-15 mb-1 line-clamp-1">{title}</h4>
        <p className="line-clamp-2">{description}</p>
        <div className="flexBetween my-1">
          <h6 className="bold-16 text-secondary">${price}</h6>
          <p className="text-xs "> sales ({rating.count})</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
