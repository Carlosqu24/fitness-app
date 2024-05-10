"use client"
import React from 'react'
import { HEADINGS } from '@/app/(styles)/variables'
import Link from 'next/link'

const VerifyYourAccount = () => {
    return (
        <>
            <h3 className={`${HEADINGS.H3} font-bold text-center mb-9`}>
                Verify your account
            </h3>
            <p className='text-center mb-3'>We have sent you an email with a <span className='bg-[#D1A8FF] text-[#000] p-1 rounded-[6px] font-bold'>magic link</span>.</p>
            <p className='text-center mb-9'>When you click on it, a new tab will open for this application, so once done you can close this.</p>
            {/* <Link className='underline decoration-solid decoration-[#D1A8FF] hover:text-[#D1A8FF] text-center block' href='/'>
                Maybe later
            </Link> */}
        </>
    )
}

export default VerifyYourAccount