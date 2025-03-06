import React, { Suspense } from 'react';
import Image from 'next/image';
import { IoHeart } from "react-icons/io5";
import { IoCalendarNumber } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { TbRating18Plus } from "react-icons/tb";
import { sql } from "@vercel/postgres"
import { currentUser } from "@clerk/nextjs/server";
import Loading from './loading';
import Link from 'next/link';

async function fetchMovie(movieID) {
    
    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${APIkey}`
        }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, options);
    return response.json();
}

export default async function Page({params}) {
    let movie;
    const user = await currentUser();

    try {
        movie = await fetchMovie(params.id);
        if (!movie || movie.success === false) {
            throw new Error('Movie not found');
        }
    } catch (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h2 className="text-2xl font-bold text-error">Error loading movie</h2>
                <p className="text-base-content/80">Please try again later</p>
            </div>
        );
    }

    async function handleWatchList() {
        "use server"
        const user = await currentUser();
        if (!user) return;
        await sql`INSERT INTO moviewatchlist (userid, movieid) values (${user.id}, ${params.id})`
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className="flex flex-col items-center min-h-screen py-12 px-4 bg-gradient-to-b from-base-200 to-base-100">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col gap-4 items-center mb-8">
                        <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent py-2">{movie.title}</h1>
                        <h4 className="text-xl md:text-2xl text-center text-base-content/80 italic">{movie.tagline}</h4>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                        <div className="flex flex-col gap-6 items-center">
                            <div className="relative group">
                                <Image 
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    width={400}
                                    height={600}
                                    className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                                    alt="movie poster"
                                    priority
                                />
                            </div>
                            {user ? (
                                <form action={handleWatchList} className="w-full max-w-md">
                                    <button className="btn btn-accent hover:btn-secondary w-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                                        Add to Watch List
                                    </button>
                                </form>
                            ) : (
                                <Link href="/signIn" className="w-full max-w-md">
                                    <button className="btn btn-accent hover:btn-secondary w-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                                        Sign in to Add to Watch List
                                    </button>
                                </Link>
                            )}
                        </div>
                        <div className="flex flex-col gap-6 p-4 lg:p-6">
                            <div className="flex flex-wrap justify-center text-xl gap-6 my-1">
                                <div className="flex items-center gap-2 bg-base-200 p-3 rounded-xl shadow-md">
                                    <IoHeart className="text-accent" />
                                    <p>{movie.vote_average?.toFixed(1)}/10</p>
                                </div>
                                <div className="flex items-center gap-2 bg-base-200 p-3 rounded-xl shadow-md">
                                    <IoCalendarNumber className="text-accent" />
                                    <p>{movie.release_date}</p>
                                </div>
                                <div className="flex items-center gap-2 bg-base-200 p-3 rounded-xl shadow-md">
                                    <IoTime className="text-accent" />
                                    <p>{movie.runtime}mins</p>
                                </div>
                                {movie.adult && (
                                    <div className="flex items-center gap-2 bg-base-200 p-3 rounded-xl shadow-md">
                                        <TbRating18Plus className="text-4xl text-error" />
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 my-4">
                                {movie.genres?.map((genre) => (
                                    <a 
                                        href={`/movies/genre/${genre.id}`} 
                                        key={genre.id} 
                                        className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent hover:text-secondary rounded-full transition-all duration-300"
                                    >
                                        {genre.name}
                                    </a>
                                ))}
                            </div>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2 text-lg items-center">
                                    <p className="font-medium">Spoken Language:</p>
                                    <ul className="flex flex-wrap gap-2">
                                        {movie.spoken_languages?.map((lang) => (
                                            <li key={lang.name} className="font-bold bg-base-200 px-3 py-1 rounded-lg">{lang.english_name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-bold">Movie Overview</p>
                                    <p className="text-lg leading-relaxed">{movie.overview}</p>
                                </div>
                            </div>
                            {movie.homepage && (
                                <a 
                                    href={movie.homepage} 
                                    target="_blank" 
                                    className="text-center text-accent hover:text-secondary text-xl transition-colors duration-300 underline-offset-4 hover:underline"
                                >
                                    Visit Movie Homepage
                                </a>
                            )}
                            
                            {movie.belongs_to_collection && (
                                <div className="flex flex-col items-center gap-4 mt-4 p-6 bg-base-200 rounded-2xl">
                                    <a 
                                        href={`/movies/collection/${movie.belongs_to_collection.id}`} 
                                        className="text-center text-accent hover:text-secondary text-xl transition-colors duration-300"
                                    >
                                        {movie.belongs_to_collection.name}
                                    </a>
                                    <Image 
                                        src={`https://image.tmdb.org/t/p/original${movie.belongs_to_collection.poster_path}`}
                                        width={200}
                                        height={300}
                                        className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        alt="collection poster"
                                        priority={false}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}