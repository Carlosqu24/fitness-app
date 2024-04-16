import React from 'react'
import { formatDate } from '@/app/(helpers)/date'
import { BUTTON_STYLES } from '@/app/(styles)'
import { DEFAULT_CARDS_STYLES } from '@/app/(styles)/variables'
import Accordion from '@/app/components/Accordion/Accordion'
import Modal from '@/app/components/Modal/Modal'

import { Routine } from '@/app/(modules)/routines/(domain)/entities'

interface PreviousWorkoutSessionsModalProps {
    routine: Routine;

}

const PreviousWorkoutSessionsModal = ({ routine }: PreviousWorkoutSessionsModalProps) => {
    return (
        <Modal
            openModalButton={
                <button className={`${BUTTON_STYLES} rounded-[6px]`}>
                    Prev workout sessions
                </button>
            }
        >
            <h1 className="text-2xl">Previous workout sessions</h1>

            <div className="grid gap-4 grid-cols-1">
                {
                    routine?.workoutSessionLogsList.map((workoutSession, index) => (

                        <Accordion
                            key={index}
                            className={`${DEFAULT_CARDS_STYLES} flex justify-between flex-col text-[#fff]`}
                            title={formatDate(workoutSession.date)}
                        >

                            {workoutSession.exercises.map((exercise) => (
                                <div key={exercise.id} className='flex flex-col mt-2'>
                                    <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
                                    {exercise.sets.map((set, index) => (
                                        <p key={index}>
                                            <strong>Set {set.number}:</strong> {set.formValues.reps} reps * {set.formValues.weight}{set.formValues.weightUnit} - {set.formValues.restTimeInMinutes} min
                                        </p>
                                    ))}
                                </div>
                            ))}

                        </Accordion>
                    ))
                }
            </div>
        </Modal>
    )
}

export default PreviousWorkoutSessionsModal