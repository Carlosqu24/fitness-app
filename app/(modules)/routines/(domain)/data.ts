import { Exercise, FitnessAppContext, Routine, SessionForm, WorkoutSessionLog } from "./entities"

export const routinesList: Routine[] = [
  {
    id: 'c1024c29-cca3-48c2-87ea-408946301c44',
    name: "Best chest for motherfuckers",
    description: "Description 1",
    totalExercisesCount: 3,
    "estimatedCaloriesToBurn": 110,
    estimatedTime: 35,
    exercisesList: [
      {
        id: "bf48666a-6686-4457-bc57-f619e70089ec",
        name: "Diamond push-ups",
        estimatedTime: 1,
        sets: 4
      },
      {
        id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
        name: "Standard push-ups",
        estimatedTime: 1,
        sets: 4
      }
    ],
    workoutSessionLogsList: [
      {
        id: "998898998",
        date: "2024-02-03T18:25:14.113Z",
        exercises: [
          {
            id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
            name: "Standard push-ups",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },
          {
            id: "bf48666a-6686-4457-bc57-f619e70089ec",
            name: "Diamond push-ups",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },
        ]
      }
    ]
  },
  {
    id: '6591d7b6-c474-4af7-8e39-6af946ad3f01',
    name: "Back",
    description: "Description 2",
    totalExercisesCount: 5,
    "estimatedCaloriesToBurn": 145,
    estimatedTime: 90,
    exercisesList: [
      {
        id: "8da7ff15-f1e7-43d5-affa-56da5ce972b0",
        name: "Standard pull-ups",
        estimatedTime: 1,
        sets: 4
      },
      {
        id: "7f65183c-b28b-47d1-8000-4716c59fda2c",
        name: "Deadlift",
        estimatedTime: 1,
        sets: 4
      }
    ],
    workoutSessionLogsList: [
      {
        id: "423312",
        date: "2024-02-03T18:25:14.113Z",
        exercises: [
          {
            id: "8da7ff15-f1e7-43d5-affa-56da5ce972b0",
            name: "Standard pull-ups",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },
          {
            id: "7f65183c-b28b-47d1-8000-4716c59fda2c",
            name: "Deadlift",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },
        ]
      }
    ]
  },
  {
    id: '0118b9ea-6bc4-413e-99d5-dec09becf464',
    name: "Arms",
    description: "Description 3",
    totalExercisesCount: 9,
    "estimatedCaloriesToBurn": 130,
    estimatedTime: 73,
    exercisesList: [
      {
        id: "f71fa536-5bb4-4c2c-9ec1-3d8075a64cfd",
        name: "Biceps curl",
        estimatedTime: 1,
        sets: 4
      },
      {
        id: "73dfaa6a-80b2-48cd-a707-3abca6e6d431",
        name: "Triceps extensions",
        estimatedTime: 1,
        sets: 4
      }
    ],
    workoutSessionLogsList: [
      {
        id: "998898998",
        date: "2024-02-03T18:25:14.113Z",
        exercises: [
          {
            id: "3123123123",
            name: "Standard bench press",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },
          {
            id: "3123123123",
            name: "Incline bench press",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },
          {
            id: "3123123123",
            name: "Pecs flys",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },
          {
            id: "3123123123",
            name: "Pecs extensions",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          }
        ]
      }
    ]
  },
  {
    id: '006de385-db01-4f3d-b647-037e69e11a42',
    name: "Legs",
    description: "Description 4",
    totalExercisesCount: 5,
    "estimatedCaloriesToBurn": 196,
    estimatedTime: 54,
    exercisesList: [
      {
        id: "57f3d30d-20dc-41d9-aca8-1f8405286942",
        name: "Squats",
        estimatedTime: 1,
        sets: 4
      },
      {
        id: "b84c35c3-b489-4b00-8a46-e8ec8fb4c88e",
        name: "Lunges",
        estimatedTime: 1,
        sets: 4
      }
    ],
    workoutSessionLogsList: [
      {
        id: "998898998",
        date: "2024-02-03T18:25:14.113Z",
        exercises: [
          {
            id: "57f3d30d-20dc-41d9-aca8-1f8405286942",
            name: "Squats",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },
          {
            id: "b84c35c3-b489-4b00-8a46-e8ec8fb4c88e",
            name: "Lunges",
            sets: [{
              number: 1,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }, {
              number: 2,
              formValues: {
                reps: 10,
                weight: 1000,
                weightUnit: "kg",
                restTimeInMinutes: 1
              }
            }]
          },

        ]
      }
    ]
  },
]

export const routine = {
  id: 'c1024c29-cca3-48c2-87ea-408946301c44',
  name: "Best chest for motherfuckers",
  description: "Description 1",
  totalExercisesCount: 3,
  estimatedTime: 35,
  exercisesList: [
    {
      id: "bf48666a-6686-4457-bc57-f619e70089ec",
      name: "Diamond push-ups",
      estimatedTime: 1
    },
    {
      id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
      name: "Standard push-ups",
      estimatedTime: 1
    }
  ]
}

