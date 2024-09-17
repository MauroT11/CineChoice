"use client"

import MovieTopRatedCards from "@/components/MovieTopRatedCards"
import React from 'react';
import { Suspense } from "react";
import MovieTopRatedMobile from "@/components/mediaQueries/mobile/MovieTopRatedMobile"
import MovieTopRatedTablet from "@/components/mediaQueries/tablet/MovieTopRatedTablet"

export default function Page() {

    const [isTablet, setIstablet] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [movies, setMovies] = React.useState([])
    const [Genres, setGenres] = React.useState([])

    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 500);
        setIstablet(window.innerWidth > 501 && window.innerWidth < 1355);
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
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const movies = await response.json() 

        setMovies(movies.results)
      }
    
      const fetchGenres = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
      const data = await res.json()
      const Genres = data.genres

        setGenres(Genres)
      }

      fetchGenres()
      fetchMovies()
    

    return (
        <div className="flex flex-col items-center min-h-full">
          <Suspense fallback={<p>Loading...</p>}>
          <h1 className="text-5xl font-bold my-4">Top Rated Movies</h1>
          {isMobile ? (
            <MovieTopRatedMobile movies={movies} Genres={Genres} />
          ) : isTablet ? (
            <MovieTopRatedTablet movies={movies} Genres={Genres} />
          ) : (
            <MovieTopRatedCards movies={movies} Genres={Genres} />
          )}
          </Suspense>
        </div>
    )
}