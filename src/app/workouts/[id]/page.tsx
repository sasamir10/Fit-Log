import WorkoutActions from "@/components/workout/WorkoutActions";
import { getWorkout } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

interface WorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function WorkoutDetailsPage({
    params,
}: WorkoutDetailsPageProps) {
    const { id } = await params;
    const workout = await getWorkout(id);

    return (
        <main className="min-h-screen bg-[#111111] px-6 py-12">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/"
                    className="mb-8 inline-block text-sm text-lime-400 hover:text-lime-300"
                >
                    ← Back to workouts
                </Link>

                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="rounded-full bg-lime-400/10 px-3 py-1 text-sm text-lime-400">
                                {workout.difficulty}
                            </span>

                            <span className="text-sm text-gray-400">
                                ★ {workout.rating}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold text-white">
                            {workout.name}
                        </h1>

                        <p className="mt-5 leading-7 text-gray-400">
                            {workout.description}
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <div className="rounded-xl bg-[#1a1a1a] p-4">
                                <p className="text-xs text-gray-500">
                                    Duration
                                </p>
                                <p className="mt-1 font-semibold text-white">
                                    {workout.duration} min
                                </p>
                            </div>

                            <div className="rounded-xl bg-[#1a1a1a] p-4">
                                <p className="text-xs text-gray-500">
                                    Calories
                                </p>
                                <p className="mt-1 font-semibold text-white">
                                    {workout.caloriesBurned}
                                </p>
                            </div>

                            <div className="rounded-xl bg-[#1a1a1a] p-4">
                                <p className="text-xs text-gray-500">Sets</p>
                                <p className="mt-1 font-semibold text-white">
                                    {workout.sets}
                                </p>
                            </div>

                            <div className="rounded-xl bg-[#1a1a1a] p-4">
                                <p className="text-xs text-gray-500">Reps</p>
                                <p className="mt-1 font-semibold text-white">
                                    {workout.reps}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="mb-3 text-sm text-gray-500">
                                Equipment
                            </p>

                            <p className="text-white">{workout.equipment}</p>
                        </div>

                        <div className="mt-8">
                            <p className="mb-3 text-sm text-gray-500">
                                Muscle Groups
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {workout.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-lime-400/10 px-3 py-1 text-sm text-lime-400"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <WorkoutActions workout={workout} />
                    </div>
                </div>

                <section className="mt-14">
                    <h2 className="text-2xl font-semibold text-white">
                        Instructions
                    </h2>

                    <ol className="mt-6 space-y-4">
                        {workout.instructions.map((instruction, index) => (
                            <li
                                key={instruction}
                                className="flex gap-4 rounded-xl bg-[#1a1a1a] p-5"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
                                    {index + 1}
                                </span>

                                <p className="leading-7 text-gray-300">
                                    {instruction}
                                </p>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </main>
    );
}
