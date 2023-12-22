import Image from 'next/image'
import React from 'react'
import upper from '@/app/assets/upperOverlay.svg'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            {/* Footer Section */}
            <Image src={upper} alt="background overlay" className="w-full" />
            <footer className="bg-dark-purple pb-10">
                <div className="layout text-white flex flex-wrap gap-16 justify-start">

                    <div className="sm:w-1/3">
                        <h5 className="text-2xl font-bold pb-4">About Us</h5>
                        <p>At Jee QuizHub, we are passionate about
                            revolutionizing your JEE Main & Advanced preparation.
                            Our mission is to provide a dynamic and interactive platform
                            where aspiring students can hone their skills,
                            master key concepts, and compete with peers.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">Subjects</h3>
                        <p className="font-extralight hover:text-light-purple"><Link href="/physics">Physics</Link></p>
                        <p className="font-extralight hover:text-light-purple"><Link href="/chemistry">Chemistry</Link></p>
                        <p className="font-extralight hover:text-light-purple"><Link href="/Maths">Maths</Link></p>
                        <p className="text-2xl font-normal pb-4 hover:text-light-purple"><Link href="/">Progress <i className="fa-solid fa-up-right-from-square text-[15px]"></i></Link></p>
                    </div>

                    <div>

                        <p className="text-2xl font-bold pb-2">Follow Us</p>
                        <p className="flex gap-2 text-2xl">
                            <Link href="/" className="hover:text-light-purple"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link href="/" className="hover:text-light-purple"><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link href="/" className="hover:text-light-purple"><i className="fa-brands fa-instagram"></i></Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
