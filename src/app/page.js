import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="hero my-8">
      <div className="hero-content flex-col bg-secondary text-black py-20 px-32 flex rounded-3xl">
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold">Welcome to CineChoice!</h1>
          <p className="py-6">CineChoice is an movie recommendation platform designed to make your film & TV serie selection process easier. Whether you’re in the mood for action, romance, or suspense, CineChoice provides the popular and top rated Films and TV Series. <br /><span className="text-3xl font-bold text-accent">Lights, camera, CineChoice!</span></p>
          <div className="flex gap-8">
            <div>
              <h2 className="text-4xl">Movies</h2>
              <div className="join join-vertical lg:join-horizontal">
                <Link href="/movies" className="btn btn-accent border-accent border-2 join-item">Popular</Link>
                <Link href="/movies/topRated" className="btn btn-accent border-accent border-2 join-item">Top Rated</Link>
              </div>
            </div>
            <div>
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
  );
}
