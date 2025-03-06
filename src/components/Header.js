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

export default function Header({ userId }) {
    const UserButtonApp = {
        elements: {
            userButtonAvatarBox: "w-12 h-12",
            userButtonPopoverCard: "bg-base-200/95 backdrop-blur-sm shadow-2xl border border-accent/10 rounded-xl",
            userButtonPopoverActionButton: "text-accent hover:text-secondary transition-all hover:translate-x-1",
        },
    }

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-primary/95 backdrop-blur-sm px-4 md:px-8 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-primary/95 backdrop-blur-sm rounded-box w-52 gap-2">
                            <li>
                                <a href="/movies" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all">Popular Movies</a>
                            </li>
                            <li>
                                <a href="/movies/topRated" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all">Top Rated Movies</a>
                            </li>
                            <li>
                                <a href="/tv" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all">Popular TV</a>
                            </li>
                            <li>
                                <a href="/tv/topRated" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all">Top Rated TV</a>
                            </li>
                            {userId && (
                                <li>
                                    <a href="/watchList" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all">Watch List</a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-2xl md:text-3xl hover:scale-105 transition-all duration-300 px-2 gap-2">
                        <Image
                            src="/cinechoiceFavicon.png"
                            alt="CineChoice Logo"
                            width={48}
                            height={48}
                            className="hover:rotate-6 transition-transform duration-300"
                            priority
                        />
                        <span className="text-accent font-bold">CineChoice</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg gap-6 px-2">
                        <li>
                            <details>
                                <summary className="bg-accent/90 hover:bg-secondary font-semibold rounded-xl transition-all duration-300 px-6 hover:shadow-lg">
                                    Movies
                                </summary>
                                <ul className="p-3 z-50 bg-primary/95 backdrop-blur-sm rounded-xl shadow-2xl border border-accent/10 mt-2 gap-1">
                                    <li>
                                        <a href="/movies" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all hover:translate-x-1">
                                            Popular
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/movies/topRated" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all hover:translate-x-1">
                                            Top Rated
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="bg-accent/90 hover:bg-secondary font-semibold rounded-xl transition-all duration-300 px-6 hover:shadow-lg">
                                    TV Series
                                </summary>
                                <ul className="p-3 z-50 bg-primary/95 backdrop-blur-sm rounded-xl shadow-2xl border border-accent/10 mt-2 gap-1">
                                    <li>
                                        <a href="/tv" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all hover:translate-x-1">
                                            Popular
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tv/topRated" className="bg-accent/90 hover:bg-secondary rounded-lg transition-all hover:translate-x-1">
                                            Top Rated
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        {userId ? (
                            <li>
                                <a href="/watchList" className="bg-accent/90 hover:bg-secondary font-semibold rounded-xl transition-all duration-300 px-6 hover:shadow-lg">
                                    Watch List
                                </a>
                            </li>
                        ) : null}
                    </ul>
                </div>
                <div className="navbar-end">
                    {userId ? (
                        <div className="px-2 md:px-8">
                            <UserButton
                                userProfileMode="navigation"
                                userProfileUrl={"/userProfile"}
                                afterSignOutUrl="/"
                                appearance={UserButtonApp}
                            />
                        </div>
                    ) : (
                        <div className="px-2 md:px-8">
                            <Link 
                                href={`/signIn`} 
                                state={userId} 
                                className="btn btn-accent hover:btn-secondary text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
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