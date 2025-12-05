import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import moon from "../assets/icons/moon.svg"
import shopingCart from "../assets/shopping-cart.svg"
import ring from "../assets/ring.svg"
import CartDetails from '../Cine/CartDetails'


export default function Header() {

    const [showCart, setShowCart] = useState(false);

    const handleShowCart =()=>{
        setShowCart(true)
    }

  return (
    <header className=' py-4'>
        {
            showCart && <CartDetails onClose={()=>setShowCart(false)} />
        }

        <nav className='flex justify-between items-center'>
            <a className='"bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"'>
                <img src={logo} alt="logo" />
            </a>
            <ul className='flex justify-center items-center space-x-5'>
                <li>
                    <a className='"bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"'>
                        <img src={ring} alt="ring" />
                    </a>
                </li>
                <li>
                    <a className='"bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"'>
                        <img src={moon} width="25" alt="moon" />
                    </a>
                </li>
                <li>
                    <a onClick={handleShowCart} className='"bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"'>
                        <img src={shopingCart} alt="shoppingcart" />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
