'use client';
import { useAppContext } from '@/app/context/AppContext';
import useWindowDimensions from '@/app/hooks/useWindowDemensions';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import hotlineIcon from '../../assets/icons/ic_hotline.svg';
import logo from '../../assets/images/logo.png';
import BurgerButton from '../atoms/BurgerButton';
import Button from '../atoms/Button';
import HeaderMenuItem from '../atoms/HeaderMenuItem';
import useHeaderHeight from '@/app/hooks/useHeaderHeight';

const headerMenu = [
    {
        url: '/',
        title: 'Home',
    },
    {
        url: '/chat-ai',
        title: 'Chat AI',
    },
    {
        url: '/case-studies',
        title: 'Case Studies',
    },
    {
        url: '/about',
        title: 'About Us',
    },
    {
        url: '/contact',
        title: 'Contact',
    }
]

const Header: React.FC = () => {
    const { openMenu, setOpenMenu } = useAppContext();
    const { width } = useWindowDimensions();
    const [scrollY, setScrollY] = useState(0);
    const [fixedMenu, setFixedMenu] = useState(false);
    const headerHeight = useHeaderHeight();

    const burgerMenuState = width < 1024 ? openMenu ? 'transform translate-x-0' : 'transform translate-x-full' : undefined;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 30) {
                setFixedMenu(true);
            } else {
                setFixedMenu(false);
            }
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <header className={`o-header ${fixedMenu ? 'bg-floral-white' : 'bg-floral-white lg:bg-transparent'} fixed top-0 left-0 w-full z-50`}>
            <div className="container mx-auto">
                <div className="wrapper flex items-center py-3 justify-center lg:justify-between">
                    {/* Burger menu  */}
                    <BurgerButton isOpen={openMenu} onClick={setOpenMenu} />
                    {/* Left side */}
                    <div className="left flex items-center">
                        {/* Logo  */}
                        <div className="logo max-w-[90px] lg:max-w-full">
                            <Link href='/'>
                                <Image src={logo} alt="logo" width={115} height={46} />
                            </Link>
                        </div>
                        {/* Menu  */}
                        <ul
                            className={`menu${burgerMenuState ? ` ${burgerMenuState}` : ''} lg:flex lg:items-center lg:gap-2 lg:pl-10 p-4 lg:p-0 xl:gap-3 xl:pl-16 fixed lg:static left-0 w-full h-full bg-white lg:bg-transparent z-50 transition-base-style`}
                            style={{
                                top: `${headerHeight}px`
                            }}
                        >
                            {
                                headerMenu.map((item, index) => (
                                    <li className='lg:mb-0 mb-2.5' key={index}>
                                        <HeaderMenuItem {...item} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Right side  */}
                    {/* Contact  */}
                    <div className="right hidden lg:flex items-center">
                        <div className="contact">
                            <div className="hotline flex items-center">
                                <Image src={hotlineIcon} alt='hotline' width={18} height={18} className='mr-1' />
                                <p className='text-lg'>
                                    Hotline:
                                    {' '}
                                    <a href="tel:0123456789" className="font-bold text-usafa-blue">
                                        0123456789
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="button xl:ml-[50px] ml-7">
                            <Button>
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;