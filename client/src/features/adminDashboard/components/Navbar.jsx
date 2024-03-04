import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav aria-label="alternative nav">
        <div className="bg-[#173A6C] shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li className="mr-3 flex-1">
                <a
                  href="/dashboard/analytics"
                  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                >
                  <i className="fas fa-tasks pr-0 md:pr-3"></i>
                  <span className="pb-1 md:pb-0 text-md md:text-base font-bold text-white md:text-gray-200 block md:inline-block">
                    Analytics
                  </span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a
                  href="/dashboard/cars"
                  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                >
                  <i className="fas fa-tasks pr-0 md:pr-3"></i>
                  <span className="pb-1 md:pb-0  md:text-base text-md font-bold text-white md:text-gray-200 block md:inline-block">
                    Trucks
                  </span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a
                  href="/dashboard/movers"
                  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                >
                  <i className="fa fa-envelope pr-0 md:pr-3"></i>
                  <span className="pb-1 md:pb-0  md:text-base text-md font-bold text-white md:text-gray-200 block md:inline-block">
                    Movers
                  </span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a
                  href="/dashboard/boxes"
                  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                >
                  <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i>
                  <span className="pb-1 md:pb-0  md:text-base text-md font-bold text-white md:text-white block md:inline-block">
                    Boxes
                  </span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a
                  href="/dashboard/orders"
                  className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                >
                  <i className="fa fa-wallet pr-0 md:pr-3"></i>
                  <span className="pb-1 md:pb-0  md:text-base text-2xl font-bold text-white md:text-gray-200 block md:inline-block">
                    Orders
                  </span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a
                  href="/dashboard/payments"
                  className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                >
                  <i className="fa fa-wallet pr-0 md:pr-3"></i>
                  <span className="pb-1 md:pb-0  md:text-base text-md font-bold text-white md:text-gray-200 block md:inline-block">
                    Payments
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
