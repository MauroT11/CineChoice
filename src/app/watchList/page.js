import { sql } from "@vercel/postgres"
import MovieCards from "@/components/MovieCards"
import TvCards from "@/components/TvCards"
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {

    const APIkey = process.env.NEXT_PRIVATE_ACCESS_TOKEN;
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

    console.log(movieWatchlist, tvwatchlist)

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
            <div role="tablist" className="tabs tabs-lifted px-16 py-8">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl" aria-label="Movies" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <MovieCards movies={movieArr} />
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-2xl"
                    aria-label="TV Series"
                    />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <TvCards Series={tvArr} />
                </div>
            </div>
        
    )
}