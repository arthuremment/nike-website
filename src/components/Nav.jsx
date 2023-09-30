import { headerLogo } from '../assets/images';
import { hamburger, close } from '../assets/icons';
import { navLinks } from '../constants';
import React from 'react';

const Nav = () => {

    const [showMenu, setShowMenu] = React.useState(false)

    function toggleMenu() {
        setShowMenu(prevShowMenu => !prevShowMenu);  
    }

    return (
        <header className='padding-x py-8 absolute z-10 w-full' id='headee'>
            <nav className={`flex ${showMenu ? "flex-col items-center justify-center bg-slate-gray rounded transition scale-110" : "min-lg:hidden justify-between items-center max-container"}`}>
                <a href="#">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className={`flex flex-1 justify-center items-center ${showMenu ? "flex flex-col items-center" : "gap-16 max-lg:hidden"}`}>
                    {navLinks.map((item) => (
                        <li
                            key={item.label}
                        >
                            <a
                                href={item.href}
                                className={`font-montserrat leading-normal text-lg ${showMenu ? "text-white hover:text-coral-red" : "text-slate-gray hover:text-coral-red ease-in-out"}`}
                            >
                                {item.label}
                            </a> 
                        </li>
                    ))}
                </ul>
                <div onClick={toggleMenu}>
                   { showMenu ?
                        <img
                            src={close}
                            alt="close"
                            height={25}
                            width={25}
                            className='hidden max-lg:block hover:cursor-pointer absolute top-2 right-[15px]'
                        />   : 
                        <img
                            src={hamburger}
                            alt="Hamburger"
                            height={25}
                            width={25}
                            className='hidden max-lg:block hover:cursor-pointer'
                        />
                    }
                </div>
            </nav>
        </header>

    )
}

export default Nav