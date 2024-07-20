"use client" 

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import cineLogo from "/public/cine.jpg"
import Link from "next/link"
import HomeMobile from "@/components/mediaQueries/mobile/HomeMobile"

export default function Home() {

  const [isTablet, setIstablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 932);
      setIstablet(window.innerWidth > 933 && window.innerWidth < 1355);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
    {isMobile ? (
      <HomeMobile />
    ) : isTablet ? (
      <p>TABLET</p>
    ) : (
      <div className="hero my-8">
        <div className="hero-content flex-col bg-base-300 text-black py-20 px-32 flex rounded-3xl">
          <Image src={cineLogo} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold">Welcome to CineChoice!</h1>
            <p className="py-6">CineChoice is an movie recommendation platform designed to make your film & TV serie selection process easier. Whether you’re in the mood for action, romance, or suspense, CineChoice provides the popular and top rated Films and TV Series. <br /><span className="text-3xl font-bold text-accent">Lights, camera, CineChoice!</span></p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl">Movies</h2>
                <div className="join join-vertical lg:join-horizontal">
                  <Link href="/movies" className="btn btn-accent border-accent border-2 join-item">Popular</Link>
                  <Link href="/movies/topRated" className="btn btn-accent border-accent border-2 join-item">Top Rated</Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl">TV Series</h2>
                <div className="join join-vertical lg:join-horizontal">
                  <Link href="/tv" className="btn btn-accent border-accent border-2 join-item">Popular</Link>
                  <Link href="/tv" className="btn btn-accent border-accent border-2 join-item">Top Rated</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}
