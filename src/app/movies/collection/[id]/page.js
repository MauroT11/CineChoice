
import Collections from "@/components/Collections"
import React from 'react';
import { Suspense } from "react";

export default async function Page({params}) {

    // const [popular, setPopular] = React.useState([]);

    const collectionID = params.id

    const APIkey = process.env.NEXT_PRIVATE_ACCESS_TOKEN;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIkey}`
        }
      };

    const response = await fetch(`https://api.themoviedb.org/3/collection/${collectionID}?language=en-US`, options)
    const movies = await response.json() 
    // console.log(movies)

    return (
        <div className="flex flex-col items-center min-h-full">
          <Suspense fallback={<p>Loading...</p>}>
            <Collections movies={movies} />
            <div className="join my-4">
              <button className="join-item btn-accent btn btn-lg btn-active">1</button>
              <button className="join-item btn-primary btn btn-lg">2</button>
              <button className="join-item btn-primary btn btn-lg">3</button>
              <button className="join-item btn-primary btn btn-lg">4</button>
            </div>
          </Suspense>
            
        </div>
    )
}