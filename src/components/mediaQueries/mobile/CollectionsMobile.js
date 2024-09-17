"use client"

import React from 'react';
import { IoCalendarNumber } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

export default function CollectionsMobile({movies}) {

  // console.log(movies)    

    return (
        <div className="flex flex-col items-center min-h-full">
            <div className="flex flex-col gap-4 text-center my-8 max-w-[1500px]">
                <h1 className="text-4xl font-bold ">{movies.name}</h1>
                <h4 className="text-lg">{movies.overview}</h4>
            </div>
            <div className="grid mx-1 grid-cols-2 gap-2">
              {movies.parts?.map((movie) => (
                <div key={movie.id} className="card w-full bg-primary text-white shadow-xl">
                  <figure><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="max-h-[600px]" alt="movie poster" /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl tracking-wide">{movie.title}</h2>
                    <div className="flex flex-col items-center justify-evenly text-center text-md min-h-[50px]">
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
                      <button className="btn text-secondary text-lg" onClick={()=>document.getElementById(`my_modal_${movie.id}`).showModal()}>More Info</button>
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
    )
}