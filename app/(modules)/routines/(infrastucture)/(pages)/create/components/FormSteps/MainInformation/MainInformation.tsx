import React from 'react'

interface MainInformationProps {
    name: string
    description: string,
    handleInputChange: Function
}

const MainInformation = ({
    name, description, handleInputChange
}: MainInformationProps) => {
  return (
    <div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Test name"
                                required={true}
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Test description"
                                required={false}
                                value={description}
                                onChange={handleInputChange}
                            />
                        </div>
                    
                    </div>
  )
}

export default MainInformation