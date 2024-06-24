

export default function Header() {

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
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}