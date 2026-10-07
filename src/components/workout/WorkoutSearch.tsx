"use client";

interface WorkoutSearchProps {
    search: string;
    setSearch: (value: string) => void;
    difficulty: string;
    setDifficulty: (value: string) => void;
    muscleGroup: string;
    setMuscleGroup: (value: string) => void;
    clearFilters: () => void;
}

export default function WorkoutSearch({
    search,
    setSearch,
    difficulty,
    setDifficulty,
    muscleGroup,
    setMuscleGroup,
    clearFilters,
}: WorkoutSearchProps) {
    return (
        <div className="mb-8 grid gap-4 md:grid-cols-3">
            <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search workouts..."
                className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-lime-400/50"
            />

            <select
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
                className="rounded-xl border border-white/10 bg-[#1a1a1a] px-5 py-4 text-white outline-none focus:border-lime-400/50"
            >
                <option value="">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>

            <select
                value={muscleGroup}
                onChange={(event) => setMuscleGroup(event.target.value)}
                className="rounded-xl border border-white/10 bg-[#1a1a1a] px-5 py-4 text-white outline-none focus:border-lime-400/50"
            >
                <option value="">All Muscle Groups</option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Legs">Legs</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Arms">Arms</option>
                <option value="Core">Core</option>
            </select>
            <button
                type="button"
                onClick={clearFilters}
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-lime-400/50 hover:text-lime-400"
            >
                Clear Filters
            </button>
        </div>
    );
}
