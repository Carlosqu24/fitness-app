"use client"
import React from 'react'
import {
  authenticatedLinksList,
  unauthenticatedLinksList
} from '@/app/routes'
import Link from 'next/link'
import { useAuth } from '@/app/(modules)/authentication/(infrastucture)/(context)/AuthContext'
import { BUTTON_STYLES } from '@/app/(styles)'
import { COLORS } from '@/app/(styles)/variables'

const Navbar = () => {

  const navbarClassnames = `
      w-full 
      h-20

      lg:px-8

      bg-[#252525] 
      fixed
      flex 
      justify-between 
      items-center
      bottom-0
      lg:top-0
      lg:bottom-auto
      lg:relative
      lg:bg-transparent

      z-50
  `
  const { isLogged, signOut } = useAuth()

  return (
    <nav className={navbarClassnames}>
      <Link
        href="/"
        className='hidden lg:block mr-auto font-bold'
      >Fitness App</Link>

      <div 
        className='
        px-4
        sm:px-0
        m-auto
        lg:m-0
        container
          flex 
          justify-between 
          items-center
          lg:items-end
          w-full 
          lg:w-auto
        '>
        {
          isLogged
            ? authenticatedLinksList.map((link) => (
              <Link
                key={crypto.randomUUID()}
                className='text-[#fff] flex items-center justify-center hover:bg-[#212121] lg:hover:bg-[transparent] lg:hover:decoration-solid lg:hover:underline lg:hover:active:bg-[#7e679752] lg:mr-6'
                href={link.href}
              >
                <span className='hidden lg:inline'>{link.text}</span>
                <span className="material-symbols-outlined text-center lg:ml-3">
                  {link.symbolText}
                </span>
              </Link>
            ))
            : (
              <>
                <Link
                  href="/"
                  className='block lg:hidden mr-auto font-bold'
                >Fitness App</Link>
                {
                  unauthenticatedLinksList.map(link => (
                    <Link
                      key={crypto.randomUUID()}
                      className={`
                    p-2 
                    bg-[#D1A8FF] 
                    text-[#000] 
                    rounded-[6px] 
                    cursor-pointer 
              
                    ${BUTTON_STYLES}
                    bg-[${COLORS.PRIMARY}]
              
                    text-center
                  
                  `}
                      href={link.href}
                    >
                      <span className='lg:inline'>{link.text}</span>
                    </Link>

                  ))
                }
              </>
            )
        }
        {
          isLogged &&
            <Link
              href={"/"}
              className={`${BUTTON_STYLES} rounded-[6px]`}
              onClick={signOut}
            >Log Out</Link>
        }
      </div>
    </nav>
  )
}

export default Navbar