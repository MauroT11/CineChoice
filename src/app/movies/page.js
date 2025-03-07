"use client"

import MovieCards from "@/components/MovieCards"
import React from 'react';
import { Suspense } from "react";

export default function Page() {
  const [movies, setMovies] = React.useState([])
  const [Genres, setGenres] = React.useState([])

  const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${APIkey}`
    }
  };

  React.useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const moviedata = await response.json()
      setMovies(moviedata.results)
    }

    const fetchGenres = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
      const movieGenres = await res.json()
      setGenres(movieGenres.genres)
    }

    fetchGenres()
    fetchMovies()
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="flex flex-col min-h-screen items-center mb-4 py-8">
      <Suspense fallback={<p className="text-6xl">Loading...</p>}>
        <h1 className="text-5xl text-primary font-bold my-8">Popular Movies</h1>
        <MovieCards movies={movies} Genres={Genres} />
      </Suspense>
    </div>
  )
}