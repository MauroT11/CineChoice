"use client"

import React from 'react';
import Image from 'next/image';
import { IoCalendarNumber, IoHeart, IoChevronDown } from "react-icons/io5";

export default function TvCards({Series, Genres, topRated}) {
    return (
        <div className="flex flex-col items-center min-h-full w-full max-w-[2000px] mx-auto px-4">
            {topRated ? (
                <>
                    {/* Mobile Dropdown */}
                    <div className="md:hidden w-full my-6">
                        <details className="dropdown w-full">
                            <summary className="btn btn-secondary w-full flex items-center justify-between">
                                Select Genre
                                <IoChevronDown className="text-xl" />
                            </summary>
                            <ul className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 w-full rounded-box mt-2">
                                {Genres.map((genre) => (
                                    <li key={genre.id}>
                                        <a href={`/tv/topRated/genre/${genre.id}`} 
                                            className="text-base hover:text-accent">
                                            {genre.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>
                    {/* Desktop/Tablet Grid */}
                    <div className="hidden md:grid md:grid-cols-5 lg:grid-cols-8 text-center gap-3 my-6">
                        {Genres.map((genre) => (
                            <a href={`/tv/topRated/genre/${genre.id}`} key={genre.id} 
                                className="border border-secondary/50 rounded-full px-3 py-1.5 hover:border-accent hover:bg-accent hover:text-base-100 transition-all duration-300 ease-in-out text-base">
                                {genre.name}
                            </a>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    {/* Mobile Dropdown */}
                    <div className="md:hidden w-full my-6">
                        <details className="dropdown w-full">
                            <summary className="btn btn-secondary w-full flex items-center justify-between">
                                Select Genre
                                <IoChevronDown className="text-xl" />
                            </summary>
                            <ul className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 w-full rounded-box mt-2">
                                {Genres.map((genre) => (
                                    <li key={genre.id}>
                                        <a href={`/tv/genre/${genre.id}`} 
                                            className="text-base hover:text-accent">
                                            {genre.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>
                    {/* Desktop/Tablet Grid */}
                    <div className="hidden md:grid md:grid-cols-5 lg:grid-cols-8 text-center gap-3 my-6">
                        {Genres.map((genre) => (
                            <a href={`/tv/genre/${genre.id}`} key={genre.id} 
                                className="border border-secondary/50 rounded-full px-3 py-1.5 hover:border-accent hover:bg-accent hover:text-base-100 transition-all duration-300 ease-in-out text-base">
                                {genre.name}
                            </a>
                        ))}
                    </div>
                </>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full max-w-[1800px] px-6 mx-auto place-items-center">
                {Series.map((serie, index) => (
                    <div key={serie.id} 
                        className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group max-w-[250px] h-[500px] cursor-pointer opacity-0 animate-fade-up"
                        style={{ 
                            animationDelay: `${index * 150}ms`,
                            animationFillMode: 'forwards'
                        }}
                        onClick={() => document.getElementById(`my_modal_${serie.id}`).showModal()}
                    >
                        <figure className="relative h-[375px]">
                            <Image 
                                src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                                alt="serie poster"
                                width={250}
                                height={375}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </figure>
                        <div className="card-body bg-primary text-primary-content rounded-b-lg">
                            <h2 className="card-title text-xl md:text-2xl font-bold tracking-wide">{serie.name}</h2>
                            <div className="flex items-center justify-between text-center text-sm md:text-base text-primary-content/80">
                                <div className="flex items-center gap-2">
                                    <IoCalendarNumber className="text-accent" />
                                    <p>{serie.first_air_date}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IoHeart className="text-accent" />
                                    <p>{serie.vote_average.toFixed(1)}</p>
                                </div>
                            </div>
                        </div>
                        <dialog id={`my_modal_${serie.id}`} className="modal">
                            <div className="modal-box justify-items-center bg-base-100">
                                <h3 className="font-bold text-xl text-accent">{serie.name}</h3>
                                <p className="py-4 text-base-content/80">{serie.overview}</p>
                                <a href={`/tv/${serie.id}`} className="btn btn-accent hover:btn-secondary transition-colors duration-300">
                                    Series Details
                                </a>
                            </div>
                            <form method="dialog" className="modal-backdrop bg-black/60">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                ))}
            </div>
        </div>
    )
}