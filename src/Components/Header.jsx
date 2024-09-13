// import React,{useContext, useEffect, useState} from "react";
// import { Link, useNavigate} from "react-router-dom";
// import {MdMenu} from "react-icons/md"
// import {MdClose} from "react-icons/md"
// import Navbar from "./Navbar";
// import { GiShoppingBag} from "react-icons/gi"
// import { SidebarContext } from "../Context/SidebarContext";
// import { CartContext } from "../Context/CartContext";
// import itemQuantity from '../Context/CartContext'

// const Header = () => {

//   const [menuOpened,setMenuOpened] = useState(false)
//   const[isActive,setIsActive]=useState(false)

//   const {isOpen,setIsOpen}=useContext(SidebarContext)
//   const {item}=useContext(CartContext)


//   const navigate = useNavigate()

//   const toggleMenu=()=>{
//     setMenuOpened(!menuOpened)
//   }

//   useEffect(()=>{
//     window.addEventListener("scroll",()=>{
//       window.scrollY > 35 ? setIsActive(true) : setIsActive(false)
//     })
//   })


//   return (
//     <header className={`${isActive ? "bg-white shadow-sm py-3" : "bg-transparent py-4"} fixed left-0 right-0 w-full max-padd-container
//     flexBetween z-10 transition-all duration-300`}>
//       {/* logo */}
//       <Link to={"/"} className="bold-24 ">
//         <h4>
//           Glam<span className='text-secondary'>Store</span>
//         </h4>
//       </Link>
//       {/* navbar */}
//       <div className="flexbetween gap-x-20 ">
//         {/* navbar desktop */}
//         <Navbar
//           containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
//         />

//         {/* navbar mobile */}

//         <Navbar containerStyles={` ${menuOpened?'flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 ':'flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]'}`}/>
//         <div className="flexBetween gap-x-3 sm:gap-x-8">
//            {/* buttons */}
//             {!menuOpened ?(
//               <MdMenu  onClick={toggleMenu} className="md:hidden
//               cursor-pointer hover:text-secondary text-2xl"/>
//             ) : (
//               <MdClose onClick={toggleMenu} className="md:hidden
//               cursor-pointer hover:text-secondary text-2xl"/>
//             )}
//             <div onClick={()=>setIsOpen(!isOpen)} className="flex relative">
//             <GiShoppingBag
//             className="text-[25px]"
//             />
//             <span className="bg-secondary text-white text-sm
//             absolute -top-2.5 -right-2.5 flexCenter w-5 h-5
//              rounded-full shadow-md ">
//               {itemQuantity}
//              </span>
//             </div>
//             <button className="btn-outline rounded-full">Login</button>
//         </div>
//       </div>

//     </header>
//   );
// };

// export default Header;


import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import Navbar from "./Navbar";
import { GiShoppingBag } from "react-icons/gi";
import { SidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  // const handleLogin=()=>{
  //   navigate('/LoginPage')
  // }

  const toggleMenu = () => {
    setMenuOpened(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate total quantity of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-sm py-3" : "bg-transparent py-4"
      } fixed left-0 right-0 w-full max-padd-container flexBetween z-10 transition-all duration-300`}
    >
      {/* Logo */}
      <Link to="/" className="bold-24">
        <h4>
          Glam<span className='text-secondary'>Store</span>
        </h4>
      </Link>

      {/* Navbar */}
      <div className="flexBetween gap-x-20">
        {/* Navbar Desktop */}
        <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />

        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5"
              : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 -right-[100%]"
          } transition-all duration-300`}
        />

        <div className="flexBetween gap-x-3 sm:gap-x-8">
          {/* Menu Toggle Buttons */}
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
              aria-label="Open Menu"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
              aria-label="Close Menu"
            />
          )}

          {/* Cart Icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex cursor-pointer"
            aria-label="Shopping Cart"
          >
            <GiShoppingBag className="text-[25px]" />
            <span
              className="bg-secondary text-white text-sm absolute -top-2.5 -right-2.5 flexCenter w-5 h-5 rounded-full shadow-md"
            >
              {totalItems}
            </span>
          </div>

          {/* Login Button */}
          <Link to="/login">
          <button className="btn-outline rounded-full hover:bg-blue-600">Login</button>
          </Link>
          <Link to="/signup">
          <button className="btn-outline rounded-full hover:bg-blue-500">Signup</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
