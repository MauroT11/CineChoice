export function generateMetadata() {
    return {
        title: "CineChoice - Top Rated TV",
    description: "Where Every Frame Tells a Story",
    }
  }

  export default async function TVTopRated({ children }) {
    return (
        <main>{children}</main>
    );
}