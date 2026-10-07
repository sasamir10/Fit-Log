import type { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
    workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]">
            <Link href={`/workouts/${workout.id}`}>
                <div className="relative aspect-4/3 w-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-3">
                        <h2 className="text-lg font-semibold text-white">
                            {workout.name}
                        </h2>

                        <span className="text-sm text-lime-400">
                            ★ {workout.rating}
                        </span>
                    </div>

                    <p className="mb-4 text-sm text-gray-400">
                        {workout.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
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
