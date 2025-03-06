export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
            <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Name and email address when you create an account</li>
                <li>Viewing history and watchlist preferences</li>
                <li>Device information and IP address</li>
                <li>Usage data and interaction with our services</li>
            </ul>
            </section>

            <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our streaming services</li>
                <li>Personalize your viewing experience</li>
                <li>Send you important updates and notifications</li>
                <li>Analyze usage patterns and optimize our platform</li>
                <li>Protect against fraudulent or unauthorized access</li>
            </ul>
            </section>

            <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="mb-4">We do not sell your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Law enforcement when required by law</li>
                <li>Business partners with your consent</li>
            </ul>
            </section>

            <section>
            <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
            </ul>
            </section>

            <section>
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure.
            </p>
            </section>

            <section>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
            <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            </section>

            <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@example.com
            </p>
            </section>

            <p className="text-sm text-gray-600 mt-8">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
    </div>
  );
}