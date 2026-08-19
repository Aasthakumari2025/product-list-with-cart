import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const OrderConfermed = () => {
  const { confirm, cart ,setCart ,setconfirm } = useContext(CartContext);

  
  const totalOrderPrice = cart.reduce((total, item) =>
    total + item.netPrice, 0
  )
  return (
    <div className={` ${confirm === true ? "fixed md:inset-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent" : "hidden"} z-10  `}>
      <div className='p-8 rounded-3xl  bg-white '>
        <img src='/assets/images/icon-order-confirmed.svg' alt='oreder confirmed icon' className='w-12 h-12 mb-10' />
        <h1 className='font-bold text-black text-5xl  mb-2'>Order Confirmed!</h1>
        <p className='mb-10 md:text-xl text-lg text-rose-500 opacity-80'>We hope you enjiy your food!</p>
        <div className='my-6'>
          {cart.map((item, index) => (
            <div key={index} className='border-b border-gray-300 py-5 flex justify-between items-center'>
              <div className='flex gap-3'>
                <img src={item.image.thumbnail} alt={item.name} className='md:w-15 w-10' />
                <div>
                  <p className='md:text-lg text-base font-medium text-rose-900'>{item.name}</p>
                  <p className='md:text-lg text-base text-red font-medium gap-4 flex'>
                    {item.quantity}x
                    <span className='md:text-lg text-base text-rose-500 opacity-60'>@ ${item.price}</span>
                  </p>
                </div>
              </div>

              <p className='md:text-2xl text-lg font-medium text-rose-900'>${item.netPrice}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-between mt-5'>
          <p className='text-lg'>Order Total</p>
          <p className='text-2xl font-bold'>${totalOrderPrice}</p>
        </div>
        <button type='button' onClick={() =>{setCart([]);setconfirm(false)}} className='bg-red py-2.5 text-base mt-15 text-white w-full rounded-full text-center'>
          Start New Order
        </button>

      </div>

    </div>
  )
}

export default OrderConfermed