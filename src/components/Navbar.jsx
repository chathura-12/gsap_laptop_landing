import React, { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants';
import '../styles/Navbar.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const containerRef = useRef(null)
    const navRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false)

    const isDesktop = useMediaQuery({query: '(min-width:769px)'})

    useEffect(() => {
        if(isDesktop){
            setIsOpen(true)
        }
        setIsOpen(isDesktop)
    },[isDesktop])

    useGSAP(() => {
        gsap.to(navRef.current, {
            clipPath:isOpen
                    ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: .2,
            ease: 'power2.inOut'
        })
    }, {dependencies: [isOpen], scope: containerRef})
  return (
    <header>
        <nav ref={containerRef} id='navbar' className='layout-wrapper'>
            <div className="nav-logo">
                <img src="/logo.svg" alt="" />
            </div>
            <div onClick={() => setIsOpen(true)} className="hamburger-menu">
                <div className='line' />
                <div className='line' />
            </div>
            <ul className='nav-list' ref={navRef}>
                <div onClick={() => setIsOpen(false)} className="close-menu">
                    <div className="line"/>
                    <div className="line"/>
                </div>
                {navLinks.map((label) => (
                    <li className='nav-link' key={label.label}>
                        <a href={label.label}>{label.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
