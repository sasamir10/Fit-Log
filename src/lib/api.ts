import type { Workout } from "@/types/workout";

const API_BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
    try {
        const response = await fetch(API_BASE_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch workouts");
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching workouts:", error);
        throw new Error("Unable to load workouts");
    }
}

export async function getWorkout(id: string): Promise<Workout> {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch workout");
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching workout:", error);
        throw new Error("Unable to load workout");
    }
}
