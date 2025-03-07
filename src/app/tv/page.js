"use client"

import TvCards from "@/components/TvCards"
import React from 'react';
import { Suspense } from "react";

export default  function Page() {


    const [Series, setSeries] = React.useState([])
    const [Genres, setGenres] = React.useState([])

    const APIkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

      const fetchSeries = async () => {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
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

    return (
        <div className="flex flex-col items-center min-h-screen py-8">
          <Suspense fallback={<p>Loading...</p>}>
          <h1 className="text-5xl text-primary font-bold my-8">Popular TV Series</h1>
            <TvCards Series={Series} Genres={Genres} />
          </Suspense>
            
        </div>
    )
}