export const exercisesList: Exercise[] = [
  {
    id: "8da7ff15-f1e7-43d5-affa-56da5ce972b0",
    name: "Standard pull-ups",
    estimatedTime: 1,
    sets: 4
  },
  {
    id: "7f65183c-b28b-47d1-8000-4716c59fda2c",
    name: "Deadlift",
    estimatedTime: 1,
    sets: 4
  },
  {
    id: "f71fa536-5bb4-4c2c-9ec1-3d8075a64cfd",
    name: "Biceps curl",
    estimatedTime: 1,
    sets: 4
  },
  {
    id: "73dfaa6a-80b2-48cd-a707-3abca6e6d431",
    name: "Triceps extensions",
    estimatedTime: 1,
    sets: 4
  },
  {
    id: "57f3d30d-20dc-41d9-aca8-1f8405286942",
    name: "Squats",
    estimatedTime: 1,
    sets: 4
  },
  {
    id: "b84c35c3-b489-4b00-8a46-e8ec8fb4c88e",
    name: "Lunges",
    estimatedTime: 1,
    sets: 4
  },
  {
    id: "bf48666a-6686-4457-bc57-f619e70089ec",
    name: "Diamond push-ups",
    estimatedTime: 1,
    sets: 4
  },
  {
    id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
    name: "Standard push-ups",
    estimatedTime: 1,
    sets: 4
  }
]

export const fitnessAppContextInitialState: FitnessAppContext = {
  "routinesList": [
    {
      "id": "c1024c29-cca3-48c2-87ea-408946301c44",
      "name": "Chest",
      "description": "Description 1",
      "totalExercisesCount": 2,
      "estimatedTime": 6,
      "estimatedCaloriesToBurn": 110,
      "exercisesList": [
        {
          "id": "bf48666a-6686-4457-bc57-f619e70089ec",
          "name": "Diamond push-ups",
          "estimatedTime": 1,
          "sets": 4
        },
        {
          "id": "d1a970ec-4f9a-44bb-b382-563f9946dc23",
          "name": "Standard push-ups",
          "estimatedTime": 1,
          "sets": 4
        }
      ],
      "workoutSessionLogsList": []
    }, {
      "id": "5ae8f0e1-d8be-4c1e-8ac6-22d06df8eea4",
      "name": "Back",
      "description": "Description 2",
      "totalExercisesCount": 2,
      "estimatedCaloriesToBurn": 145,
      "estimatedTime": 6,
      "exercisesList": [
        {
          "id": "a0d6630f-197d-4589-8033-44f74c485525",
          "name": "Pull ups",
          "estimatedTime": 1,
          "sets": 4
        },
        {
          "id": "a78ddf76-ea99-47aa-af9c-181151ac177f",
          "name": "Deadlift",
          "estimatedTime": 1,
          "sets": 4
        }
      ],
      "workoutSessionLogsList": []
    },
    {
      "id": "2c2b46d8-c8f2-4c76-982b-4da10f6802ea",
      "name": "Arms",
      "description": "Description 2",
      "totalExercisesCount": 4,
      "estimatedCaloriesToBurn": 130,
      "estimatedTime": 16,
      "exercisesList": [
        {
          "id": "17aba683-a80b-4ad4-bfef-711cc5ca4da7",
          "name": "Biceps curl",
          "estimatedTime": 1,
          "sets": 4
        },
        {
          "id": "2d320cdb-86b5-4985-9634-e8b37b9b2218",
          "name": "Hammer curl",
          "estimatedTime": 1,
          "sets": 4
        },
        {
          "id": "237c583d-ab42-4b6e-8e2d-60349bfe6b13",
          "name": "Triceps extensions",
          "estimatedTime": 1,
          "sets": 4
        },
        {
          "id": "2dab7a85-1220-46c8-8dcb-c3c7bb099448",
          "name": "Skull crusher",
          "estimatedTime": 1,
          "sets": 4
        }
      ],
      "workoutSessionLogsList": []
    }
  ],
  "recipesList": []
}

export const fitnessAppContextMinimalState: FitnessAppContext = {
  "routinesList": [
    {
      "id": "c1024c29-cca3-48c2-87ea-408946301c44",
      "name": "Chest",
      "description": "Description 1",
      "totalExercisesCount": 3,
      "estimatedCaloriesToBurn": 110,
      "estimatedTime": 35,
      "exercisesList": [
        {
          "id": "bf48666a-6686-4457-bc57-f619e70089ec",
          "name": "Diamond push-ups",
          "estimatedTime": 1,
          "sets": 4
        },
        {
          "id": "d1a970ec-4f9a-44bb-b382-563f9946dc23",
          "name": "Standard push-ups",
          "estimatedTime": 1,
          "sets": 4
        }
      ],
      "workoutSessionLogsList": []
    },
  ],
  "recipesList": []
}

export const fitnessAppContextEmptyState: FitnessAppContext = {
  "routinesList": [],
  "recipesList": []
}

export const sessionFormInitialState: SessionForm = {
  reps: 0,
  weight: 0,
  weightUnit: "kg",
  restTimeInMinutes: 0,
}

export const workoutSessionInitialState: WorkoutSessionLog = {
  id: crypto.randomUUID(),
  date: new Date().toISOString(),
  exercises: [],
}

export const INITIAL_SET = 1