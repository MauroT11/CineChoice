"use client"

import TvTopRatedCards from "@/components/TvTopRatedCards"
import React from 'react';
import { Suspense } from "react";
import TVTopRatedCardsMobile from "@/components/mediaQueries/mobile/TVTopRatedCardsMobile"

export default function Page({params}) {

    const [isTablet, setIstablet] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [Series, setSeries] = React.useState([])
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

    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    let Genre = '';

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

      const fetchSeries = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=100&with_genres=${genreID}`, options)
        const Series = await response.json() 

        setSeries(Series.results)
      }
    
      const fetchGenres = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en`, options)
        const data = await res.json()
        const Genres = data.genres

        setGenres(Genres)
      }
    
      fetchSeries()
      fetchGenres()

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
          <Suspense fallback={<p>Loading..</p>}>
          <h1 className="text-4xl text-center font-bold my-4">Top Rated <span className="text-accent">{Genre}</span> TV Series</h1>
          {isMobile ? (
            <TVTopRatedCardsMobile Series={Series} Genre={Genre} />
          ) : (
            <TvTopRatedCards Series={Series} Genre={Genre} />
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