"use client"

import React from 'react'
import RoutinesGrid from './(infrastucture)/components/ui/RoutinesGrid/RoutinesGrid'
import { HEADINGS } from '@/app/(styles)/variables'
import isAuth from '@/app/components/PrivateRoute/PrivateRoute'
import { BUTTON_STYLES } from '@/app/(styles)'
import Link from 'next/link'

const page = () => {
  return (
    <>
        <h2 className={`${HEADINGS.H1} font-bold`}>Routines</h2>

        <Link
          href={'/routines/create'}
          className={`${BUTTON_STYLES} mb-3 rounded-[6px] inline-block`}
        >
          Create Routine
        </Link>

        <RoutinesGrid />
    </>
  )
}

export default isAuth(page)