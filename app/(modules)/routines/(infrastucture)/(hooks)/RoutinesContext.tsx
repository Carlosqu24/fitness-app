"use client"

import useLocalStorage from '@/app/(hooks)/useLocalStorage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Routine } from '../../(domain)/entities';
import { fitnessAppContextInitialState } from '../../(domain)/data';

interface RoutinesContextData {
  routinesList: Routine[];
  setRoutinesList: (routine: any) => void;
  workoutSession: any;
  addRoutine: (routine: Routine) => void;
  addWorkoutSession: (newRoutinesList: Routine[]) => void;
  resetRoutines: () => void;
  deleteRoutineById: (id: string) => void
  // Add other actions as needed
}

// Create the context
export const RoutinesContext = createContext<RoutinesContextData>({
  routinesList: [],
  setRoutinesList: () => { },
  workoutSession: {},
  addRoutine: () => { },
  addWorkoutSession: () => { },
  resetRoutines: () => { },
  deleteRoutineById: (id: string) => { }
});

// Create a provider component
export const RoutinesProvider: React.FC<{ children: any }> = ({ children }) => {
  const [routinesList, setRoutinesList] = useState<Routine[]>([]);
  const [workoutSession, setworkoutSession] = useState<any>({});

  const {
    storedValue,
    setValue
  } = useLocalStorage("fitness-app", fitnessAppContextInitialState)

  useEffect(() => {
    setRoutinesList(storedValue.routinesList ?? []);
    setworkoutSession([]);
  }, [storedValue.routinesList]);

  const addRoutine = (routine: Routine) => {
    setRoutinesList((prevRoutines) => [...prevRoutines, routine]);
    setValue({
      ...storedValue,
      routinesList: [...storedValue.routinesList, routine]
    })
  };

  const deleteRoutineById = (routineId: string) => {
    const newRoutinesList = routinesList.filter(routine => routine.id !== routineId)
    
    setRoutinesList(newRoutinesList);
    setValue({
      ...storedValue,
      routinesList: newRoutinesList
    })
  }

  const addWorkoutSession = (newRoutinesList: Routine[]) => {
    setValue({
      ...storedValue,
      routinesList: newRoutinesList
    })
  }

  const resetRoutines = () => {
    setRoutinesList(fitnessAppContextInitialState.routinesList);
    setValue({
      ...storedValue,
      routinesList: fitnessAppContextInitialState.routinesList
    })
  }

  return (
    <RoutinesContext.Provider value={{
      routinesList,
      setRoutinesList,
      addRoutine,
      addWorkoutSession,
      workoutSession,
      resetRoutines,
      deleteRoutineById
    }}>
      {children}
    </RoutinesContext.Provider>
  );
};

// Create a custom hook to use the RoutinesContext
export const useRoutines = (): RoutinesContextData => {
  const context = useContext(RoutinesContext);
  if (!context) {
    throw new Error('useRoutines must be used within a RoutinesProvider');
  }
  return context;
};