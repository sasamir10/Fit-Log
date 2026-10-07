"use client";

import { useWorkout } from "@/context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function SavedPage() {
    const { state, dispatch } = useWorkout();

    return (
        <main className="min-h-screen bg-[#111111] px-6 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
                        Your Collection
                    </p>

                    <h1 className="text-4xl font-bold text-white md:text-5xl">
                        Saved Workouts
                    </h1>

                    <p className="mt-4 text-gray-400">
                        Keep your favorite workouts in one place.
                    </p>
                </div>

                {state.savedWorkouts.length === 0 ? (
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-10 text-center">
                        <p className="text-lg text-gray-400">
                            No saved workouts yet.
                        </p>

                        <Link
                            href="/workouts"
                            className="mt-5 inline-flex rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black transition hover:bg-lime-300"
                        >
                            Explore Workouts
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                        {state.savedWorkouts.map((workout) => (
                            <article
                                key={workout.id}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]"
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-5">
                                    <h2 className="text-xl font-semibold text-white">
                                        {workout.name}
                                    </h2>

                                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-400">
                                        <span>{workout.duration} min</span>

                                        <span>•</span>

                                        <span>{workout.difficulty}</span>

                                        <span>•</span>

                                        <span>★ {workout.rating}</span>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-3">
                                        <Link
                                            href={`/workouts/${workout.id}`}
                                            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-lime-400/40 hover:text-lime-400"
                                        >
                                            View Details
                                        </Link>

                                        <button
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_SAVED_WORKOUT",
                                                    payload: workout.id,
                                                });

                                                toast.success(
                                                    "Workout removed from saved list",
                                                );
                                            }}
                                            className="rounded-xl border border-red-400/30 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-400/10"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
