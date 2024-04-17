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
            <h1 className={`${HEADINGS.H1} font-bold`}>{formatDate(currentWorkoutSession?.date)}</h1>

            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                {currentWorkoutSession !== undefined && currentWorkoutSession.exercises.map((exercise) => (
                    <div key={exercise.id} className='flex flex-col mt-2'>
                        <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
                        {exercise.sets.map((set, index) => (
                            <p key={index}>
                                <strong>Set {set.number}:</strong> {set.formValues.reps} reps * {set.formValues.weight}{set.formValues.weightUnit} - {set.formValues.restTimeInMinutes} min
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page