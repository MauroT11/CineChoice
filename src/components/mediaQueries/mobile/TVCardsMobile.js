"use client"

import React from 'react';
import { IoCalendarNumber } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { useRouter } from 'next/navigation'

export default function TVCardsMobile({Series, Genre, Genres}) {

    const router = useRouter()

    function handleGenre(e){
        router.push(`/tv/genre/${e.target.value}`)
    }

    return (
        <div className="flex flex-col items-center min-h-full">
            {Genres ? (
                <select className="my-4 border-2 border-secondary rounded-lg text-lg text-center" onChange={handleGenre}>
                    <option>Select Genre</option>
                    {Genres.map((genre) => (
                    <option key={genre.id} className="border-2 border-secondary rounded-3xl px-2 hover:border-accent hover:bg-accent hover:text-base-100 text-lg" value={genre.id}>{genre.name}</option>
                    ))}
              </select>
            ) : (
              null
            )}
            <div className="grid mx-1 grid-cols-2 gap-2">
              {Series.map((serie) => (
                <div key={serie.id} className="card w-full bg-primary text-white shadow-xl">
                  <figure><img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} className="max-h-[400px]" alt="serie poster" /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-center text-2xl tracking-wide">{serie.name}</h2>
                    <div className="flex flex-col items-center justify-evenly text-center text-md min-h-[50px]">
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