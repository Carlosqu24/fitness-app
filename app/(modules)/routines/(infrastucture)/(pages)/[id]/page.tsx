"use client"

import React, { useContext } from 'react'
import ExercisesGrid from '../../components/ui/ExercisesGrid/ExercisesGrid'
import Link from 'next/link'
import { BUTTON_STYLES, START_WORKOUT_SESSION_BUTTON_STYLES } from '@/app/(styles)'
import { HEADINGS } from '@/app/(styles)/variables'
import { RoutinesContext } from '../../(hooks)/RoutinesContext'
import WorkoutSessionsGrid from '../../components/ui/WorkoutSessionsGrid/WorkoutSessionsGrid'

import START_WORKOUT_SESSION_ICON from '@/app/(assets)/startWorkoutSession.svg'
import Image from 'next/image'
import isAuth from '@/app/components/PrivateRoute/PrivateRoute'
import { useRouter } from 'next/navigation'

const Page = ({ params }: any) => {

  const { routinesList, deleteRoutineById } = useContext(RoutinesContext)
  const router = useRouter()

  const workoutSessionLogsList =
    routinesList
      ?.find(routine => routine.id === params.id)
      ?.workoutSessionLogsList
    ?? []

  const routine =
    routinesList
      ?.find(routine => routine.id === params.id)

  const exercisesListFiltered =
    routine
      ?.exercisesList
    ?? []

    const handleDeleteRoutine = () => {
      const res = prompt('Do you want to delete this routine? Type "yes" to confirm.')

      if ( res?.toLocaleLowerCase() === "yes") {
        deleteRoutineById(params.id)
        alert('Routine deleted')
        router.push('/routines')
      }
    }

  return (
    <>
      <h2 className={`${HEADINGS.H1} font-bold mt-6 mb-10`}>{routine?.name}</h2>

      <div className='mb-12 flex items-center'>
        <Link
          href={`/routines/${params.id}/session/${crypto.randomUUID()}`}
          className={`
            ${START_WORKOUT_SESSION_BUTTON_STYLES}
            mr-auto
          `}
          style={{ borderRadius: '50%'}}
        >
          <Image
            src={START_WORKOUT_SESSION_ICON} 
            alt="Start workout session icon" 
            className={`flex font-bold`}
            width={32}
          />
        </Link>

        <div className='flex flex-col items-center justify-center lg:flex-row'>
          <span className='ml-auto lg:mr-5 text-[22px] lg:text-[24px]'>{routine?.estimatedCaloriesToBurn ?? 0} calories 🔥</span>
          {
            routine?.estimatedTime === 0 
              ? <span className='text-[22px] lg:text-[24px]'>No time estimation</span>
              : <span className='text-[22px] lg:text-[24px]'>{routine?.estimatedTime} min 🕙</span>
          }

          <button
            className={`${BUTTON_STYLES} ml-8 rounded-[6px] bg-red-500 hover:bg-red-400`}
            onClick={()=> {
              handleDeleteRoutine()
            }}
          >Delete</button>
        </div>
      </div>

      <ExercisesGrid
        exersisesList={exercisesListFiltered}
      />

      <WorkoutSessionsGrid routineId={routine?.id ?? ""} workoutSessionsList={workoutSessionLogsList} />
    </>
  )
}

export default isAuth(Page)