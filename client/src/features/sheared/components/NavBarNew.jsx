import React, { useState } from 'react';

export default function NavBarNew() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
    console.log('rrrrrrrr')
  };

  return (
    <div>
      <div
        className={`border-r border-gray-200 bg-blue-900  h-screen w-60 lg:block dark:border-gray-800 ${
          isVisible ? '' : 'hidden'
        }`}
      >
        {/* Sidebar content */}

        <nav className="flex  flex-col w-60 ">
          <div className="flex items-center  px-4 border-b border-gray-200 dark:border-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
              <path d="M12 3v6"></path>
            </svg>
            <span className="ml-2 font-semibold">Acme Inc</span>
          </div>
          <div className="flex-1   flex flex-col justify-center  ">
            <nav className="flex-1  ">
              <ul className="flex flex-col gap-0.5">
                <li className="relative">
                  <a
                    className="flex items-center gap-3 rounded-lg px-4 py-2 text-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                      <circle cx="7" cy="17" r="2"></circle>
                      <path d="M9 17h6"></path>
                      <circle cx="17" cy="17" r="2"></circle>
                    </svg>
                    Car
                  </a>
                  <ul className="absolute inset-y-0 top-0 translate-x-full flex flex-col gap-0.5 bg-gray-100/50 px-4 dark:bg-gray-800/50">
                    <li>
                      <a
                        className="flex items-center gap-3 rounded-lg px-4 py-2 text-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/dashboard/cars/add-car"
                      >
                        Add Car
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 rounded-lg px-4 py-2 text-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="/dashboard/cars/cars"
                      >
                        All Cars
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 rounded-lg px-4 py-2 text-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m7.5 4.27 9 5.15"></path>
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                      <path d="m3.3 7 8.7 5 8.7-5"></path>
                      <path d="M12 22V12"></path>
                    </svg>
                    Movers
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 rounded-lg px-4 py-2 text-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                      <path d="m3.3 7 8.7 5 8.7-5"></path>
                      <path d="M12 22V12"></path>
                    </svg>
                    Box
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m7.5 4.27 9 5.15"></path>
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                      <path d="m3.3 7 8.7 5 8.7-5"></path>
                      <path d="M12 22V12"></path>
                    </svg>
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 rounded-lg px-4 py-2 text-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 rounded-lg px-4 py-2 text-white transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M3 3v18h18"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                    Analytics
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>

        <button onClick={toggleVisibility}>Toggle Sidebar</button>
      </div>
    </div>
  );
}
