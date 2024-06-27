
import MovieCards from "@/components/MovieCards"
import React from 'react';
import { Suspense } from "react";

export default async function Page() {

    // const [popular, setPopular] = React.useState([]);

    const APIkey = process.env.NEXT_PRIVATE_ACCESS_TOKEN;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const movies = await response.json() 

    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
    const data = await res.json()
    const Genres = data.genres

    return (
        <div className="flex flex-col items-center min-h-full">
          <Suspense fallback={<p>Loading...</p>}>
          <h1 className="text-5xl font-bold my-4">Popular Movies</h1>
            <MovieCards movies={movies.results} Genres={Genres} />
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