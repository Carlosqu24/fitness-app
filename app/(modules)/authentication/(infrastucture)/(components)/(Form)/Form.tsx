"use client"
import React from 'react'
import { useState } from 'react'
import TypeEmail from '../(TypeEmail)/TypeEmail';
import { BUTTON_STYLES } from '@/app/(styles)';

import TypePassword from '../(TypePassword)/TypePassword';
import { useAuth } from '../../(context)/AuthContext';
import VerifyYourAccount from '../VerifyYourAccount/VerifyYourAccount';
import { usePathname } from 'next/navigation';

const LOG_IN_FORM_STEPS = {
  TYPE_EMAIL: 'TYPE_EMAIL',
  // CHECK_EMAIL: 'CHECK_EMAIL',
  VERIFY_ACCOUNT: "VERIFY_ACCOUNT",
}

const SIGN_UP_FORM_STEPS = {
  PERSONAL_INFORMATION: "PERSONAL_INFORMATION",
  VERIFY_ACCOUNT: "VERIFY_ACCOUNT",
}

const Form = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [receiveEmails, setReceiveEmails] = useState(false);

  const pathname = usePathname();

  const isLogIn = pathname.includes('login');
  
  const isSignUp = !isLogIn

  const [currentFormStep, setCurrentFormStep] =
    useState(
      isLogIn
        ? LOG_IN_FORM_STEPS.TYPE_EMAIL
        : SIGN_UP_FORM_STEPS.PERSONAL_INFORMATION
    );

  const {
    signUp,
    logInWithoutPassword
  } = useAuth()

  const handleSendSignInLink = async (e: any) => {
    e.preventDefault()

    logInWithoutPassword(email);

    setCurrentFormStep(LOG_IN_FORM_STEPS.VERIFY_ACCOUNT);
  }

  const handleSignUp = async (e: any) => {
    e.preventDefault()

    signUp(email, password);
    setCurrentFormStep(SIGN_UP_FORM_STEPS.VERIFY_ACCOUNT);
  }

  const handleNextStep = () => {}

  const handleSubmit = (e: any) => {}

  return (
    <>
      {
        currentFormStep !== SIGN_UP_FORM_STEPS.VERIFY_ACCOUNT
          ?
          <form
            className='
          flex 
          flex-col 
          lg:w-[50%]
          w-[100%] 
          p-5 
          m-auto 
          bg-[#444444] 
          border 
          border-solid 
          border-[#5b5b5b] 
          rounded-[6px]
        '
            onSubmit={handleSubmit}
          >

            {
              currentFormStep === LOG_IN_FORM_STEPS.TYPE_EMAIL &&
              <>
                <TypeEmail
                  email={email}
                  handleInputChange={(e: any) => setEmail(e)}
                  handleNextStep={handleNextStep}
                />

                <button
                  className={`p-2 ${BUTTON_STYLES} mb-5 rounded-[6px]`}
                  onClick={handleSendSignInLink}
                >Send sign in link</button>
              </>

            }

            {
              isLogIn && currentFormStep === LOG_IN_FORM_STEPS.VERIFY_ACCOUNT &&
              <VerifyYourAccount/>
            }

            {
              isSignUp && currentFormStep === SIGN_UP_FORM_STEPS.PERSONAL_INFORMATION &&
              <>
                <TypeEmail
                  email={email}
                  handleInputChange={(e: any) => setEmail(e)}
                  handleNextStep={handleNextStep}
                />

                {/* <TypeNameInput
              name={name}
              handleInputChange={(e: any) => setName(e)}
            /> */}

                <TypePassword
                  password={password}
                  handleInputChange={(e: any) => setPassword(e)}
                />

                <div className="form-group mb-5">
                  <label className='mr-4'>
                    Do you want to receive emails of new releases?
                  </label>
                  <input
                    type="checkbox"
                    checked={receiveEmails}
                    onChange={e => setReceiveEmails(e.target.checked)} />
                </div>

                <button
                  className={`p-2 ${BUTTON_STYLES} mb-5 rounded-[6px]`}

                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </>

            }

            <p className='text-center mt-6'>
              {
                isLogIn
                  ? <>{`Don't have an account?`} <a className='underline decoration-solid decoration-[#D1A8FF] hover:text-[#D1A8FF]' href="/authentication/sign-up">Sign Up</a></>
                  : <>Have an account? <a className='underline decoration-solid bg-[#D1A8FF] text-[#000] p-2 rounded-[6px] ml-2 font-bold' href="/authentication/login">Log In</a></>
              }
            </p>
          </form>
          : <VerifyYourAccount/>
      }
    </>
  )
}

export default Form