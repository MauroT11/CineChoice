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
            userButtonPopoverCard: "bg-white/95 backdrop-blur-sm shadow-2xl border border-gray-200 rounded-xl",
            userButtonPopoverActionButton: "text-accent hover:text-accent hover:bg-secondary transition-all hover:translate-x-1",
        },
    }

    return (
        <div className="sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-8 py-4 bg-primary/90 backdrop-blur-sm shadow-lg">
                <div className="flex gap-8 items-center">
                    <div className="relative lg:hidden group">
                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        {/* Invisible gap filler */}
                        <div className="absolute h-4 w-full top-full left-0"></div>
                        <div className="absolute top-[calc(100%+1rem)] left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-blue-100 py-2 hidden group-hover:block">
                            <a href="/movies" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Popular Movies</a>
                            <a href="/movies/topRated" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Top Rated Movies</a>
                            <a href="/tv" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Popular TV</a>
                            <a href="/tv/topRated" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Top Rated TV</a>
                            {userId && (
                                <a href="/watchList" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Watch List</a>
                            )}
                        </div>
                    </div>
                    <Link href="/" className="flex items-center space-x-2 text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity">
                        <Image
                            src="/cinechoiceFavicon.png"
                            alt="CineChoice Logo"
                            width={48}
                            height={48}
                            className="transform hover:rotate-6 transition-transform duration-300"
                            priority
                        />
                        <span className="text-accent">CineChoice</span>
                    </Link>
                </div>

                <div className="hidden lg:flex items-center space-x-8">
                    <div className="relative group">
                        <button className="px-4 py-2 text-accent font-bold hover:text-accent hover:bg-secondary rounded-lg transition-colors">
                            Movies
                        </button>
                        {/* Invisible gap filler */}
                        <div className="absolute h-4 w-full top-full left-0"></div>
                        <div className="absolute hidden group-hover:block w-48 top-[calc(100%+1rem)] left-0 bg-white rounded-lg shadow-xl border border-blue-100 py-2">
                            <a href="/movies" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Popular</a>
                            <a href="/movies/topRated" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Top Rated</a>
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="px-4 py-2 text-accent font-bold hover:text-accent hover:bg-secondary rounded-lg transition-colors">
                            TV Series
                        </button>
                        {/* Invisible gap filler */}
                        <div className="absolute h-4 w-full top-full left-0"></div>
                        <div className="absolute hidden group-hover:block w-48 top-[calc(100%+1rem)] left-0 bg-white rounded-lg shadow-xl border border-blue-100 py-2">
                            <a href="/tv" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Popular</a>
                            <a href="/tv/topRated" className="block px-4 py-2 text-accent hover:bg-secondary hover:text-accent transition-colors">Top Rated</a>
                        </div>
                    </div>

                    {userId && (
                        <a href="/watchList" className="px-4 py-2 text-accent font-bold hover:text-accent rounded-lg hover:bg-secondary transition-colors">
                            Watch List
                        </a>
                    )}
                </div>

                <div className="flex items-center">
                    {userId ? (
                        <div className="px-2 md:px-4">
                            <UserButton
                                userProfileMode="navigation"
                                userProfileUrl={"/userProfile"}
                                afterSignOutUrl="/"
                                appearance={UserButtonApp}
                            />
                        </div>
                    ) : (
                        <div className="px-2 md:px-4">
                            <Link 
                                href={`/signIn`} 
                                state={userId} 
                                className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-secondary hover:text-accent transition-colors text-lg font-medium shadow-md hover:shadow-lg"
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