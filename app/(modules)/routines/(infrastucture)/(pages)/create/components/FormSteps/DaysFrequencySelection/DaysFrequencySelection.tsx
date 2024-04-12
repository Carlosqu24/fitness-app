"use client"
import React, { useState } from 'react'
import { HEADINGS } from '@/app/(styles)/variables'

interface DaysFrequencySelectionProps {
  daysList: string[]
  selectedDaysList: string[]
  handleDayClick: (day: string) => void
}

const DaysFrequencySelection = (
  { daysList, selectedDaysList, handleDayClick }: DaysFrequencySelectionProps
) => {  
  return (
    <div>
      <h3 className={`mb-4 ${HEADINGS.H3} font-bold`}>Days Frequency Selection</h3>

      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4'>
      {
        daysList.map((day, index) => {

          const isSelected = selectedDaysList.includes(day)

          const bgColor = isSelected ? '#5C5168' : '#464646'

          return (
            <div 
            key={index} 
            className={`
              bg-[${bgColor}]
              hover:bg-[#5C5168] 
              border-solid 
              border-[1px] 
              border-[#B4ADEA] 
              text-[#fff] 
              text-center 
              font-bold 
              p-4 
              rounded-[6px]
            `}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default DaysFrequencySelection