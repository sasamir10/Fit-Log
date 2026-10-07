import WorkoutLibrary from "@/components/workout/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

export default async function WorkoutsPage() {
    const workouts = await getWorkouts();

    return (
        <main className="min-h-screen bg-[#111111] px-6 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
                        Explore
                    </p>

                    <h1 className="text-4xl font-bold text-white md:text-5xl">
                        Workout Library
                    </h1>

                    <p className="mt-4 max-w-2xl text-gray-400">
                        Discover workouts for different muscle groups,
                        experience levels, and training goals.
                    </p>
                </div>

                <WorkoutLibrary workouts={workouts} />
            </div>
        </main>
    );
}
