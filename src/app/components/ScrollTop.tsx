'use client'
import { useEffect, useState } from "react";

export default function ScrollTop() {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        // checking position
        if (window.scrollY > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        // scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        showButton && (
            <div
                className="transition-all fixed bg-dark-purple text-white w-10 h-10 z-40 bottom-10 right-10 flex justify-center items-center rounded-md border-2 cursor-pointer hover:bg-white hover:text-dark-purple active:scale-90"
                onClick={scrollToTop}
            >
                <i className="fa-solid fa-angles-up"></i>
            </div>
        )
    );
}
