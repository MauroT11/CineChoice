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
            <footer className="footer footer-center bg-primary/95 text-accent p-10 backdrop-blur-md shadow-xl border-t border-accent/10">
                <nav className="w-full max-w-5xl mx-auto">
                    <ul className="flex flex-wrap justify-center font text-base md:text-lg gap-8 md:gap-12 font-medium">
                        <li>
                            <a href="/legal/terms" className="hover:text-secondary hover:scale-105 transition-all duration-300 ease-in-out">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="/legal/privacy" className="hover:text-secondary hover:scale-105 transition-all duration-300 ease-in-out">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-secondary hover:scale-105 transition-all duration-300 ease-in-out">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-secondary hover:scale-105 transition-all duration-300 ease-in-out">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center gap-6 mt-6">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                        <AiOutlineLinkedin size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="mailto:contact@cinechoice.com" className="hover:text-secondary transition-colors duration-300">
                        <MdEmail size={24} />
                    </a>
                </div>
                <aside className="text-sm text-accent/70 mt-4">
                    <p className="font-light tracking-wide">Copyright © {new Date().getFullYear()} - All rights reserved by CineChoice Ltd</p>
                </aside>
            </footer>
        </div>
    )
}