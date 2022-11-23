import React, { useState } from "react";
import logo from '../assets/images/logo.png'

// https://tailwindcomponents.com/component/centered-hero-header


const Header = () => {
    const logoImg = {
        height: `87px`,
        marginTop: `-14px`
    }
    const [color, setColor ] = useState(false)

    const changeColornav = () => {
        if(window.scrollY > 87){
            setColor(true)
        }else 
            setColor(false)        
    }

    window.addEventListener('scroll', changeColornav)

    return (

        <nav id="nav" className={`fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white  ${color ? " bg-slate-500/50" :"transition duration-75  bg-transparent"}`}>

            <div className="p-4">
                <div class="font-extrabold tracking-widest text-xl"><img style={logoImg} src={logo} alt="logimg" /></div>
            </div>

            <div class="p-4 hidden md:flex flex-row justify-between font-bold items-center">
                <a id="hide-after-click" href="#about" class="mx-4 text-lg font-neue transition duration-100 hover:scale-105 ">Gorditos</a>
                <a href="#rodopadillasection" class="scroll-smooth hover:scroll-auto mx-4 text-lg font-neue transition duration-100 hover:scale-105">Rodo Padilla</a>
                <a href="#roadmap" class="mx-4 text-lg font-neue transition duration-100 hover:scale-105">Roadmap</a>
                <a href="#team" class="mx-4 text-lg font-neue transition duration-100 hover:scale-105">Team</a>
                <a href="#faq" class="mx-4 text-lg font-neue transition duration-100 hover:scale-105">FAQ</a>
                <a href="#compra" class="mx-4 text-lg font-neue transition duration-100 hover:scale-105">Compra tu gordito</a>
            </div>

        </nav>
    )

}

export default Header;


