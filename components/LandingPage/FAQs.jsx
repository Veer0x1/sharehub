import React from "react";

const FAQs = () => {
  return (
    <div>
      <h2 className="text-center pt-24 pb-6 text-2xl font-semibold sm:text-4xl bg-green-50 dark:bg-black">Frequently Asked Questions</h2>
      <div className="space-y-4 bg-green-50 dark:bg-black">
        <details
          className="ml-44 mr-44 dark:bg-gray-900 group border-l-4 border-green-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900 dark:text-warning">
              Is Mutual Fund Profitable?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white">
            Mutual funds are a type of investment where the investors pool their
            money and invest in stocks, bonds, and other securities. They can be
            profitable if you choose the right fund and also if you are invested
            in it for the long term.
          </p>
        </details>

        <details className="ml-44 mr-44 dark:bg-gray-900 group border-l-4 border-green-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900 dark:text-warning">
              Can I Withdraw Mutual Fund Anytime?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white">
            Mutual fund investors can withdraw their funds anytime they want to
            if they have invested in open-ended funds. You cannot do the same if
            it&apos;s an ELSS mutual fund.
          </p>
        </details>
        <details className="ml-44 mr-44 dark:bg-gray-900 group border-l-4 border-green-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900 dark:text-warning">
              How to choose a mutual fund that suits your financial objective?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white">
            The first and foremost step is to decide on how much risk you are
            willing to take and investment tenure. Once you decide this, you can
            easily select the best mutual fund for you. At ShareHub, you can
            select from different categories of mutual funds such as high
            return, tax saving, top companies, and much more.
          </p>
        </details>
        <details className="ml-44 mr-44 dark:bg-gray-900 group border-l-4 border-green-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900 dark:text-warning">
              How to Invest in Mutual funds on ShareHub?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white">
            You can either use the website or download ShareHub mobile app to
            start investing in mutual funds on ShareHub.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQs;
