export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Terms and Conditions</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Daisy for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">3. User Account</h2>
            <p className="mb-4">
              If you create an account on the website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Content Usage</h2>
            <p className="mb-4">
              All movies, TV shows, and other content available through our service are protected by copyright, trademark, and other intellectual property laws. Our content is licensed from studios and content providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Disclaimer</h2>
            <p className="mb-4">
              The materials on Daisy&apos;s website are provided on an &apos;as is&apos; basis. Daisy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Limitations</h2>
            <p className="mb-4">
              In no event shall Daisy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Daisy&apos;s website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with applicable laws, and any disputes shall be subject to the exclusive jurisdiction of the courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">8. Changes to Terms</h2>
            <p className="mb-4">
              Daisy reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mt-8">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}