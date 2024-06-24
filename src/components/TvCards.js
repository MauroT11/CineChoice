"use client"

import React from 'react';
import { IoCalendarNumber } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

export default function TvCards({Series, Genre, Genres}) {

    return (
        <div className="flex flex-col items-center min-h-full">
            {Genre ? (
              <h1 className="text-5xl font-bold my-4">Popular {Genre} TV Series</h1>
            ) : (
              <h1 className="text-5xl font-bold my-4">Popular TV Series</h1>
            )}
            {Genres ? (
              <div className="grid grid-cols-8 text-center gap-4 mb-4">
                {Genres.map((genre) => (
                  <a href={`/tv/genre/${genre.id}`} key={genre.id} className="border-2 border-secondary rounded-3xl px-2 hover:border-accent hover:bg-accent hover:text-base-100 text-lg">{genre.name}</a>
                ))}
              </div>
            ) : (
              null
            )}
            <div className="grid grid-cols-4 gap-8">
              {Series.map((serie) => (
                <div key={serie.id} className="card w-96 bg-primary text-white shadow-xl">
                  <figure><img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} className="max-h-[600px]" alt="serie poster" /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-center text-2xl tracking-wide">{serie.name}</h2>
                    <div className="flex items-center justify-evenly text-center text-lg min-h-[50px]">
                      <div className="flex items-center gap-2">
                        <IoCalendarNumber />
                        <p>{serie.first_air_date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoHeart />
                        <p>{serie.vote_average.toFixed(1)}</p>
                      </div>
                    </div>
                    <div className="card-actions justify-center">
                      <button className="btn text-secondary text-lg" onClick={()=>document.getElementById(`my_modal_${serie.id}`).showModal()}>More Info</button>
                      <dialog id={`my_modal_${serie.id}`} className="modal">
                        <div className="modal-box text-primary">
                          <h3 className="font-bold text-lg">{serie.name}</h3>
                          <p className="py-4">{serie.overview}</p>
                          <a href={`/tv/${serie.id}`} className="btn btn-accent text-lg">Series Details</a>
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