import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-2xl rounded-2xl max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
        <Link href="/">
          <button className="px-6 py-3 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
