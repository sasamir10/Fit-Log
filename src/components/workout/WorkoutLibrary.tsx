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
    const [difficulty, setDifficulty] = useState("");
    const [muscleGroup, setMuscleGroup] = useState("");

    const clearFilters = () => {
        setSearch("");
        setDifficulty("");
        setMuscleGroup("");
    };

    const filteredWorkouts = workouts.filter((workout) => {
        const matchesSearch = workout.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesDifficulty =
            difficulty === "" || workout.difficulty === difficulty;

        const matchesMuscleGroup =
            muscleGroup === "" || workout.muscleGroups.includes(muscleGroup);

        return matchesSearch && matchesDifficulty && matchesMuscleGroup;
    });

    return (
        <>
            <WorkoutSearch
                search={search}
                setSearch={setSearch}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                muscleGroup={muscleGroup}
                setMuscleGroup={setMuscleGroup}
                clearFilters={clearFilters}
            />

            <div className="mb-6 text-sm text-gray-500">
                Showing {filteredWorkouts.length} of {workouts.length} workouts
            </div>

            {filteredWorkouts.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-10 text-center">
                    <p className="text-lg text-gray-400">No workouts found.</p>

                    <p className="mt-2 text-sm text-gray-500">
                        Try changing your search or filters.
                    </p>
                </div>
            ) : (
                <WorkoutList workouts={filteredWorkouts} />
            )}
        </>
    );
}
