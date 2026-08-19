import React, { useState, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [qty, setqty] = useState(0);
    const [confirm, setconfirm] = useState(false)


    function addToCart(product) {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) =>
                item.name === product.name
            );

            if (existingProduct) {
                return prevCart.map((item) => {
                  return  item.name === product.name ?
                        { ...item, quantity: item.quantity + 1 ,netPrice : (item.quantity +1) * item.price} :
                        item
                }
                )
            }

            return [
                ...prevCart, {
                    ...product,
                    quantity: 1,
                    netPrice : product.price,
                },
            ]
        })
    }

    function increment(name){
     setCart((prevItem) => {
       return prevItem.map ((item) => {
           return item.name === name ?
            {...item , quantity : item.quantity+1 ,
                netPrice: (item.quantity + 1) * item.price
            } :
            item;
        })
     })
    }

    function removeItem(name) {
        setCart((prev) => prev.filter((item) =>
        item.name != name))
    }

    function decrement (name){
        setCart((prevCart) => {
           return prevCart.map((item) =>{
               return item.name === name ?
                {...item , quantity : item.quantity-1 ,
                    netPrice: (item.quantity - 1) * item.price
                }:
                item
            }).filter((item) => item.quantity >0)
        })
    }

    return (
        <CartContext.Provider
            value={{
                confirm,setconfirm,
                cart, setCart,
                addToCart,
                qty, setqty,
               increment,
               decrement,
              removeItem
            }}>
            {children}
        </CartContext.Provider>
    )
}

