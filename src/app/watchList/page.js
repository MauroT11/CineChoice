"use client"

import { useEffect, useState } from "react"
import WatchlistMovieCard from "@/components/WatchlistMovieCard"
import WatchlistTVCard from "@/components/WatchlistTVCard"
import { removeFromMovieWatchlist, removeFromTVWatchlist, getWatchlistData } from "./actions"

export default function Page() {
    const [movieArr, setMovieArr] = useState([]);
    const [tvArr, setTvArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { movieArr, tvArr } = await getWatchlistData();
                setMovieArr(movieArr);
                setTvArr(tvArr);
            } catch (error) {
                console.error("Error fetching watchlist:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleMovieRemove = async (movieId) => {
        await removeFromMovieWatchlist(movieId);
        setMovieArr(prev => prev.filter(movie => movie.id !== movieId));
    };

    const handleTVRemove = async (tvId) => {
        await removeFromTVWatchlist(tvId);
        setTvArr(prev => prev.filter(tv => tv.id !== tvId));
    };

    if (isLoading) {
        return <div className="container mx-auto px-4 py-8 flex justify-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl min-h-screen">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-5xl font-bold text-center text-primary py-4">
                    My Watchlist
                </h1>
            </div>
            <div role="tablist" className="tabs tabs-lifted w-full">
                <input 
                    type="radio" 
                    name="my_tabs_2" 
                    role="tab" 
                    className="tab tab-lg font-semibold w-full hover:text-accent transition-colors" 
                    aria-label="Movies" 
                    defaultChecked 
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8 shadow-lg">
                    {movieArr.length === 0 ? (
                        <p className="text-center text-lg text-gray-500 py-52">Your saved movies will appear here</p>
                    ) : (
                        <WatchlistMovieCard movies={movieArr} onRemove={handleMovieRemove} />
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab tab-lg font-semibold hover:text-accent transition-colors"
                    aria-label="TV Series"
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-8 shadow-lg">
                    {tvArr.length === 0 ? (
                        <p className="text-center text-lg text-gray-500 py-52">Your saved TV series will appear here</p>
                    ) : (
                        <WatchlistTVCard Series={tvArr} onRemove={handleTVRemove} />
                    )}
                </div>
            </div>
        </div>
    )
}