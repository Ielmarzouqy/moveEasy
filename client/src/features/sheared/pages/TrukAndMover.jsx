import React from 'react';

export default function TrukAndMover({onBackButtonClick}) {
  return (
    <div>
      <div className="container flex flex-col items-center gap-4 px-4 py-6 md:gap-8 md:px-6">
        <div className=" image flex items-center space-x-4">
          <img
            src="/b4.jpg"
            alt="Truck"
            width="600"
            height="600"
            className="rounded-xl object-cover"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <div className="space-y-1">
              <label
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                for="type"
              >
                Type of Truck
              </label>
              <option>Box Truck</option>
              <option>Cargo Van</option>
              <option>Flatbed</option>
              <option>Refrigerated</option>
              <select
              className='options'
                aria-hidden="true"
                tabindex="-1"
              >
                <option value=""></option>
              </select>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                  for="loading"
                >
                  Loading Zip
                </label>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                  <span className="sr-only">Increase</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <span className="sr-only">Decrease</span>
                </button>
              </div>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="loading"
                placeholder="Enter Zip"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                  for="unloading"
                >
                  Unloading Zip
                </label>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                  <span className="sr-only">Increase</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <span className="sr-only">Decrease</span>
                </button>
              </div>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="unloading"
                placeholder="Enter Zip"
              />
            </div>
            <div className="space-y-1">
              <label
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
                for="date"
              >
                Date
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="date"
                type="date"
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={onBackButtonClick}>Back</button>

    </div>
    // <div>
    //    <h1>FGHJKLGF</h1> djghjkl
    // </div>
  );
}
