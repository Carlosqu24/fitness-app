import Link from "next/link"
import { BUTTON_STYLES } from "./(styles)"
import { COLORS } from "./(styles)/variables"

const ROUTES = {
    HOME: '/',
    ROUTINES: '/routines',
    PROFILE: '/profile'

}

export const unauthenticatedLinksList = [
    <Link
        className={`
            p-2 
            bg-[#D1A8FF] 
            text-[#000] 
            rounded-[6px] 
            cursor-pointer 
                   
            ${BUTTON_STYLES}
            bg-[${COLORS.PRIMARY}]
            `} 
        href={ROUTES.HOME}
    >
        <span className='hidden lg:inline'>Create an account</span>
        {/* <span className="material-symbols-outlined text-center lg:ml-3">
                    home
                  </span> */}
    </Link>
]

export const authenticatedLinksList = [
    <Link 
        className='text-[#fff] flex items-center justify-center hover:bg-[#212121] lg:hover:bg-[transparent] lg:hover:decoration-solid lg:hover:underline lg:hover:active:bg-[#7e679752] lg:mr-6' 
        href={ROUTES.HOME}
    >
        <span className='hidden lg:inline'>Home</span>
        <span className="material-symbols-outlined text-center lg:ml-3">
            home
        </span>
    </Link>,
    <Link 
        className='text-[#fff] flex items-center justify-center hover:bg-[#212121] lg:hover:bg-[transparent] lg:hover:decoration-solid lg:hover:underline lg:hover:active:bg-[#7e679752] lg:mr-6' 
        href={ROUTES.ROUTINES}
    >
        <span className='hidden lg:inline'>Routines</span>
        <span className="material-symbols-outlined text-center lg:ml-3">
            fitness_center
        </span>
    </Link>,
    // <Link className='text-[#fff] flex items-center justify-center hover:bg-[#212121] lg:hover:bg-[transparent] lg:hover:decoration-solid lg:hover:underline lg:hover:active:bg-[#7e679752]' href="/recipes">
    //   <span className='hidden lg:inline'>Profile</span>  
    //   <span className="material-symbols-outlined text-center lg:ml-3">
    //     person
    //   </span>
    // </Link>
]