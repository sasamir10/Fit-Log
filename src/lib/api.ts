import type { Workout } from "@/types/workout";

const API_BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
}

export async function getWorkout(id: string): Promise<Workout> {
    const response = await fetch(`${API_BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch workout");
    }

    return response.json();
}
