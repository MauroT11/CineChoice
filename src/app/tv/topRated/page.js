"use client"

import React from 'react';
import TvCards from "@/components/TvCards";

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
        <div className="flex flex-col items-center py-8 min-h-full py-8">
          <h1 className="text-5xl text-center font-bold my-8">Top Rated TV Series</h1>
            <TvCards Series={Series} Genres={Genres} topRated={true} />
        </div>
    )
}