import React from 'react'

const Navbar = ({containerStyles}) => {
  return (
    <div>
      <nav className={`${containerStyles}`}>
        <a href="#home" className='active-link'>Home</a>
        <a href="#shop" className='text-secondary'>Shop</a>
        <a href="#contact" className=''>Contact</a>

      </nav>
    </div>
  )
}

export default Navbar
