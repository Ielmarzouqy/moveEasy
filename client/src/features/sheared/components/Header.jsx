import React from 'react';

export default function Header() {
  return (
    <div>
      <header className=" bg-[#173A6C] text-white flex items-center h-16 px-4 border-b  w-full shrink-0 dark:bg-gray-950 md:px-6">
        <nav className="hidden w-full max-w-7xl grid-cols-4 items-center gap-4 justify-between md:grid md:gap-8 lg:gap-12">
          <a className="font-bold" href="#">
            Acme Inc
          </a>
          <div className="flex items-center justify-start space-x-4">
            <a className="font-medium" href="#">
              Home
            </a>
            <a className="font-medium" href="#">
              Products
            </a>
            <a className="font-medium" href="#">
              About
            </a>
            <a className="font-medium" href="#">
              Contact
            </a>
          </div>
          <div className="ml-auto flex  items-center space-x-8">
            <a
              className="text-sm underline translate-y-0.5 hover:text-gray-900 focus:text-gray-900"
              href="#"
            >
              Sign in
            </a>
            <a
              className="text-sm underline translate-y-0.5 hover:text-gray-900 focus:text-gray-900"
              href="#"
            >
              Sign up
            </a>
            <a
              className=" inline-flex items-center justify-center translate-y-0.5 border-gray-200 h-8 w-8 border-gray-200 border-gray-200 hover:border-gray-300 hover:text-gray-50 focus:border-gray-300 dark:border-gray-800 dark:hover:border-gray-950 dark:hover:text-gray-950 dark:focus:border-gray-950"
              href="/cart"
            > Open cart 
              <p className="sr-only">Open cart</p>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg> */}
              <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 translate-x-2">
                3 
              </div>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
