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
            <footer className="flex flex-col items-center bg-primary/90 text-accent gap-8 p-8 backdrop-blur-sm shadow-lg border-t border-accent/10">
                <nav className="w-full max-w-5xl mx-auto">
                    <ul className="flex flex-wrap justify-center text-base md:text-lg gap-8 md:gap-12 font-bold">
                        <li>
                            <a href="/legal/terms" className="hover:bg-secondary hover:text-white px-4 py-2 rounded-lg transition-colors">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="/legal/privacy" className="hover:text-white hover:bg-secondary px-4 py-2 rounded-lg transition-colors">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-white hover:bg-secondary px-4 py-2 rounded-lg transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white hover:bg-secondary px-4 py-2 rounded-lg transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <div className="flex justify-center gap-6 mt-6">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:bg-secondary p-2 rounded-lg transition-colors">
                        <AiOutlineLinkedin size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:bg-secondary p-2 rounded-lg transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href="mailto:contact@cinechoice.com" className="hover:text-accent hover:bg-secondary p-2 rounded-lg transition-colors">
                        <MdEmail size={24} />
                    </a>
                </div> */}
                <aside className="text-sm text-accent/70 mt-4">
                    <p className="font-light tracking-wide">Copyright © {new Date().getFullYear()} - All rights reserved by CineChoice Ltd</p>
                </aside>
            </footer>
        </div>
    )
}