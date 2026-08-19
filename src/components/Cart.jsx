import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cart, setconfirm ,removeItem } = useContext(CartContext)
  const totalItem = cart.reduce((total, item) =>
    total + item.quantity
    , 0);

  const totalOrderPrice = cart.reduce((total, item) =>
    total + item.netPrice, 0
  )


  return (
    <section className='md:w-[30%] w-full '>
      <h1 className='lg:text-5xl mb-5 text-3xl font-bold text-red'>Your Cart({totalItem})</h1>
      {cart.length === 0 ? (<div className=' mx-auto flex flex-col items-center pl-10'>
        <img src='/assets/images/illustration-empty-cart.svg' alt='emplty-cart illustration'  />
        <p className='text-base text-rose-500'>Your added items will appear here</p>
      </div>) :
        <div>
          {
            cart.map((item, index) => (
              <div key={index} className='flex items-center justify-between gap-5 border-b  border-gray-300 md:py-4 py-2' >
                <div className='md:mb-5 mb-3 '>
                  <h3 className='md:text-lg text-base font-medium text-rose-900'>{item.name}</h3>
                  <span className='flex gap-3 md:text-base text-sm font-medium'>
                    <p className='text-red '>{item.quantity}x</p>
                    <p className='text-rose-500 opacity-40 '>@ ${item.price}</p>
                    <p className='text-rose-500 opacity-65'>${item.netPrice}</p>
                  </span>
                </div>

                <span onClick={()=> removeItem(item.name)} className='md:w-6 md:h-6 w-4 h-4 flex justify-center items-center rounded-full border-2 border-rose-500 cursor-pointer hover:border-rose-900 focus:border-rose-900'>
                  <img src='/assets/images/icon-remove-item.svg' alt='remove icon' className='md:w-4 md:h-4 w-3 h-3' />
                </span>
              </div>
            ))
          }

          <div className='flex justify-between mt-5'>
            <p className='md:text-lg text-base'>Order Total</p>
            <p className='md:text-2xl text-lg font-bold'>${totalOrderPrice}</p>
          </div>

          <div className='w-full text-center flex justify-center my-10 items-center md:gap-2 gap-0.5 md:text-base text-sm'>
            <img src='/assets/images/icon-carbon-neutral.svg' alt='cabon-neutral icon' className='w-4 h-4' />
            This is a carbon-neutral delivery
          </div>
          <button type='button' onClick={() => setconfirm(true)} className='bg-red-900 py-2.5 text-base hover:bg-red focus:bg-red text-white w-full rounded-full text-center'>
            Confirm Order
          </button>

        </div>}
    </section>
  )
}

export default Cart