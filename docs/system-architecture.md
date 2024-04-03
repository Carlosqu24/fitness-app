# System architecture diagrams


# Database Schema
## Supabase

Emails {
    id: uuid
    created_at: timestamp with timedate
    email: varchar
}

Exercises {
    id: uuid
    created_at: timestamp with timedate
    name: varchar
    targetMuscles: TargetMuscles
    averageAmountCaloriesBurn: number***
}

TargetMuscles {
    list: string[]
    main: string
}

# Entities

## Frontnend
Routine {
    id: string,
    name: string,
    description: string,
    totalExercisesCount: number,
    estimatedTime: number
    exercisesList: Exercise[]
    workoutSessionLogsList: WorkoutSessionLog[]

    // New
    frecuencyDaysList: ["Tuesday", "Sunday"]
}

That's not in a routine
DatabaseExercises {
    id: string
    name: string
    estimatedTime: number
    targetMuscles: DatabaseTargetMuscles
}

DatabaseTargetMuscles {
    list: string[]
    main: string
}

Exercise {
    id: string
    name: string
    estimatedTime: number
    sets: number
}

WorkoutSessionLog {
    id: string;
    date: string;
    exercises: WorkoutSessionExercise[];
}

WorkoutSessionExercise {
    id: string;
    name: string;
    sets: WorkoutSessionSet[]
}

WorkoutSessionSet {
    number: number;
    reps: number;
    weight: number;
    weightUnit: string;
}


# API Documentation