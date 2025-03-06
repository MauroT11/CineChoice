export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About Daisy
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Your premier destination for movies and TV shows
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                We strive to provide the most comprehensive and user-friendly platform for discovering
                and tracking your favorite movies and TV shows. Our goal is to help you find your next
                favorite entertainment content.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Extensive movie and TV show database</li>
                <li>Personalized watchlists</li>
                <li>Top-rated content recommendations</li>
                <li>Genre-based browsing</li>
                <li>Collection viewing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-gray-600">
                We combine cutting-edge technology with a passion for entertainment to deliver
                a seamless experience. Our platform is constantly updated with the latest releases
                and trending content to keep you informed and entertained.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Content</h3>
              <p className="text-gray-600">
                We ensure that our database is constantly updated with high-quality, accurate
                information about movies and TV shows.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User Experience</h3>
              <p className="text-gray-600">
                Our platform is designed with you in mind, making it easy to discover and track
                your entertainment journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}