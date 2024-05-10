const Page = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Welcome, let&apos;s collect some data
        </h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <h3 className="text-lg font-bold mb-2">Physical Features</h3>
            <div className="sm:col-span-2 flex gap-6">
              <div className="w-1/2">
                <label
                  htmlFor="height"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  Height (m)
                </label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  step={".01"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="1.80"
                  required={true}
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Current Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  step={"1"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="82"
                  required={true}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="lifestyle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lifestyle
              </label>
              <select
                id="lifestyle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected={true}>Select lifestyle</option>
                <option value="Sedentary">Sedentary</option>
                <option value="Normal">Normal</option>
                <option value="Very Active">Very Active</option>
                <option value="Athlete">Athlete</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="goal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Goal
              </label>
              <select
                id="goal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected={true}>Select goal</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Fat Loss">Fat Loss</option>
              </select>
            </div>

            <h3 className="text-lg font-bold mb-2">Physical Goals</h3>

            <div className="flex sm:col-span-2 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="weight-goal"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Weight Goal (kg)
                </label>
                <input
                  type="number"
                  name="weight-goal"
                  id="weight-goal"
                  step={".01"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter weight goal"
                  required={true}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="date-range"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Expected Date Range to Achieve Goal
                </label>
                <input
                  type="date"
                  name="date-range"
                  id="date-range"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter date range"
                  required={true}
                />
              </div>
            </div>

            <span className="text-gray-400 text-sm font-light">
              ** Can be more realistic with IA
            </span>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Information
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
