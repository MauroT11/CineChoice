"use client"

import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";


export default function Footer() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 932);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="mt-auto">
            <footer className="footer footer-center bg-primary text-accent p-8 backdrop-blur-sm shadow-lg">
                <nav className="w-full max-w-4xl mx-auto">
                    <ul className="flex flex-wrap justify-center text-lg md:text-xl gap-6 md:gap-8 font-medium">
                        <li><a href="/legal/terms" className="hover:text-secondary transition-colors duration-200">Terms of Use</a></li>
                        <li><a href="/legal/privacy" className="hover:text-secondary transition-colors duration-200">Privacy Policy</a></li>
                        <li><a href="/about" className="hover:text-secondary transition-colors duration-200">About</a></li>
                        <li><a href="/contact" className="hover:text-secondary transition-colors duration-200">Contact</a></li>
                    </ul>
                </nav>
                <aside className="text-sm text-accent/80">
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by CineChoice Ltd</p>
                </aside>
            </footer>
        </div>
    )
}