"use client";

import { useWorkout } from "@/context/WorkoutContext";
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
                    </div>
                ) : (
                    <div className="space-y-4">
                        {state.savedWorkouts.map((workout) => (
                            <div
                                key={workout.id}
                                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#1a1a1a] p-5"
                            >
                                <div>
                                    <h2 className="text-xl font-semibold text-white">
                                        {workout.name}
                                    </h2>

                                    <p className="mt-2 text-sm text-gray-400">
                                        {workout.duration} min ·{" "}
                                        {workout.difficulty}
                                    </p>
                                </div>

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
                                    className="rounded-lg border border-red-400/30 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-400/10"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
