import React from 'react'
import data from "../data.json";
import AddtocartBtn from './AddtocartBtn';

const ProductCards = () => {
  return (
    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 justify-items-center mt-10'>
      {
        data.map((item, index) => (
          <div key={index} className='flex flex-col md:w-60 w-full'>
            <div className='relative '>
              <img src={item.image.thumbnail} alt={item.name} className='w-full rounded-lg' />
              <AddtocartBtn product = {item}/>
            </div>

            <span className='mt-8'>
              <p className='text-sm text-rose-500'>{item.category}</p>
              <p className='text-lg text-rose-900 font-medium'>{item.name}</p>
              <p className='text-red text-lg font-medium'>${item.price}</p>
            </span>

          </div>
        ))
      }
    </div>
  )
}

export default ProductCards