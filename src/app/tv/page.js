"use client"

import TvCards from "@/components/TvCards"
import React from 'react';
import { Suspense } from "react";
import TVCardsMobile from "@/components/mediaQueries/mobile/TVCardsMobile"

export default  function Page() {

    const [isTablet, setIstablet] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [Series, setSeries] = React.useState([])
    const [Genres, setGenres] = React.useState([])

    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 450);
        setIstablet(window.innerWidth > 451 && window.innerWidth < 1355);
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
        <div className="flex flex-col items-center min-h-full">
          <Suspense fallback={<p>Loading...</p>}>
          <h1 className="text-5xl font-bold my-4">Popular TV Series</h1>
          {isMobile ? (
            <TVCardsMobile Series={Series} Genres={Genres} />
          ) : (
            <TvCards Series={Series} Genres={Genres} />
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