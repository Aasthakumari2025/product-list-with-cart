import React, { useContext } from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import OrderConfermed from './components/OrderConfermed'
import { CartContext, CartProvider } from './context/CartContext'

const AppContent = () => {
  const { confirm } = useContext(CartContext)

  return (
    <div className={`relative min-h-screen w-full ${confirm ? "bg-rose-100" : "bg-white"}`}>

      <main className='lg:w-[85%] w-full lg:px-0 px-5 lg:py-20  py-10 mx-auto flex md:flex-row flex-col gap-10 justify-between'>
        <Products />
        <Cart />
      </main>

      <OrderConfermed />

    </div>
  )
}

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App