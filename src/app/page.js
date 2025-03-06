"use client" 

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import cineLogo from "/public/cinechoiceFull.png"
import Link from "next/link"

export default function Home() {

  const [isTablet, setIstablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
      setIstablet(window.innerWidth > 933 && window.innerWidth < 1355);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-neutral/20">
      <div className="container mx-auto px-4 py-8">
        <div className="hero">
          <div className="hero-content flex-col bg-white/80 backdrop-blur-sm shadow-xl py-16 px-8 md:px-20 rounded-3xl transition-all duration-300 hover:shadow-2xl">
            <h1 className="text-6xl font-bold text-primary animate-fade-in">Welcome to</h1>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <Image src={cineLogo} className="max-w-sm rounded-lg" alt="CineChoice Logo" />
            </div>
            <div className="flex flex-col items-center text-center max-w-2xl">
              <p className="py-8 text-lg text-secondary leading-relaxed">
                CineChoice is an movie recommendation platform designed to make your film & TV serie selection process easier. Whether you're in the mood for action, romance, or suspense, CineChoice provides the popular and top rated Films and TV Series.
                <br />
                <span className="block mt-4 text-3xl font-bold text-accent">Lights, camera, CineChoice!</span>
              </p>
              
              <div className="flex flex-col md:flex-row gap-12 mt-8">
                <div className="flex flex-col gap-6 group">
                  <h2 className="text-4xl font-bold text-primary group-hover:text-accent transition-colors duration-300">Movies</h2>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <Link href="/movies" className="relative btn bg-white/90 hover:bg-accent text-accent hover:text-white transition-all duration-300 border-accent border-2 overflow-hidden shadow-lg hover:shadow-accent/20">
                      <span className="relative z-10">Popular</span>
                    </Link>
                    <Link href="/movies/topRated" className="relative btn bg-white/90 hover:bg-accent text-accent hover:text-white transition-all duration-300 border-accent border-2 overflow-hidden shadow-lg hover:shadow-accent/20">
                      <span className="relative z-10">Top Rated</span>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-6 group">
                  <h2 className="text-4xl font-bold text-primary group-hover:text-accent transition-colors duration-300">TV Series</h2>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <Link href="/tv" className="relative btn bg-white/90 hover:bg-accent text-accent hover:text-white transition-all duration-300 border-accent border-2 overflow-hidden shadow-lg hover:shadow-accent/20">
                      <span className="relative z-10">Popular</span>
                    </Link>
                    <Link href="/tv/topRated" className="relative btn bg-white/90 hover:bg-accent text-accent hover:text-white transition-all duration-300 border-accent border-2 overflow-hidden shadow-lg hover:shadow-accent/20">
                      <span className="relative z-10">Top Rated</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
