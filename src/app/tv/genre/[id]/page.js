
import TvCards from "@/components/TvCards"
import React from 'react';
import { Suspense } from "react";

export default async function Page({params}) {

    // const [popular, setPopular] = React.useState([]);

    const genreID = params.id

    const APIkey = process.env.NEXT_PRIVATE_ACCESS_TOKEN;
    let Genre = '';

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID}`, options)
    const Series = await response.json() 
    // console.log(movies)

    const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en`, options)
    const data = await res.json()
    const Genres = data.genres

    for(let i=0; i < Genres.length; i++){
      if(genreID == Genres[i].id) {
        // console.log(Genres[i].name)
        Genre = Genres[i].name
      } else {
        null
      }
    }
    // console.log(genre)
    return (
        <div className="flex flex-col items-center min-h-full">
          <Suspense fallback={<p>Loading...</p>}>
            <TvCards Series={Series.results} Genre={Genre} />
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