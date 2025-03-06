"use client"

import MovieCards from "@/components/MovieCards"
import React from 'react';
import { Suspense } from "react";

export default function Page() {

  const [isTablet, setIstablet] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [movies, setMovies] = React.useState([])
  const [Genres, setGenres] = React.useState([])

    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 450);
        setIstablet(window.innerWidth > 501 && window.innerWidth < 1050);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

      const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${APIkey}`
              }
            };

    const fetchMovies = async () => {

      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const moviedata = await response.json()
      // console.log(moviedata)

      setMovies(moviedata.results)
    }

    const fetchGenres = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
      const movieGenres = await res.json()

      setGenres(movieGenres.genres)
    }

    fetchGenres()
    fetchMovies()

    return (
        <div className="flex flex-col items-center mb-4 min-h-full py-8">
          <Suspense fallback={<p className="text-6xl">Loading...</p>}>
          <h1 className="text-5xl font-bold my-8">Popular Movies</h1>
            <MovieCards movies={movies} Genres={Genres} />
          </Suspense>
            
        </div>
    )
}