"use client";

import { createContext, useContext, useReducer } from "react";

const initialState = {
    todayPlan: [],
    savedWorkouts: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function workoutReducer(state: typeof initialState, action: any) {
    switch (action.type) {
        case "ADD_TO_PLAN":
            if (
                state.todayPlan.some(
                    (workout) => workout.id === action.payload.id,
                )
            ) {
                return state;
            }

            return {
                ...state,
                todayPlan: [...state.todayPlan, action.payload],
            };

        case "REMOVE_FROM_PLAN":
            return {
                ...state,
                todayPlan: state.todayPlan.filter(
                    (workout) => workout.id !== action.payload,
                ),
            };

        case "SAVE_WORKOUT":
            if (
                state.savedWorkouts.some(
                    (workout) => workout.id === action.payload.id,
                )
            ) {
                return state;
            }

            return {
                ...state,
                savedWorkouts: [...state.savedWorkouts, action.payload],
            };

        case "REMOVE_SAVED_WORKOUT":
            return {
                ...state,
                savedWorkouts: state.savedWorkouts.filter(
                    (workout) => workout.id !== action.payload,
                ),
            };

        default:
            return state;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WorkoutContext = createContext<any>(null);

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(workoutReducer, initialState);

    return (
        <WorkoutContext.Provider value={{ state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    );
}

export function useWorkout() {
    return useContext(WorkoutContext);
}
