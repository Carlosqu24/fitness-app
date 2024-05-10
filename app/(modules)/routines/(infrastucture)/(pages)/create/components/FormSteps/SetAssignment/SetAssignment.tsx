import React from 'react'
import { DEFAULT_CARDS_STYLES, HEADINGS } from '@/app/(styles)/variables'

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
            <h3 className={`${HEADINGS.H3} mb-2 font-bold`}>Set assignment</h3>

            <div

                className='grid gap-4 grid-cols-1 lg:grid-cols-2 sm:gap-4'

            >
                {
                    selectedExercisesList.map((exercise: any) => (
                        <div key={crypto.randomUUID()}
                            className={DEFAULT_CARDS_STYLES}
                        >
                            <h4 className={`${HEADINGS.H4} mb-2`}>{exercise.name}</h4>

                            <div>
                                <label htmlFor={`sets-id-${exercise.id}`}>Sets</label>
                                <input
                                    className='ml-3 text-center rounded-[6px] bg-[#3d3d3d] text-[#fff]'
                                    type="number"
                                    name={`sets-id-${exercise.id}`}
                                    min={0}
                                    value={exercise.sets}
                                    onChange={(event) => {
                                        handleInputSetAssignment(
                                            exercise, 
                                            event.target.value === "" 
                                                ? "0"
                                                : event.target.value
                                        )
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