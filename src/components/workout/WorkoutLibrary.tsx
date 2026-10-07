"use client";

import type { Workout } from "@/types/workout";
import { useState } from "react";
import WorkoutList from "./WorkoutList";
import WorkoutSearch from "./WorkoutSearch";

interface WorkoutLibraryProps {
    workouts: Workout[];
}

export default function WorkoutLibrary({ workouts }: WorkoutLibraryProps) {
    const [search, setSearch] = useState("");

    const filteredWorkouts = workouts.filter((workout) =>
        workout.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <>
            <WorkoutSearch search={search} setSearch={setSearch} />

            {filteredWorkouts.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-10 text-center">
                    <p className="text-lg text-gray-400">No workouts found.</p>

                    <p className="mt-2 text-sm text-gray-500">
                        Try searching with a different workout name.
                    </p>
                </div>
            ) : (
                <WorkoutList workouts={filteredWorkouts} />
            )}
        </>
    );
}
