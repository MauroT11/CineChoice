"use client"

import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMobile from "@/components/mediaQueries/mobile/HeaderMobile"

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
        userButtonAvatarBox: "w-10 h-10", // Custom width and height
        userButtonPopoverCard: "bg-blue-100", // Custom background for the popover card
        userButtonPopoverActionButton: "text-accent", // Custom text color for action buttons
        },
    }

    // if (isMobile) {
    //     return <HeaderMobile userId={userId} UserButtonApp={UserButtonApp} />
    // }

    return (
        <div>
        {isMobile ? (
            <HeaderMobile userId={userId} UserButtonApp={UserButtonApp} />
        ) : (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <a className="btn btn-accent text-3xl" href="/">CineChoice</a>
            </div>
            <div className="navbar-center gap-4">
                {/* <div className="form-control">
                    <input type="text" placeholder="Search..." className="input input-bordered input-accent w-24 md:w-auto" />
                </div> */}
                <ul className="menu menu-horizontal text-2xl gap-4 px-2">
                    <li>
                    <details>
                            <summary className="bg-accent hover:bg-secondary font-bold">Movies</summary>
                            <ul className="p-2 z-50 bg-primary rounded-t-none">
                                <li><a href="/movies" className="bg-accent hover:bg-secondary mb-2">Popular</a></li>
                                <li><a href="/movies/topRated" className="bg-accent hover:bg-secondary">Top Rated</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="bg-accent hover:bg-secondary font-bold">TV Series</summary>
                            <ul className="p-2 z-50 bg-primary rounded-t-none">
                                <li><a href="/tv" className="bg-accent hover:bg-secondary mb-2">Popular</a></li>
                                <li><a href="/tv/topRated" className="bg-accent hover:bg-secondary">Top Rated</a></li>
                            </ul>
                        </details>
                    </li>
                    {userId ? (
                        <li>
                            <a href="/watchList" className="bg-accent hover:bg-secondary font-bold">Watch List</a>
                        </li>
                    ) : (
                        null
                    )}
                    <li>

                    </li>
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
                        <Link href={`/signIn`} state={userId} className="text-accent text-3xl">Sign In</Link>
                    </div>
                )}
            </div>
        </div>
    )}
        </div>
    )
}