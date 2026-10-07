"use client";

import type { Workout } from "@/types/workout";
import { createContext, useContext, useReducer } from "react";

interface WorkoutState {
    todayPlan: Workout[];
    savedWorkouts: Workout[];
}

type WorkoutAction =
    | {
          type: "ADD_TO_PLAN";
          payload: Workout;
      }
    | {
          type: "REMOVE_FROM_PLAN";
          payload: number;
      }
    | {
          type: "SAVE_WORKOUT";
          payload: Workout;
      }
    | {
          type: "REMOVE_SAVED_WORKOUT";
          payload: number;
      };

const initialState: WorkoutState = {
    todayPlan: [],
    savedWorkouts: [],
};

function workoutReducer(
    state: WorkoutState,
    action: WorkoutAction,
): WorkoutState {
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

interface WorkoutContextValue {
    state: WorkoutState;
    dispatch: React.Dispatch<WorkoutAction>;
}

const WorkoutContext = createContext<WorkoutContextValue | null>(null);

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(workoutReducer, initialState);

    return (
        <WorkoutContext.Provider value={{ state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    );
}

export function useWorkout() {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error("useWorkout must be used within a WorkoutProvider");
    }

    return context;
}
