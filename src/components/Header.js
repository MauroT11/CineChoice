import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
  import Link from "next/link";

export default function Header({ username, userId }) {

    const UserButtonApp = {
        elements: {
        userButtonAvatarBox: "w-10 h-10", // Custom width and height
        userButtonPopoverCard: "bg-blue-100", // Custom background for the popover card
        userButtonPopoverActionButton: "text-accent", // Custom text color for action buttons
        },
    }

    return (
        <div className="navbar bg-primary m-2 rounded-2xl max-w-[99%]">
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
                            <a href="/watchList/movies" className="bg-accent hover:bg-secondary font-bold">Watch List</a>
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
    )
}