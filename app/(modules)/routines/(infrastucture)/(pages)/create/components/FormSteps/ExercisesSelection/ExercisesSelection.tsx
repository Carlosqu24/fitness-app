"use client"
import { DEFAULT_CARDS_STYLES } from '@/app/(styles)/variables'
import React, { useState } from 'react'

const ExercisesSelection = () => {

    const [selectedExercisesList, setSelectedExercisesList] = useState<any[]>([])

    const list = [
        "Bench press",
        "Incline bench press",
        "Biceps curl",
        "Triceps extension",
    ]

    const handleSelectExercise = (exercise: string) => {
        setSelectedExercisesList([...selectedExercisesList, exercise])
    }

    console.log({ selectedExercisesList })

    return (
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-4'>
            <div>
                <h2 className='mb-3'>ExercisesSelection</h2>
                <div className='grid gap-4 sm:grid-cols-2 sm:gap-4'>
                    {
                        list.map((exercise, index) => (
                            <div key={index}
                                className={`${DEFAULT_CARDS_STYLES}`}
                                onClick={() => handleSelectExercise(exercise)}
                            >{exercise}</div>
                        ))
                    }
                </div></div>
            <div>
                <h3 className='mb-3'>Selected</h3>
                <div className='grid gap-4 sm:grid-cols-1 sm:gap-4'>
                    {
                        selectedExercisesList.length > 0
                            ? selectedExercisesList.map((exercise, index) => (
                                <div key={index}
                                    className={`${DEFAULT_CARDS_STYLES}`}
                                >{exercise}</div>
                            ))
                            : <h3>No exercises selected</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default ExercisesSelection