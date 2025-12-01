import React from 'react'
import logo from "../assets/logo.svg"
import moon from "../assets/icons/moon.svg"
import shopingCart from "../assets/shopping-cart.svg"
import ring from "../assets/ring.svg"


export default function Header() {
  return (
    <header className=' py-4'>
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
                    <a className='"bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"'>
                        <img src={shopingCart} alt="shoppingcart" />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
