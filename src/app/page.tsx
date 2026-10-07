import WorkoutList from "@/components/workout/WorkoutList";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
    const workouts = await getWorkouts();

    return (
        <main className="min-h-screen bg-[#111111] px-6 py-12">
            <div className="mx-auto max-w-7xl">
                <section className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
                        Train smarter
                    </p>

                    <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Build your perfect workout plan.
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                        Explore workouts, discover new exercises, and create a
                        personalized training plan that fits your goals.
                    </p>
                </section>

                <section>
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-white">
                            Workout Library
                        </h2>

                        <span className="text-sm text-gray-500">
                            {workouts.length} workouts
                        </span>
                    </div>

                    <WorkoutList workouts={workouts} />
                </section>
            </div>
        </main>
    );
}
