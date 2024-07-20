"use client"
import React from 'react';
import { IoHeart } from "react-icons/io5";
import { IoCalendarNumber } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { TbRating18Plus } from "react-icons/tb";
import { Suspense } from "react";
import { sql } from "@vercel/postgres"
import { currentUser } from "@clerk/nextjs/server";

export default function MovieInfoMobile({movie, movieID, userID}) {

    async function handleWatchList() {
        await sql`INSERT INTO moviewatchlist (userid, movieid) values (${userID}, ${movieID})`
    }

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div>
                <div className="flex flex-col gap-4 text-center items-center my-4">
                    <h1 className="text-5xl font-bold">{movie.title}</h1>
                    <h4 className="text-2xl">{movie.tagline}</h4>
                </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-8 items-center">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="max-h-[600px] rounded-2xl" alt="movie poster" />
                            <form action={handleWatchList}>
                                <button className="btn btn-accent hover:btn-secondary text-2xl">Add to Watch List</button>
                            </form>
                        </div>
                        <div className="flex flex-col gap-4 my-4">
                            <div className="flex flex-col items-center text-2xl gap-8 my-1">
                                <div className="flex items-center gap-2">
                                    <IoHeart />
                                    <p>{movie.vote_average?.toFixed(1)}/10</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IoCalendarNumber />
                                    <p>{movie.release_date}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IoTime />
                                    <p>{movie.runtime}mins</p>
                                </div>
                                <div className="flex items-center gap-2 text-5xl">
                                    {movie.adult ? (
                                        <TbRating18Plus />
                                    ) : (
                                        null
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-accent text-2xl font-bold gap-4">
                                {movie.genres?.map((genre) => (
                                    <a href={`/movies/genre/${genre.id}`} key={genre.id} className="hover:text-secondary">{genre.name}</a>
                                ))}
                            </div>
                            <div className="px-2">
                            <div className="flex flex-col gap-2 text-2xl mb-4">
                                    <p className="font-bold" >Spoken Language:</p>
                                    <ul className="flex gap-2">
                                        {movie.spoken_languages?.map((lang) => (
                                            <li key={lang.name}>{lang.english_name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-2xl text-center font-bold">Movie Overview:</p>
                                <p className="text-lg px-2">{movie.overview}</p>
                            </div>
                            {movie.homepage=='' ? (
                                null
                            ) : (
                                <a href={`${movie.homepage}`} target="_blank" className="text-center text-accent text-2xl hover:text-secondary">Movie Home page</a>
                            )}
                            
                            {movie.belongs_to_collection ? (
                                <div className="flex flex-col items-center">
                                    <a href={`/movies/collection/${movie.belongs_to_collection.id}`} className="text-center text-accent text-2xl hover:text-secondary">{movie.belongs_to_collection.name}</a>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.belongs_to_collection.poster_path}`} className="max-w-[200px] rounded-2xl" alt="movie poster" />
                                </div>
                            ) : (
                                null
                            )}
                            
                            
                        </div>
                    </div>
                    </div>
                </Suspense>
    )
}