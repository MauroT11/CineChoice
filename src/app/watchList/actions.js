"use server"

import { sql } from "@vercel/postgres"
import { currentUser } from "@clerk/nextjs/server";

export async function removeFromMovieWatchlist(movieId) {
    const user = await currentUser();
    if (!user) return;
    await sql`DELETE FROM moviewatchlist WHERE userid = ${user.id} AND movieid = ${movieId}`;
}

export async function removeFromTVWatchlist(tvId) {
    const user = await currentUser();
    if (!user) return;
    await sql`DELETE FROM tvwatchlist WHERE userid = ${user.id} AND tvid = ${tvId}`;
}

export async function getWatchlistData() {
    const user = await currentUser();
    const userID = user.id;
    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    const tvdb = await sql`select * from tvwatchlist where userid = ${userID}`;
    const moviedb = await sql`select * from moviewatchlist where userid = ${userID}`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${APIkey}`
        }
    };

    const movieArr = await Promise.all(
        moviedb.rows.map(movie => 
            fetch(`https://api.themoviedb.org/3/movie/${movie.movieid}?language=en-US`, options)
                .then(res => res.json())
        )
    );

    const tvArr = await Promise.all(
        tvdb.rows.map(tv => 
            fetch(`https://api.themoviedb.org/3/tv/${tv.tvid}?language=en-US`, options)
                .then(res => res.json())
        )
    );

    return { movieArr, tvArr };
}