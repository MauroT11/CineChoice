"use client"

import React from 'react';
import { IoCalendarNumber } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

export default function MovieTopRatedCards({movies, Genre, Genres}) {

  // console.log(movies)    

    return (
        <div className="flex flex-col items-center min-h-full">
            {Genres ? (
              <div className="grid grid-cols-10 text-center gap-2 mb-4">
                {Genres.map((genre) => (
                  <a href={`/movies/topRated/genre/${genre.id}`} key={genre.id} className="border-2 border-secondary rounded-3xl px-2 hover:border-accent hover:bg-accent hover:text-base-100 text-lg">{genre.name}</a>
                ))}
              </div>
            ) : (
              null
            )}
            <div className="grid grid-cols-4 gap-8">
              {movies.map((movie) => (
                <div key={movie.id} className="card w-96 bg-primary text-white shadow-xl">
                  <figure><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="max-h-[600px]" alt="movie poster" /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl tracking-wide">{movie.title}</h2>
                    <div className="flex items-center justify-evenly text-center text-2xl min-h-[50px]">
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