"use client"

import MovieCards from "@/components/MovieCards"
import React from 'react';
import { Suspense } from "react";

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
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID}`, options)
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
        <div className="flex flex-col items-center min-h-full py-8">
          <Suspense fallback={<p>Loading...</p>}>
          <h1 className="text-5xl font-bold text-center my-8">Popular <span className="text-accent">{Genre}</span> Movies</h1>
            <MovieCards movies={movies} Genres={Genres} />
          </Suspense>
            
        </div>
    )
}