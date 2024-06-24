export function generateMetadata() {
    return {
        title: "CineChoice - Popular Movies",
    description: "Where Every Frame Tells a Story",
    }
  }

  export default async function moviesPopular({ children }) {
    return (
        <main>{children}</main>
    );
}