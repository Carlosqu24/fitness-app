"use client"
import { DEFAULT_CARDS_STYLES } from '@/app/(styles)/variables'
import React, { useState } from 'react'

interface ExercisesSelectionProps {
    groupedExercisesList: any
}

const ExercisesSelection = ({ groupedExercisesList }: ExercisesSelectionProps) => {

    const [selectedExercisesList, setSelectedExercisesList] = useState<any[]>([])

    const handleSelectExercise = (exercise: string) => {
        setSelectedExercisesList([...new Set( [...selectedExercisesList, exercise] ) ])
    }

    return (
        <div
            className='grid gap-4 sm:grid-cols-2 sm:gap-4'
        >
            <div>
                <h2 className='mb-3'>ExercisesSelection</h2>
                <div
                    // className='grid gap-4 sm:grid-cols-2 sm:gap-4'
                >
                    {
                        groupedExercisesList
                            .map(([category, exercises]: any[], index: any) => (
                                <div key={index}>
                                    <h2 className='mt-8 mb-2 font-bold capitalize'>{category}</h2>
                                    <div className=''>
                                        {exercises.map((exercise: any, index: any) => (
                                            <div key={index}
                                                className={`
                                                    ${DEFAULT_CARDS_STYLES} 
                                                    mt-4 
                                                `}
                                                onClick={() => handleSelectExercise(exercise)}
                                            >
                                                {/* Render the exercise data here */}
                                                <p>{exercise.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                </div></div>
            <div>
                <h3 className='mb-3'>Selected</h3>
                <div className='grid gap-4 sm:grid-cols-1 sm:gap-4'>
                    {
                        selectedExercisesList.length > 0
                            ? selectedExercisesList.map((exercise, index) => (
                                <div key={index}
                                    className={`${DEFAULT_CARDS_STYLES}`}
                                >{exercise.name}</div>
                            ))
                            : <h3>No exercises selected</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default ExercisesSelection