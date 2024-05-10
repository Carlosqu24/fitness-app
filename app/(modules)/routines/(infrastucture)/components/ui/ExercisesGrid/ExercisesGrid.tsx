
import { Exercise } from '@/app/(modules)/routines/(domain)/entities'
import { EXERCISE_CARD_STYLES } from '@/app/(styles)'
import { HEADINGS } from '@/app/(styles)/variables'
import React from 'react'

interface Props {
exersisesList: Exercise[]
}

const ExercisesGrid = (props: Props) => {
    return (
        <>
            <h4 className={`${HEADINGS.H3} font-bold mb-1`}>Exercises</h4>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 w-full'>
                {
                    props.exersisesList.map(exercise => (
                        <div 
                            key={crypto.randomUUID()} 
                            className={`${EXERCISE_CARD_STYLES}`} 
                            style={{
                                border: "1px solid #535353",
                              }}    
                        >
                                <h3 className='inline font-bold'>{exercise.name}</h3>
                                {
                                    exercise.estimatedTime === 0 || exercise.estimatedTime === undefined
                                        ? <span className='text-[#d4cee8]'>No time estimation</span>
                                        : <span className='text-[#d4cee8]'>{exercise.estimatedTime} min</span>
                                }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ExercisesGrid