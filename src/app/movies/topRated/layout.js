export function generateMetadata() {
    return {
        title: "CineChoice - Top Rated Movies",
    description: "Where Every Frame Tells a Story",
    }
  }

  export default async function movieTopRated({ children }) {
    return (
        <main>{children}</main>
    );
}