"use client"
import { useState } from 'react';

const useStepperForm = (initialStep = 0) => {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep > 0 ? prevStep - 1 : 0);
  const resetStep = () => setStep(initialStep);

  return { step, nextStep, prevStep, resetStep };
};

export default useStepperForm;