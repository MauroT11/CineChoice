"use client"

import React from 'react';
import { Suspense } from "react";
import MovieCards from "@/components/MovieCards";

export default function Page({params}) {

    const [isTablet, setIstablet] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [movies, setMovies] = React.useState({})

    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 932);
        setIstablet(window.innerWidth > 933 && window.innerWidth < 1355);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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