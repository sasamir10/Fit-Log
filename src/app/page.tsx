import WorkoutList from "@/components/workout/WorkoutList";
import { getWorkouts } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
    const workouts = await getWorkouts();

    return (
        <main className="min-h-screen bg-[#111111]">
            <section className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
                            Train smarter
                        </p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                            Build your perfect workout plan.
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
                            Explore workouts, discover new exercises, and create
                            a personalized training plan that fits your goals.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/workouts"
                                className="rounded-xl bg-lime-400 px-6 py-3 text-center font-semibold text-black transition hover:bg-lime-300"
                            >
                                Explore Workouts
                            </Link>

                            <Link
                                href="/my-plan"
                                className="rounded-xl border border-white/10 bg-[#1a1a1a] px-6 py-3 text-center font-semibold text-white transition hover:border-lime-400/40 hover:text-lime-400"
                            >
                                View My Plan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
                            Discover
                        </p>

                        <h2 className="text-3xl font-bold text-white">
                            Featured Workouts
                        </h2>
                    </div>

                    <Link
                        href="/workouts"
                        className="text-sm font-medium text-gray-400 transition hover:text-lime-400"
                    >
                        View all workouts →
                    </Link>
                </div>

                <WorkoutList workouts={workouts.slice(0, 6)} />
            </section>
        </main>
    );
}
