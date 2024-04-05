"use client"
import { DEFAULT_CARDS_STYLES, HEADINGS } from '@/app/(styles)/variables'
import React, { useState } from 'react'

interface ExercisesSelectionProps {
    groupedExercisesList: any
    selectedExercisesList: any[]
    handleSelectExercise: (exercise: any) => void
}

const ExercisesSelection = ({ 
    groupedExercisesList, selectedExercisesList, handleSelectExercise 
}: ExercisesSelectionProps) => {

    

    return (
        <div
            className='grid gap-4 grid-cols-1 lg:grid-cols-2 sm:gap-4'
        >
            <div>
                <h2 className={`mb-3 ${HEADINGS.H3} font-bold`}>Exercises Selection</h2>
                <div
                // className='grid gap-4 sm:grid-cols-2 sm:gap-4'
                >
                    {
                        groupedExercisesList.length > 0
                            ?
                            groupedExercisesList
                                .map(([category, exercises]: any[], index: any) => (
                                    <div key={index}>
                                        <h2 className='mt-8 mb-2 font-bold capitalize'>{category}</h2>
                                        <div className=''>
                                            {
                                                exercises.map((exercise: any, index: any) => (
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
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            : <h3>Loading...</h3>

                    }
                </div></div>
            <div>
                <h3 className={`mb-3 ${HEADINGS.H3} font-bold`}>Exercises Selected</h3>
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