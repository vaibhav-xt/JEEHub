'use client'
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import QuizInstruction from './QuizInstruction';

const NavLink = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Physics',
        link: '/physics'
    },
    {
        name: 'Chemistry',
        link: '/chemistry'
    },
    {
        name: 'Math',
        link: '/math'
    }
]

export default function Header() {
    const pathname = usePathname();
    const [displayNav, setDisplayNav] = useState(false);
    const [rulesDisplayFlag, setRulesDisplayFlag] = useState(false)

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
                <QuizInstruction rulesDisplay={rulesDisplayFlag} setRulesDisplay={setRulesDisplayFlag} />
                <div className='layout flex items-center justify-between '>
                    <h1 className='text-3xl'><Link href="/">JEE Hub</Link></h1>

                    {/* Nav Links */}
                    <nav className={`transition-all ease-in-out flex flex-col md:gap-8 md:flex-row absolute left-0 right-0 top-16 w-screen overflow-hidden md:overflow-visible shadow-md md:shadow-none shadow-dark-purple ${displayNav ? 'h-auto p-4 border-t-2' : 'h-0'} bg-dark-purple gap-2 md:relative md:top-0 md:w-auto md:border-none`}>
                        {/* {
                            NavLink.map((route) => (
                                <p key={route.name}>
                                    <Link
                                        href={route.link}
                                        className={`${pathname === route.link ? 'text-light-purple' : ''} relative hover:text-light-purple`}>
                                        {route.name}
                                    </Link>
                                </p>)
                            )
                        } */}

                        <p>
                            <Link
                                href='/'
                                className={`${pathname === '/' ? 'text-light-purple' : ''} hover:text-light-purple`}>
                                Home
                            </Link>
                        </p>
                        <p className='group'>
                            <Link
                                href=""
                                className="group-hover:text-light-purple hover:text-light-purple">
                                Quizzes <i className="group-hover:rotate-180 fa-solid fa-caret-down"></i>
                            </Link>
                            <ul className='relative md:absolute flex overflow-hidden h-0 group-hover:h-auto z-40  bg-white text-dark-purple group-hover:p-4 flex-col gap-1 rounded-xl'>
                                <li className={`px-2 py-1 border-b-2 hover:bg-light-purple ${pathname === "/physics-quiz" ? "bg-light-purple" : "bg-white"} cursor-pointer`} onClick={() => setRulesDisplayFlag(true)}><span >Physics</span></li>
                                <li className={`px-2 py-1 border-b-2 hover:bg-light-purple ${pathname === "/physics-quiz" ? "bg-light-purple" : "bg-white"} cursor-pointer`} onClick={() => setRulesDisplayFlag(true)}><span>Chemistry</span></li>
                                <li className={`px-2 py-1 border-b-2 hover:bg-light-purple ${pathname === "/physics-quiz" ? "bg-light-purple" : "bg-white"} cursor-pointer`} onClick={() => setRulesDisplayFlag(true)}><span>Maths</span></li>
                            </ul>
                        </p>
                    </nav>
                    <div className='flex gap-4 items-center'>
                        <Link
                            className='bg-white w-20 h-8 text-dark-purple flex justify-center items-center font-bold rounded-md shadow-light-purple shadow-md'
                            href="/signup"
                            style={{ background: 'white' }}>
                            Sign Up
                        </Link>
                        <span className='w-6 h-6 flex justify-center items-center md:hidden'>
                            <i className={`fa-solid ${displayNav ? 'fa-xmark' : 'fa-bars'}`} onClick={() => setDisplayNav((prev) => !prev)}></i>
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
}
