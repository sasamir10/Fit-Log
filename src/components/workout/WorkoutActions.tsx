"use client";

import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";
import { toast } from "sonner";

interface WorkoutActionsProps {
    workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
    const { state, dispatch } = useWorkout();

    const handleAddToPlan = () => {
        const alreadyAdded = state.todayPlan.some(
            (item) => item.id === workout.id,
        );

        if (alreadyAdded) {
            toast.info("Workout is already in today's plan");
            return;
        }

        dispatch({
            type: "ADD_TO_PLAN",
            payload: workout,
        });

        toast.success("Workout added to today's plan");
    };

    const handleSaveWorkout = () => {
        const alreadySaved = state.savedWorkouts.some(
            (item) => item.id === workout.id,
        );

        if (alreadySaved) {
            toast.info("Workout is already saved");
            return;
        }

        dispatch({
            type: "SAVE_WORKOUT",
            payload: workout,
        });

        toast.success("Workout saved");
    };

    return (
        <div className="mt-8 flex flex-wrap gap-4">
            <button
                onClick={handleAddToPlan}
                className="rounded-lg bg-lime-400 px-5 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
                Add to Todays Plan
            </button>

            <button
                onClick={handleSaveWorkout}
                className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
                Save Workout
            </button>
        </div>
    );
}
