import { sql } from "@vercel/postgres"
import WatchlistMovieCard from "@/components/WatchlistMovieCard"
import WatchlistTVCard from "@/components/WatchlistTVCard"
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {

    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const user = await currentUser();
    const userID = user.id
    let movieWatchlist = [];
    let tvwatchlist = [];
    let movieArr = [];
    let tvArr = [];
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
    };

    const tvdb = (await sql`select * from tvwatchlist where userid = ${userID}`)
    const moviedb = (await sql`select * from moviewatchlist where userid = ${userID}`)

    // console.log(moviedb.rows, tvdb.rows)

    for(let i = 0; i < moviedb.rowCount; i++){
        movieWatchlist[i] = moviedb.rows[i]
    }

    for(let i = 0; i < tvdb.rowCount; i++){
        tvwatchlist[i] = tvdb.rows[i]
    }

    // console.log(movieWatchlist, tvwatchlist)

    for(let i = 0; i < movieWatchlist.length; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieWatchlist[i].movieid}?language=en-US`, options)
        const movie = await response.json()
        movieArr[i] = movie;
    }

    for(let i = 0; i < tvwatchlist.length; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvwatchlist[i].tvid}?language=en-US`, options)
        const tv = await response.json()
        tvArr[i] = tv;
    }

    // console.log(movieArr, tvArr)
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent py-2">
                    My Watchlist
                </h1>
            </div>
            <div role="tablist" className="tabs tabs-lifted w-full">
                <input 
                    type="radio" 
                    name="my_tabs_2" 
                    role="tab" 
                    className="tab tab-lg font-semibold hover:text-primary transition-colors" 
                    aria-label="Movies" 
                    defaultChecked 
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8 shadow-lg">
                    <WatchlistMovieCard movies={movieArr} />
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab tab-lg font-semibold hover:text-primary transition-colors"
                    aria-label="TV Series"
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8 shadow-lg">
                    <WatchlistTVCard Series={tvArr} />
                </div>
            </div>
        </div>
    )
}