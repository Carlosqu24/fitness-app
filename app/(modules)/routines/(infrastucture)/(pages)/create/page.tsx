"use client"
import React, { useEffect, useState } from 'react'
import useStepperForm from '@/app/(hooks)/useStepperForm'
import ExercisesSelection from './components/FormSteps/ExercisesSelection/ExercisesSelection'
import DaysFrequencySelection from './components/FormSteps/DaysFrequencySelection/DaysFrequencySelection'
import { supabase } from '@/app/(config)/supabase'
import { groupExercisesList } from '../../utils/utils'
import { STEPPERFORM_BUTTONS_STYLES } from './(styles)'
import { HEADINGS } from '@/app/(styles)/variables'

import { useRouter } from 'next/navigation'
import ButtonsGroup from './components/FormSteps/ButtonsGroup/ButtonsGroup'
import { useRoutines } from '../../(hooks)/RoutinesContext'
import { useForm } from '@/app/(hooks)/useForm'

export enum CREATE_ROUTINE_STEPS {
    MAIN_INFORMATION = 0,
    EXERCISES_SELECTION = 1,
    DAYS_FREQUENCY_SELECTION = 2,
}

const page = () => {
    const [groupedExercisesList, setGroupedExercisesList] = useState<any[]>([])

    const router = useRouter()

    const { values: formValues, handleInputChange } = useForm<{name: string, description: string}>({
        name: '',
        description: ''
    })


    const {
        step,
        nextStep,
        prevStep,
    } = useStepperForm()

    const { addRoutine } = useRoutines()

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

    const [selectedExercisesList, setSelectedExercisesList] = useState<any[]>([])

    const handleSelectExercise = (exercise: string) => {
        setSelectedExercisesList([...new Set([...selectedExercisesList, exercise])])
    }

    const hasAnyExerciseBeenSelected = selectedExercisesList.length > 0


    // Frequency Days Selection
    const daysList = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

    const [selectedDays, setSelectedDays] = useState([]);

    const handleDayClick = (day: any) => {
        setSelectedDays((prevDays: any) => {
            if (prevDays.includes(day)) {
                // If the day is already selected, unselect it
                return prevDays.filter((d: any) => d !== day);
            } else {
                // If the day is not selected, select it
                return [...prevDays, day];
            }
        });
    };

    const hasAnyDayBeenSelected = selectedDays.length > 0


    const handleFinish = () => {
        alert('Routine created')

        addRoutine({
            // days: selectedDays
            id: crypto.randomUUID(),
            name: formValues.name,
            description: formValues.description,
            totalExercisesCount: 0,
            estimatedCaloriesToBurn: 0,
            estimatedTime: 0,
            exercisesList: selectedExercisesList,
            workoutSessionLogsList: []
        })
        
        router.push('/routines')
    }

    const isMainInformationValid = formValues.name !== ''

    return (
        <div>
            <h2 className={`mb-3 ${HEADINGS.H2} font-bold`}>Create Routine</h2>

            {
                step === CREATE_ROUTINE_STEPS.MAIN_INFORMATION && (
                    <div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Test name"
                                required={true}
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Test description"
                                required={false}
                                value={formValues.description}
                                onChange={handleInputChange}
                            />
                        </div>
                    
                    </div>
                )
            }

            {
                step === CREATE_ROUTINE_STEPS.EXERCISES_SELECTION && (
                    <ExercisesSelection
                        groupedExercisesList={groupedExercisesList}
                        selectedExercisesList={selectedExercisesList}
                        handleSelectExercise={handleSelectExercise}
                    />
                )
            }

            {
                step === CREATE_ROUTINE_STEPS.DAYS_FREQUENCY_SELECTION && (
                    <DaysFrequencySelection
                        daysList={daysList}
                        selectedDaysList={selectedDays}
                        handleDayClick={handleDayClick}
                    />
                )
            }

            <ButtonsGroup
                step={step}
                nextStep={nextStep}
                prevStep={prevStep}
                hasAnyExerciseBeenSelected={hasAnyExerciseBeenSelected}
                hasAnyDayBeenSelected={hasAnyDayBeenSelected}
                isMainInformationValid={isMainInformationValid}
                handleFinish={handleFinish}
            />
        </div>
    )
}

export default page