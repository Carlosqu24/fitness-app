import React from 'react'
import { DEFAULT_CARDS_STYLES } from '@/app/(styles)/variables'

interface SetAssignmentProps {
    selectedExercisesList: any[]
    handleInputSetAssignment: Function
}

const SetAssignment = ({
    selectedExercisesList,
    handleInputSetAssignment
}: SetAssignmentProps) => {
    return (
        <>
            <h3>Set assignment</h3>

            <div

                className='grid gap-4 grid-cols-1 lg:grid-cols-2 sm:gap-4'

            >
                {
                    selectedExercisesList.map((exercise: any) => (
                        <div key={crypto.randomUUID()}
                            className={DEFAULT_CARDS_STYLES}
                        >
                            <h4>{exercise.name}</h4>

                            <div>
                                <label>Sets</label>
                                <input
                                    type="number"
                                    name={`sets-id-${exercise.id}`}
                                    value={exercise.sets}
                                    onChange={(event) => {
                                        handleInputSetAssignment(exercise, event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SetAssignment