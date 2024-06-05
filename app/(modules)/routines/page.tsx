"use client"

import React from 'react'
import RoutinesGrid from './(infrastucture)/components/ui/RoutinesGrid/RoutinesGrid'
import { HEADINGS } from '@/app/(styles)/variables'
import isAuth from '@/app/components/PrivateRoute/PrivateRoute'
import { BUTTON_STYLES } from '@/app/(styles)'
import Link from 'next/link'
import { useRoutines } from './(infrastucture)/(hooks)/RoutinesContext'

const Page = () => {

  const {resetRoutines} = useRoutines()

  const handleResetRoutines = () => {
    const res = prompt('Do you want to reset all the routines? Type "yes" to confirm.')

    if ( res?.toLocaleLowerCase() === "yes") {
      resetRoutines()
      alert('Routines reseted')
    }
  }

  return (
    <>
        <h2 className={`${HEADINGS.H1} font-bold`}>Routines</h2>

        <Link
          href={'/routines/create'}
          className={`${BUTTON_STYLES} mb-3 rounded-[6px] inline-block`}
        >
          Create Routine
        </Link>

        <button 
          className={`${BUTTON_STYLES} ml-3 rounded-[6px] bg-red-500 hover:bg-red-400`}
          onClick={handleResetRoutines}
        >
          Reset routines
        </button>

        <RoutinesGrid />
    </>
  )
}

export default isAuth(Page)