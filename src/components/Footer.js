"use client"

import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import HeaderMobile from "@/components/mediaQueries/mobile/HeaderMobile"
import FooterMobile from "@/components/mediaQueries/mobile/FooterMobile"

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
        <div>
        {isMobile ? (
            <FooterMobile />
        ) : (
            <footer className="footer footer-center bg-primary text-accent px-10 py-6">
                <nav>
                    <ul className="flex text-2xl gap-8 font-bold">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="mailto:mauro.co.uk@hotmail.com">
                            <MdEmail className="h-10 w-10" />
                        </a>
                        <a href="https://github.com/MauroT11/CineChoice">
                            <FaGithub className="h-10 w-10" />
                        </a>
                        <a href="https://www.linkedin.com/in/mauro-trovoada-76852b240/">
                            <AiOutlineLinkedin className="h-10 w-10" />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by CineChoice Ltd</p>
                </aside>
            </footer>
        )       
        } 
        </div>
    )
}