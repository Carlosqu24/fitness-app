import React from 'react'
import { CREATE_ROUTINE_STEPS } from '@/app/(modules)/routines/(domain)/entities' 
import { STEPPERFORM_BUTTONS_STYLES } from '../../../(styles)'

interface ButtonsGroupProps {
    step: number
    nextStep: () => void
    prevStep: () => void
    hasAnyExerciseBeenSelected: boolean
    hasAnyDayBeenSelected: boolean
    isMainInformationValid: boolean
    everyExerciseSetsWereChanged: boolean
    handleFinish: () => void

}

const ButtonsGroup = ({
    step,
    nextStep,
    prevStep,
    hasAnyExerciseBeenSelected,
    hasAnyDayBeenSelected,
    isMainInformationValid,
    everyExerciseSetsWereChanged,
    handleFinish,
}: ButtonsGroupProps) => {
    return (
        <div>
            {
                step > CREATE_ROUTINE_STEPS.MAIN_INFORMATION && (
                    <button
                        className={STEPPERFORM_BUTTONS_STYLES}
                        onClick={prevStep}
                    >Prev</button>
                )
            }

            {
                step !== CREATE_ROUTINE_STEPS.DAYS_FREQUENCY_SELECTION &&
                <button
                    className={STEPPERFORM_BUTTONS_STYLES}
                    onClick={() => {
                        (
                            step === CREATE_ROUTINE_STEPS.MAIN_INFORMATION && isMainInformationValid ||
                            step === CREATE_ROUTINE_STEPS.EXERCISES_SELECTION && hasAnyExerciseBeenSelected ||
                            step === CREATE_ROUTINE_STEPS.SET_ASSIGNMENT && everyExerciseSetsWereChanged ||
                            step === CREATE_ROUTINE_STEPS.DAYS_FREQUENCY_SELECTION && hasAnyDayBeenSelected
                        )
                            && nextStep()
                    }}
                >Next</button>
            }

            {
                step === CREATE_ROUTINE_STEPS.DAYS_FREQUENCY_SELECTION && (
                    <button
                        className={STEPPERFORM_BUTTONS_STYLES}
                        onClick={() => {
                            step === CREATE_ROUTINE_STEPS.DAYS_FREQUENCY_SELECTION &&
                                hasAnyDayBeenSelected &&
                                handleFinish()
                        }}
                    >Finish</button>
                )
            }
        </div>
    )
}

export default ButtonsGroup