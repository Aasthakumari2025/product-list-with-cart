import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';

const AddtocartBtn = ({ product }) => {

  const { setqty, qty, addToCart, increment, decrement, cart } = useContext(CartContext);

  const CartItem = cart.find((item) => item.name === product.name)
  const isInCart = !!CartItem
  return (
    <div className={`rounded-full   h-10 cursor-pointer min-w-40 border absolute md:left-5 sm:left-12 left-2 hover:border-red hover:text-red  z-2  -bottom-3 font-medium border-rose-500 text-rose-900 text-base ${isInCart ? "bg-red" : "bg-rose-50"}`}>

      {!isInCart ?
        (<span onClick={() => { setqty(1); addToCart(product) }} className='whitespace-nowrap  md:text-lg text-sm flex justify-center h-full items-center gap-2'><img src='/assets/images/icon-add-to-cart.svg' alt='cart' className='w-4 h-4' />
          Add to Cart</span>)
        : (
          <div className='flex h-full items-center justify-between text-white w-full px-2'>
            <span onClick={() => {
              decrement(product.name);
              
            }

            } className='rounded-full flex justify-center w-4 h-4 items-center border border-white'>
              <img src='/assets/images/icon-decrement-quantity.svg' alt='decrement-icon' className='w-2 h-2' />
            </span>
            {CartItem?.quantity}
            <span onClick={() => increment(product.name)} className='rounded-full flex justify-center w-4 h-4 items-center border border-white'>
              <img src='/assets/images/icon-increment-quantity.svg' alt='increment-icon' className='w-2 h-2' />
            </span>
          </div>)}

    </div>
  )
}

export default AddtocartBtn