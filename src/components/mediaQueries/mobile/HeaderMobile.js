"use client"

import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function HeaderMobile({userId, UserButtonApp}) {

    return(
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-primary text-accent w-full">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </label>
                </div>
                <div className="mx-2 flex-1 px-2 font-bold text-center text-3xl"><a href="/">CineChoice</a></div>
                <div className="hidden flex-none lg:block">
                    <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <li><a>Navbar Item 1</a></li>
                    <li><a>Navbar Item 2</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-primary text-accent min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li className="text-3xl font-bold">Movies</li>
                <li className="text-2xl"><a href="/movies">Popular</a></li>
                <li className="text-2xl"><a href="/movies/topRated">Top Rated</a></li>
                <li className="text-3xl font-bold">TV Series</li>
                <li className="text-2xl"><a href="/tv">Popular</a></li>
                <li className="text-2xl"><a href="/tv/topRated">Top Rated</a></li>
                
                {userId ? (
                    <div>
                    <li className="text-3xl font-bold">Account</li>
                        <li className="text-2xl"><a href="/watchList">Watchlist</a></li>
                        <li><a><UserButton
                            userProfileMode="navigation"
                            userProfileUrl={"/userProfile"}
                            afterSignOutUrl="/"
                            appearance={UserButtonApp}
                            />
                            </a>
                        </li>
                        
                    </div>
                    
                ) : (
                    <li className="text-2xl font-bold"><a href={`/signIn`} state={userId}>Sign In</a></li>
                )}
                
                </ul>
            </div>
        </div>
    )
}