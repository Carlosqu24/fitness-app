"use client"
import React, { useEffect, useState } from 'react'
import useStepperForm from '@/app/(hooks)/useStepperForm'
import ExercisesSelection from './components/FormSteps/ExercisesSelection/ExercisesSelection'
import DaysFrequencySelection from './components/FormSteps/DaysFrequencySelection/DaysFrequencySelection'
import { supabase } from '@/app/(config)/supabase'
import { groupExercisesList } from '../../utils/utils'
import { STEPPERFORM_BUTTONS_STYLES } from './(styles)'

enum CREATE_ROUTINE_STEPS {
    EXERCISES_SELECTION = 0,
    DAYS_FREQUENCY_SELECTION = 1,
}

const page = () => {
    const [groupedExercisesList, setGroupedExercisesList] = useState<any[]>([])

    const {
        step,
        nextStep,
        prevStep
    } = useStepperForm()

    const handleGetExercisesData = async () => {
        const { data } = await supabase.from('Exercises').select()

        const groupedExercises = groupExercisesList(data)

        setGroupedExercisesList(Object.entries(groupedExercises || {}))
    }

    const handleData = async () => {
        handleGetExercisesData()
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <div>
            <h2>CREATE ROUTINE FORM</h2> 

            {
                step === CREATE_ROUTINE_STEPS.EXERCISES_SELECTION && (
                    <ExercisesSelection 
                        groupedExercisesList={groupedExercisesList}
                    />
                )
            }

            {
                step === CREATE_ROUTINE_STEPS.DAYS_FREQUENCY_SELECTION && (
                    <DaysFrequencySelection />
                )
            }

            {
                step > CREATE_ROUTINE_STEPS.EXERCISES_SELECTION && (
                    <button
                        className={STEPPERFORM_BUTTONS_STYLES}
                        onClick={prevStep}
                    >Prev</button>
                )
            }

            <button
                className={STEPPERFORM_BUTTONS_STYLES}
                onClick={nextStep}
            >Next</button>
        </div>
    )
}

export default page