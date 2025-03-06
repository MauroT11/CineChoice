import React from 'react';
import Image from 'next/image';
import { IoHeart } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { IoRadioSharp } from "react-icons/io5";
import { TbRating18Plus } from "react-icons/tb";
import { Suspense } from "react";
import { sql } from "@vercel/postgres"
import { currentUser } from "@clerk/nextjs/server";

export default async function Page({params}) {

    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const tvID = params.id
    const user = await currentUser();
    const userID = user?.id

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

    const response = await fetch(`https://api.themoviedb.org/3/tv/${tvID}?language=en-US`, options)
    const tv = await response.json()
    // console.log(movie)

    async function handleWatchList() {
        "use server"

        await sql`INSERT INTO tvwatchlist (userid, tvid) values (${userID}, ${tvID})`
    }

    return (
        <div className="flex flex-col items-center min-h-full py-8">
            <Suspense fallback={<p>Loading...</p>}>
                <div className="flex flex-col gap-2 items-center my-4">
            <h1 className="text-5xl font-bold">{tv.name}</h1>
            <h4 className="text-2xl">{tv.tagline}</h4>
        </div>
            <div className="grid grid-cols-2 gap mx-44">
                <div className="flex flex-col gap-4 items-center">
                    <Image
                        src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                        alt="tv poster"
                        width={400}
                        height={600}
                        className="max-h-[600px] rounded-2xl"
                        priority
                    />
                    <form action={handleWatchList}>
                        <button className="btn btn-accent hover:btn-secondary text-2xl">Add to Watch List</button>
                    </form>
                </div>
                <div className="flex flex-col gap-4 max-w-[2000px]">
                    <div className="flex justify-center text-2xl gap-6 my-1">
                        <div className="flex items-center gap-2">
                            <IoHeart />
                            <p>{tv.vote_average?.toFixed(1)}/10</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ImBooks />
                            <p>{tv.number_of_seasons}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p>Status: {tv.status}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoRadioSharp />
                            <p>{tv.first_air_date}</p>
                        </div>
                        <div className="flex items-center gap-2 text-5xl">
                            {tv.adult ? (
                                <TbRating18Plus />
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center text-accent text-2xl gap-8">
                        {tv.genres?.map((genre) => (
                            <a href={`/tv/genre/${genre.id}`} key={genre.id} className="hover:text-secondary">{genre.name}</a>
                        ))}
                    </div>
                    <div>
                        <div className="flex gap-2 text-2xl mb-4">
                            <p >Spoken Language:</p>
                            <ul className="flex gap-2">
                                {tv.spoken_languages?.map((lang) => (
                                    <li key={lang.name} className="font-bold">{lang.english_name}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-2xl font-bold">TV Serie Overview:</p>
                        <p className="text-2xl">{tv.overview}</p>
                    </div>
                    {tv.homepage=='' ? (
                        null
                    ) : (
                        <a href={`${tv.homepage}`} target="_blank" className="text-center text-accent text-2xl hover:text-secondary">TV Series Official Page</a>
                    )}
                    
                    {tv.belongs_to_collection ? (
                        <div className="flex flex-col items-center">
                            <a href={`/movieCollection/${tv.belongs_to_collection.id}`} target="_blank" className="text-center text-accent text-2xl hover:text-secondary">{tv.belongs_to_collection.name}</a>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${tv.belongs_to_collection.poster_path}`}
                                alt="tv poster"
                                width={200}
                                height={300}
                                className="max-w-[200px] rounded-2xl"
                            />
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