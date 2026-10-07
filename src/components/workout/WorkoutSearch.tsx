"use client";

interface WorkoutSearchProps {
    search: string;
    setSearch: (value: string) => void;
}

export default function WorkoutSearch({
    search,
    setSearch,
}: WorkoutSearchProps) {
    return (
        <div className="mb-8">
            <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search workouts..."
                className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-lime-400/50"
            />
        </div>
    );
}
