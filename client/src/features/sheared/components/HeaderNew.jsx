import React, { useState } from 'react'

export default function HeaderNew() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div>
        <header className="flex h-14 items-center gap-4 border-b bg-blue-900 px-6 dark:bg-gray-800/40">
            <a className="lg:hidden" href="#">
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
              <span className="sr-only">Home</span>
            </a>
            <div className="w-full">
             
            </div>
        
            <div className="relative">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                type="button"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                />
                <span className="sr-only">Toggle user menu</span>
              </button>
              {isOpen && (
                <ul
                  className="absolute right-0 mt-2 py-1 bg-white shadow-lg rounded-md text-sm text-gray-700"
                  aria-label="submenu"
                >
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              )}
            </div>
          </header>
    </div>
  )
}
