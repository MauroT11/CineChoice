export function generateMetadata() {
    return {
        title: "CineChoice - Popular TV",
    description: "Where Every Frame Tells a Story",
    }
  }

  export default async function TVPopular({ children }) {
    return (
        <main>{children}</main>
    );
}