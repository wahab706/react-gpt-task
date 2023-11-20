import { Link } from "react-router-dom";

export function NotFound() {

  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="py-16 mt-10">
          <div className="text-center">
            <p className="text-base font-semibold text-green-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn't find that page that you are looking for.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-base font-medium text-green-600 hover:text-indigo-500"
              >
                Back home.
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
