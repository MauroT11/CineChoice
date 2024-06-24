
import React from 'react';
import { IoHeart } from "react-icons/io5";
import { IoCalendarNumber } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { TbRating18Plus } from "react-icons/tb";
import { Suspense } from "react";

export default async function Page({params}) {

    // console.log(params.id)

    const APIkey = process.env.NEXT_PRIVATE_ACCESS_TOKEN;

    const movieID = params.id

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, options)
    const movie = await response.json()
    console.log(movie)

    return (
        <div className="flex flex-col items-center min-h-full">
            <Suspense fallback={<p>Loading...</p>}>
                <div className="flex flex-col gap-2 items-center my-4">
                    <h1 className="text-5xl font-bold">{movie.title}</h1>
                    <h4 className="text-2xl">{movie.tagline}</h4>
                </div>
                    <div className="grid grid-cols-2 mx-52">
                        <div className="flex flex-col items-center">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="max-h-[600px] rounded-2xl" alt="movie poster" />
                            
                        </div>
                        <div className="flex flex-col gap-4 max-w-[1000px]">
                            <div className="flex justify-center text-2xl gap-8 my-1">
                                <div className="flex items-center gap-2">
                                    <IoHeart />
                                    <p>{movie.vote_average.toFixed(1)}/10</p>
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
                            <div className="flex justify-center text-accent text-2xl gap-8 my-1">
                                {movie.genres.map((genre) => (
                                    <a href={`/movies/genre/${genre.id}`} key={genre.id} className="hover:text-secondary">{genre.name}</a>
                                ))}
                            </div>
                            <div>
                            <div className=" flex gap-2 text-2xl mb-4">
                                    <p >Spoken Language:</p>
                                    <ul className="flex gap-2">
                                        {movie.spoken_languages.map((lang) => (
                                            <li key={lang.name} className="font-bold">{lang.english_name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-2xl font-bold">Movie Overview:</p>
                                <p className="text-2xl">{movie.overview}</p>
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
            </Suspense>
        
        </div>
    )
}