
import React from 'react';
import { IoHeart } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { IoRadioSharp } from "react-icons/io5";
import { TbRating18Plus } from "react-icons/tb";
import { Suspense } from "react";
import { sql } from "@vercel/postgres"
import { currentUser } from "@clerk/nextjs/server";

export default async function Page({params}) {

    const APIkey = process.env.NEXT_PRIVATE_ACCESS_TOKEN;
    const tvID = params.id
    const user = await currentUser();
    const userID = user.id

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

    const response = await fetch(`https://api.themoviedb.org/3/tv/${tvID}?language=en-US`, options)
    const movie = await response.json()
    console.log(movie)

    async function handleWatchList() {
        "use server"

        await sql`INSERT INTO tvwatchlist (userid, tvid) values (${userID}, ${tvID})`
    }

    return (
        <div className="flex flex-col items-center min-h-full">
            <Suspense fallback={<p>Loading...</p>}>
                <div className="flex flex-col gap-2 items-center my-4">
            <h1 className="text-5xl font-bold">{movie.name}</h1>
            <h4 className="text-2xl">{movie.tagline}</h4>
        </div>
            <div className="grid grid-cols-2 gap mx-44">
                <div className="flex flex-col gap-4 items-center">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="max-h-[600px] rounded-2xl" alt="movie poster" />
                    <form action={handleWatchList}>
                        <button className="btn btn-accent hover:btn-secondary text-2xl">Add to Watch List</button>
                    </form>
                </div>
                <div className="flex flex-col gap-4 max-w-[2000px]">
                    <div className="flex justify-center text-2xl gap-6 my-1">
                        <div className="flex items-center gap-2">
                            <IoHeart />
                            <p>{movie.vote_average.toFixed(1)}/10</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ImBooks />
                            <p>{movie.number_of_seasons}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p>Status: {movie.status}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoRadioSharp />
                            <p>{movie.first_air_date}</p>
                        </div>
                        <div className="flex items-center gap-2 text-5xl">
                            {movie.adult ? (
                                <TbRating18Plus />
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center text-accent text-2xl gap-8">
                        {movie.genres.map((genre) => (
                            <a href={`/tv/genre/${genre.id}`} key={genre.id} className="hover:text-secondary">{genre.name}</a>
                        ))}
                    </div>
                    <div>
                        <div className="flex gap-2 text-2xl mb-4">
                            <p >Spoken Language:</p>
                            <ul className="flex gap-2">
                                {movie.spoken_languages.map((lang) => (
                                    <li key={lang.name} className="font-bold">{lang.english_name}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-2xl font-bold">TV Serie Overview:</p>
                        <p className="text-2xl">{movie.overview}</p>
                    </div>
                    {movie.homepage=='' ? (
                        null
                    ) : (
                        <a href={`${movie.homepage}`} target="_blank" className="text-center text-accent text-2xl hover:text-secondary">TV Series Official Page</a>
                    )}
                    
                    {movie.belongs_to_collection ? (
                        <div className="flex flex-col items-center">
                            <a href={`/movieCollection/${movie.belongs_to_collection.id}`} target="_blank" className="text-center text-accent text-2xl hover:text-secondary">{movie.belongs_to_collection.name}</a>
                            <img src={`https://image.tmdb.org/t/p/original${movie.belongs_to_collection.poster_path}`} className="max-w-[200px] rounded-2xl" alt="movie poster" />
                        </div>
                    ) : (
                        null
                    )}
                    
                    
                </div>
            </div>
            </Suspense>
        
        </div>
    )
}