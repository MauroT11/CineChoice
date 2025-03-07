"use client"

import React from 'react';
import { Suspense } from "react";
import MovieCards from "@/components/MovieCards";

export default function Page({params}) {

    const [movies, setMovies] = React.useState({})

    const collectionID = params.id

    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

      const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/collection/${collectionID}?language=en-US`, options)
        const movies = await response.json() 
        // console.log(movies)
        
        setMovies(movies)
    }

    fetchMovies()

    return (
        <div className="flex flex-col items-center min-h-screen py-8">
          <Suspense fallback={<p>Loading...</p>}>
            <MovieCards movies={movies} collection={true} />
          </Suspense>
            
        </div>
    )
}