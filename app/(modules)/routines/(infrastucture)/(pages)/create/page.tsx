"use client"
import React from 'react'
import useStepperForm from '@/app/(hooks)/useStepperForm'

enum CREATE_ROUTINE_STEPS {
    EXERCISES_SELECTION = 0,
    DAYS_FREQUENCY_SELECTION = 1,
}

const page = () => {

    const {
        step, 
        nextStep, 
        prevStep
    } = useStepperForm()

  return (
    <div>
        <h2>CREATE ROUTINE FORM</h2>

        {
            step === CREATE_ROUTINE_STEPS.EXERCISES_SELECTION && (
                <div>
                    <h3>EXERCISES SELECTION</h3>
                    <p>Here you will select the exercises for your routine</p>
                </div>
            )
        }

        {
            step === CREATE_ROUTINE_STEPS.DAYS_FREQUENCY_SELECTION && (
                <div>
                    <h3>DAYS FREQUENCY SELECTION</h3>
                    <p>Here you will select the days for your routine</p>
                </div>
            )
        }

        <button
            onClick={nextStep}
        >next</button>
    </div>
  )
}

export default page