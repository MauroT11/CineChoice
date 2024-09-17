"use client"

import MovieCards from "@/components/MovieCards"
import React from 'react';
import { Suspense } from "react";
import MovieCardsMobile from "@/components/mediaQueries/mobile/MovieCardsMobile"
import MovieCardsTablet from "@/components/mediaQueries/tablet/MovieCardsTablet"

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
      const tvdata = await res.json()

      setGenres(tvdata.genres)
    }

    fetchGenres()
    fetchMovies()

    return (
        <div className="flex flex-col items-center mb-4 min-h-full">
          <Suspense fallback={<p className="text-6xl">Loading...</p>}>
          <h1 className="text-5xl font-bold my-4">Popular Movies</h1>
          {isMobile ? (
            <MovieCardsMobile movies={movies} Genres={Genres} />
          ) : isTablet ? (
            <MovieCardsTablet movies={movies} Genres={Genres} />
          ) : (
            <MovieCards movies={movies} Genres={Genres} />
          )}
            {/* <div className="join my-4">
              <button className="join-item btn-accent btn btn-lg btn-active">1</button>
              <button className="join-item btn-primary btn btn-lg">2</button>
              <button className="join-item btn-primary btn btn-lg">3</button>
              <button className="join-item btn-primary btn btn-lg">4</button>
            </div> */}
          </Suspense>
            
        </div>
    )
}