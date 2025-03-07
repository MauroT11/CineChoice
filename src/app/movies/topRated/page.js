"use client"

import MovieCards from "@/components/MovieCards";
import React from 'react';
import { Suspense } from "react";

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
        <div className="flex flex-col items-center min-h-screen py-8">
          <Suspense fallback={<p>Loading...</p>}>
          <h1 className="text-5xl font-bold text-primary my-8">Top Rated Movies</h1>
            <MovieCards movies={movies} Genres={Genres} topRated={true} />
          </Suspense>
        </div>
    )
}