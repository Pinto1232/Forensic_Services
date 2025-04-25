
const RequestServiceForm = () => {
  const serviceOptions = [
    'Financial Audit',
    'Tax Consulting',
    'Estate Planning',
    'Trust Services',
    'Forensic Services',
  ];

  const referralOptions = [
    'Facebook',
    'X',
    'Instagram',
    'LinkedIn',
    'Online Publication',
    'Word Of Mouth',
  ];


  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center md:text-left">
          Request Service
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contact Number
                (Optional)
              </label>
              <input
                type="text"
                id="contactNumber"
                className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="selectService"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select Service
              </label>
              <div className="relative">
                <select
                  id="selectService"
                  className="w-full p-2 border-b border-gray-400 bg-transparent appearance-none focus:outline-none pr-8 cursor-pointer"
                >
                  <option value="">
                    -- Select Service --
                  </option>
                  {serviceOptions.map(
                    (option) => (
                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    )
                  )}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#c00000]">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="furtherInformation"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Further Information
              </label>
              <textarea
                id="furtherInformation"
                rows={4}
                className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none resize-none"
              ></textarea>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#c00000] mb-4">
                Where did you here about
                us?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-gray-700">
                {referralOptions.map(
                  (option) => (
                    <div
                      key={option}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={option
                          .replace(
                            /\s+/g,
                            '-'
                          )
                          .toLowerCase()}
                        className="mr-2 text-[#c00000] focus:ring-[#c00000] focus:ring-offset-gray-100 w-5 h-5 bg-gray-100"
                      />
                      <label
                        htmlFor={option
                          .replace(
                            /\s+/g,
                            '-'
                          )
                          .toLowerCase()}
                        className="cursor-pointer"
                      >
                        {option}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="w-full md:w-[304px] border border-gray-300 bg-white p-3 rounded-sm mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  id="notRobot"
                  required
                  className="mr-3 text-[#c00000] focus:ring-[#c00000] focus:ring-offset-white cursor-pointer w-5 h-5"
                />
                <label
                  htmlFor="notRobot"
                  className="text-sm select-none"
                >
                  I'm not a robot
                </label>
              </div>
              <div className="flex flex-col items-end text-right text-xs text-gray-500">
                <div className="w-8 h-8 bg-gray-300 mb-1 flex items-center justify-center text-gray-600 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001m0 0h-4.992m4.992 0 3.248-.99m3.177 2.445v-.001m-1.418 7.81m-4.99-.998l-.75 3.02A.75.75 0 0 0 3 20.25v-4.992m0 0h4.992m-4.993 0 3.248-.99m3.177 2.445h3.362m-1.455 8.41l.359-.359A.75.75 0 0 0 9.75 21H9a2.25 2.25 0 0 1-2.25-2.25V15m0 0v-.108A2.25 2.25 0 0 1 7.5 12.75H9.75m0 0a9.765 9.765 0 0 1 9.75 9.75v.001m-8.41-8.41l.359-.359A.75.75 0 0 0 21 14.25V15m0 0a2.25 2.25 0 0 1-2.25 2.25H15M15 15l-.36.359a.75.75 0 0 0-.234.651v3.362m0 0H9.75"
                    />
                  </svg>
                </div>
                <div>reCAPTCHA</div>
                <div>
                  Privacy - Terms
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start mb-8 text-sm text-gray-600">
            <input
              type="checkbox"
              id="consent"
              required
              className="mr-2 mt-1 text-[#c00000] focus:ring-[#c00000] focus:ring-offset-gray-100 cursor-pointer"
            />
            <label
              htmlFor="consent"
              className="cursor-pointer"
            >
              I have read the{' '}
              <a
                href="/privacy-policy"
                className="text-[#c00000] hover:underline font-bold"
              >
                Privacy Policy
              </a>{' '}
              and agree to its terms.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#c00000] hover:bg-[#a00000] text-white font-bold py-3 px-8 rounded cursor-pointer"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestServiceForm;