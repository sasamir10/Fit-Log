"use client";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#111111] px-6">
            <div className="max-w-md text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
                    Something went wrong
                </p>

                <h1 className="mt-4 text-4xl font-bold text-white">
                    Unable to load the page
                </h1>

                <p className="mt-4 leading-7 text-gray-400">
                    We couldn&apos;t load the requested content. Please try
                    again.
                </p>

                <button
                    type="button"
                    onClick={() => reset()}
                    className="mt-8 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
                >
                    Try Again
                </button>
            </div>
        </main>
    );
}
