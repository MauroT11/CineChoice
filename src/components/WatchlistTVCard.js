"use client"

import React from 'react';
import Image from 'next/image';
import { IoCalendarNumber } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

export default function WatchlistTVCard({Series, Genre, Genres}) {
    return (
        <div className="flex flex-col items-center min-h-full w-full p-4">
            {Genres ? (
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 text-center gap-3 mb-6">
                {Genres.map((genre) => (
                  <a href={`/tv/genre/${genre.id}`} key={genre.id} 
                     className="border-2 border-secondary rounded-3xl px-4 py-1 hover:border-accent hover:bg-accent hover:text-base-100 text-lg transition-all duration-300 shadow-md">
                    {genre.name}
                  </a>
                ))}
              </div>
            ) : null}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
              {Series.map((serie) => (
                <div key={serie.id} 
                     className="card bg-primary text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mx-auto">
                  <figure className="relative overflow-hidden">
                    <Image 
                      src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                      alt="serie poster"
                      width={300}
                      height={450}
                      className="w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title text-xl md:text-2xl tracking-wide font-bold mb-3">{serie.name}</h2>
                    <div className="flex flex-col gap-3 items-center justify-evenly text-center text-lg">
                      <div className="flex items-center gap-2 text-secondary">
                        <IoCalendarNumber className="text-xl" />
                        <p className="font-medium">{serie.first_air_date}</p>
                      </div>
                      <div className="flex items-center gap-2 text-accent">
                        <IoHeart className="text-xl" />
                        <p className="font-medium">{serie.vote_average.toFixed(1)}</p>
                      </div>
                    </div>
                    <div className="card-actions justify-center mt-4">
                      <button 
                        className="btn btn-secondary hover:btn-accent text-lg w-full transition-colors duration-300"
                        onClick={()=>document.getElementById(`my_modal_${serie.id}`).showModal()}>
                        More Info
                      </button>
                      <dialog id={`my_modal_${serie.id}`} className="modal">
                        <div className="modal-box bg-base-100">
                          <h3 className="font-bold text-xl mb-3 text-primary">{serie.name}</h3>
                          <p className="py-4 text-primary/90">{serie.overview}</p>
                          <a href={`/tv/${serie.id}`} 
                             className="btn btn-accent text-lg w-full hover:btn-secondary transition-colors duration-300">
                            Series Details
                          </a>
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
    )
}