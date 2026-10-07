import type { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
    workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] transition duration-300 hover:-translate-y-1 hover:border-lime-400/30">
            <Link href={`/workouts/${workout.id}`}>
                <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-lime-400 backdrop-blur-sm">
                        {workout.difficulty}
                    </div>

                    <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
                        ★ {workout.rating}
                    </div>
                </div>

                <div className="p-5">
                    <h2 className="text-lg font-semibold text-white transition group-hover:text-lime-400">
                        {workout.name}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">
                        {workout.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                        <span>{workout.duration} min</span>
                        <span>•</span>
                        <span>{workout.sets} sets</span>
                        <span>•</span>
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-400"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </article>
    );
}
