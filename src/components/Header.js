"use client"

import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header({ userId }) {

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

    const UserButtonApp = {
        elements: {
            userButtonAvatarBox: "w-12 h-12", // Increased size
            userButtonPopoverCard: "bg-base-200 shadow-xl border border-accent/20", // More sophisticated popover
            userButtonPopoverActionButton: "text-accent hover:text-secondary transition-colors", // Added hover effect
        },
    }

    return (
        <div>
                <div className="navbar bg-primary px-8 shadow-lg">
                    <div className="navbar-start">
                        <Link href="/" className="btn btn-accent text-3xl hover:scale-105 transition-transform duration-200 px-2">
                            <Image
                                src="/cinechoiceFavicon.png"
                                alt="CineChoice Logo"
                                width={48}
                                height={48}
                                priority
                            />
                            CineChoice
                        </Link>
                    </div>
                    <div className="navbar-center">
                        <ul className="menu menu-horizontal text-xl gap-6 px-2">
                            <li>
                                <details>
                                    <summary className="bg-accent hover:bg-secondary font-bold rounded-lg transition-colors duration-200 px-6">
                                        Movies
                                    </summary>
                                    <ul className="p-2 z-50 bg-primary rounded-lg shadow-xl border border-accent/20 mt-2">
                                        <li>
                                            <a href="/movies" className="bg-accent hover:bg-secondary mb-2 rounded-md transition-colors">
                                                Popular
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/movies/topRated" className="bg-accent hover:bg-secondary rounded-md transition-colors">
                                                Top Rated
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary className="bg-accent hover:bg-secondary font-bold rounded-lg transition-colors duration-200 px-6">
                                        TV Series
                                    </summary>
                                    <ul className="p-2 z-50 bg-primary rounded-lg shadow-xl border border-accent/20 mt-2">
                                        <li>
                                            <a href="/tv" className="bg-accent hover:bg-secondary mb-2 rounded-md transition-colors">
                                                Popular
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/tv/topRated" className="bg-accent hover:bg-secondary rounded-md transition-colors">
                                                Top Rated
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            {userId ? (
                                <li>
                                    <a href="/watchList" className="bg-accent hover:bg-secondary font-bold rounded-lg transition-colors duration-200 px-6">
                                        Watch List
                                    </a>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {userId ? (
                            <div className="px-8">
                                <UserButton
                                    userProfileMode="navigation"
                                    userProfileUrl={"/userProfile"}
                                    afterSignOutUrl="/"
                                    appearance={UserButtonApp}
                                />
                            </div>
                        ) : (
                            <div className="px-8">
                                <Link 
                                    href={`/signIn`} 
                                    state={userId} 
                                    className="btn btn-accent text-2xl hover:scale-105 transition-transform duration-200"
                                >
                                    Sign In
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
        </div>
    )
}