"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoCalendarNumber } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

export default function MovieCards({movies, Genres, topRated, collection}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-full">
      {topRated ? (
        <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-5' : 'grid-cols-10'} text-center gap-2 my-4`}>
          {Genres.map((genre) => (
            <a href={`/movies/topRated/genre/${genre.id}`} key={genre.id} 
              className={`border-2 border-secondary rounded-3xl px-2 hover:border-accent hover:bg-accent hover:text-base-100 ${isMobile ? 'text-base' : 'text-lg'}`}>
              {genre.name}
            </a>
          ))}
        </div>
      ) : collection ? (
        null
      ) : (
        <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-5' : 'grid-cols-10'} text-center gap-2 my-4`}>
          {Genres.map((genre) => (
            <a href={`/movies/genre/${genre.id}`} key={genre.id} 
              className={`border-2 border-secondary rounded-3xl px-2 hover:border-accent hover:bg-accent hover:text-base-100 ${isMobile ? 'text-base' : 'text-lg'}`}>
              {genre.name}
            </a>
          ))}
        </div>
      )}
      {collection ? (
        <div className="flex flex-col items-center min-h-full">
          <div className="text-center my-8 max-w-[1500px]">
            <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold`}>{movies.name}</h1>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'}`}>{movies.overview}</h4>
          </div>
          
          <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'} gap-4 mx-2`}>
            {movies.parts?.map((movie) => (
              <div key={movie.id} className={`card ${isMobile ? 'w-full' : 'w-96'} bg-primary text-white shadow-xl`}>
                <figure>
                  <Image 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="movie poster"
                    width={384}
                    height={576}
                    className={`${isMobile ? 'max-h-[400px]' : 'max-h-[600px]'}`}
                  />
                </figure>
                <div className="card-body">
                  <h2 className={`card-title ${isMobile ? 'text-xl' : 'text-2xl'} tracking-wide`}>{movie.title}</h2>
                  <div className={`flex items-center justify-evenly text-center ${isMobile ? 'text-base' : 'text-2xl'} min-h-[50px]`}>
                    <div className="flex items-center gap-2">
                      <IoCalendarNumber />
                      <p>{movie.release_date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoHeart />
                      <p>{movie.vote_average.toFixed(1)}</p>
                    </div>
                  </div>
                  <div className="card-actions justify-center">
                    <button className={`btn text-secondary ${isMobile ? 'text-base' : 'text-lg'}`} 
                      onClick={()=>document.getElementById(`my_modal_${movie.id}`).showModal()}>
                      More Info
                    </button>
                    <dialog id={`my_modal_${movie.id}`} className="modal">
                      <div className="modal-box text-primary">
                        <h3 className="font-bold text-lg">{movie.title}</h3>
                        <p className="py-4">{movie.overview}</p>
                        <a href={`/movies/${movie.id}`} className="btn btn-accent text-lg">Movie Details</a>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'} gap-4 mx-2`}>
          {movies.map((movie) => (
            <div key={movie.id} className={`card ${isMobile ? 'w-full' : 'w-96'} bg-primary text-white shadow-xl`}>
              <figure>
                <Image 
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="movie poster"
                  width={384}
                  height={576}
                  className={`${isMobile ? 'max-h-[400px]' : 'max-h-[600px]'}`}
                />
              </figure>
              <div className="card-body">
                <h2 className={`card-title ${isMobile ? 'text-xl' : 'text-2xl'} tracking-wide`}>{movie.title}</h2>
                <div className={`flex items-center justify-evenly text-center ${isMobile ? 'text-base' : 'text-2xl'} min-h-[50px]`}>
                  <div className="flex items-center gap-2">
                    <IoCalendarNumber />
                    <p>{movie.release_date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoHeart />
                    <p>{movie.vote_average.toFixed(1)}</p>
                  </div>
                </div>
                <div className="card-actions justify-center">
                  <button className={`btn text-secondary ${isMobile ? 'text-base' : 'text-lg'}`} 
                    onClick={()=>document.getElementById(`my_modal_${movie.id}`).showModal()}>
                    More Info
                  </button>
                  <dialog id={`my_modal_${movie.id}`} className="modal">
                    <div className="modal-box text-primary">
                      <h3 className="font-bold text-lg">{movie.title}</h3>
                      <p className="py-4">{movie.overview}</p>
                      <a href={`/movies/${movie.id}`} className="btn btn-accent text-lg">Movie Details</a>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}