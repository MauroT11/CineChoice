export function generateMetadata() {
    return {
        title: "CineChoice - Watchlist",
        description: "Save your favorite movies and tv shows to watch later",
    }
  }

  export default async function moviesPopular({ children }) {
    return (
        <main>{children}</main>
    );
}