"use client"
import React, { useContext } from 'react'
import { RoutinesContext } from '@/app/(modules)/routines/(infrastucture)/(hooks)/RoutinesContext'
import { formatDate } from '@/app/(helpers)/date'
import { HEADINGS } from '@/app/(styles)/variables'

const Page = ({ params }: any) => {

    const { routinesList } = useContext(RoutinesContext)

    const routineId = params.id
    const workoutSessionId = params.sessionId
    const currentRoutine = routinesList?.find(routine => routine.id === routineId)
    const currentWorkoutSession =
        currentRoutine?.workoutSessionLogsList?.find(session => session.id === workoutSessionId)

    return (
        <div>
            <h1 className={`${HEADINGS.H1} font-bold text-center md:text-left mb-6`}>{formatDate(currentWorkoutSession?.date)}</h1>

            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 text-center'>
                {currentWorkoutSession !== undefined && currentWorkoutSession.exercises.map((exercise) => (
                    <div key={exercise.id} className='flex flex-col mb-10'>
                        <h2 className={`${HEADINGS.H2} font-bold mb-6 md:text-left`}>{exercise.name}</h2>

                        {/* <div 
                            className='w-auto '
                        > */}
                            <h3 className='text-center md:text-left font-bold text-[28px] mb-3'>Sets</h3>

                            <ul>
                                {exercise.sets.map((set, index) => (
                                    <li key={index} className='mb-3 text-[22px] md:text-left'>
                                        <span className='font-bold'>{set.number}:</span> {set.formValues.reps} reps x {set.formValues.weight}{set.formValues.weightUnit} - {set.formValues.restTimeInMinutes} min
                                    </li>
                                ))}

                            </ul>
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page