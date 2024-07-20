"use client"

import MovieTopRatedCards from "@/components/MovieTopRatedCards"
import React from 'react';
import { Suspense } from "react";
import MovieTopRatedMobile from "@/components/mediaQueries/mobile/MovieTopRatedMobile"

export default function Page({params}) {

    const [isTablet, setIstablet] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [movies, setMovies] = React.useState([])
    const [Genres, setGenres] = React.useState([])

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

    const genreID = params.id
    let Genre = ''

    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

      const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=100&with_genres=${genreID}`, options)
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

    for(let i=0; i < Genres.length; i++){
      if(genreID == Genres[i].id) {
        // console.log(Genres[i].name)
        Genre = Genres[i].name
      } else {
        null
      }
    }
    
    return (
        <div className="flex flex-col items-center min-h-full">
          <Suspense fallback={<p>Loading...</p>}>
            <h1 className="text-4xl text-center font-bold my-4">Top Rated <span className="text-accent">{Genre}</span> Movies</h1>
            {isMobile ? (
              <MovieTopRatedMobile movies={movies} Genre={Genre} />
            ) : (
              <MovieTopRatedCards movies={movies} Genre={Genre} />
            )}
            
            <div className="join my-4">
              <button className="join-item btn-accent btn btn-lg btn-active">1</button>
              <button className="join-item btn-primary btn btn-lg">2</button>
              <button className="join-item btn-primary btn btn-lg">3</button>
              <button className="join-item btn-primary btn btn-lg">4</button>
            </div>
          </Suspense>
            
        </div>
    )
}