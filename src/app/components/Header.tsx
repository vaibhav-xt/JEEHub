'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import bgImage from '../assets/header-wave.svg';
import Link from 'next/link';

export default function Header() {
    const pathname = usePathname();
    const [displayNav, setDisplayNav] = useState(false);

    useEffect(() => {
        // Function to handle window resize event
        const handleResize = () => {
            setDisplayNav(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className='bg-dark-purple py-4 fixed w-[100%] top-0 z-50 text-white shadow-md shadow-dark-purple'>
                <div className='layout flex items-center justify-between '>
                    <h1 className='text-3xl'><Link href="/">JEE Hub</Link></h1>

                    {/* Nav Links */}
                    <nav className={`transition-all ease-in-out flex flex-col md:gap-8 md:flex-row absolute left-0 right-0 top-16 w-screen overflow-hidden shadow-md md:shadow-none shadow-dark-purple ${displayNav ? 'h-auto p-4 border-t-2' : 'h-0'} bg-dark-purple gap-2 md:relative md:top-0 md:w-auto md:border-none`}>

                        <p>
                            <Link
                                href="/"
                                className={`${pathname === '/' ? 'text-light-purple after:w-full' : ''} relative hover:text-light-purple`}>
                                Home
                            </Link>
                        </p>

                        <p>
                            <Link
                                href="/physics"
                                className={`${pathname === '/physics' ? 'text-light-purple after:w-full' : ''} hover:text-light-purple`}>
                                Physics
                            </Link>
                        </p>

                        <p>
                            <Link
                                href="/chemistry"
                                className={`${pathname === '/chemistry' ? 'text-light-purple after:w-full' : ''} hover:text-light-purple`}>
                                Chemistry
                            </Link>
                        </p>

                        <p>
                            <Link
                                href="/maths"
                                className={`${pathname === '/maths' ? 'text-light-purple after:w-full' : ''} hover:text-light-purple`}>
                                Maths
                            </Link>
                        </p>

                        <p>
                            <Link
                                href="/">
                                About Us
                            </Link>
                        </p>
                    </nav>
                    <div className='flex gap-4 items-center'>
                        <Link
                            className='bg-white w-20 h-8 text-dark-purple flex justify-center items-center font-bold rounded-md shadow-light-purple shadow-md'
                            href="/"
                            style={{ background: 'white' }}>
                            Sign Up
                        </Link>
                        <span className='w-6 h-6 flex justify-center items-center md:hidden'>
                            <i className={`fa-solid ${displayNav ? 'fa-xmark' : 'fa-bars'}`} onClick={() => setDisplayNav((prev) => !prev)}></i>
                        </span>
                    </div>
                </div>
            </header>
            {/* Uncomment the following line if you want to use the Image component */}
            {/* <Image className='w-screen' src={bgImage} alt="bgImage" /> */}
        </>
    );
}
