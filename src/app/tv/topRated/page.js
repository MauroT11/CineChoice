"use client"

import TvTopRatedCards from "@/components/TvTopRatedCards"
import React from 'react';
import TVTopRatedCardsMobile from "@/components/mediaQueries/mobile/TVTopRatedCardsMobile"

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
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
        const Series = await response.json() 

        setSeries(Series.results)
      }

      const fetchGenres = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en`, options)
        const data = await res.json()
        const Genres = data.genres

        setGenres(Genres)
      }

      fetchGenres()
      fetchSeries()
    

    return (
        <div className="flex flex-col items-center min-h-full">
          <h1 className="text-5xl text-center font-bold my-4">Top Rated TV Series</h1>
          {isMobile? (
            <TVTopRatedCardsMobile Series={Series} Genres={Genres} />
          ) : (
            <TvTopRatedCards Series={Series} Genres={Genres} />
          )}
            
            <div className="join my-4">
              <button className="join-item btn-accent btn btn-lg btn-active">1</button>
              <button className="join-item btn-primary btn btn-lg">2</button>
              <button className="join-item btn-primary btn btn-lg">3</button>
              <button className="join-item btn-primary btn btn-lg">4</button>
            </div>
        </div>
    )
}