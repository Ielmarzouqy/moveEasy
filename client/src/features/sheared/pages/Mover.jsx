import React from 'react';

export default function Mover({ onBackButtonClick }) {
  return (
    <>
      {/* <div>
        <h1>Movers Only</h1>
        <div class="w-full max-w-sm mx-auto space-y-4">
          <img
            src="/placeholder.svg"
            alt="Truck"
            width="400"
            height="200"
            class="aspect-video overflow-hidden rounded-lg object-contain object-center"
          />
          <form class="grid gap-4">
            <div class="flex flex-col space-y-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                for="truck"
              >
                Select truck
              </label>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:re:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                data-placeholder=""
                class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span style="pointer-events: none;">Select truck</span>
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
                  class="h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <select
                aria-hidden="true"
                tabindex="-1"
                style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;"
              >
                <option value=""></option>
              </select>
            
</div>
            <div class="flex flex-col space-y-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                for="loading"
              >
                Loading zip code
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="loading"
                placeholder="Loading zip code"
                type="number"
              />
            </div>
            <div class="flex flex-col space-y-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                for="unloading"
              >
                Unloading zip code
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="unloading"
                placeholder="Unloading zip code"
                type="number"
              />
            </div>
            <div class="flex flex-col space-y-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                for="date"
              >
                Date
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="date"
                placeholder="Date"
                type="date"
              />
            </div>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div> */}

      {/* <div class="container py-6"> */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
      <div className="container  border grid items-center gap-10 px-4 py-16 text-center md:gap-16 md:px-6 lg:gap-20">

        <div class="grid items-center gap-6 px-4 text-center md:grid-cols-2 md:px-6">
          <img
            src="/b3.jpg"
            alt="Truck"
            width="400"
            height="200"
            class="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center md:order-last"
          />
          <div class="space-y-4">
            <h3 class="text-2xl font-bold tracking-tighter sm:text-3xl">
              Track your shipment
            </h3>
            <div class="flex gap-2">
              <div class="inline-flex items-center space-x-2">
                <input
                  id="ltl"
                  class="form-tick appearance-none h-4 w-4 border border-gray-300 rounded checked:bg-blue-600 checked:border-0"
                  type="radio"
                  name="type"
                />
                <label
                  for="ltl"
                  class="text-sm font-medium tracking-tighter peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  LTL (Less Than Truckload)
                </label>
              </div>
              <div class="inline-flex items-center space-x-2">
                <input
                  id="ftl"
                  class="form-tick appearance-none h-4 w-4 border border-gray-300 rounded checked:bg-blue-600 checked:border-0"
                  type="radio"
                  name="type"
                />
                <label
                  for="ftl"
                  class="text-sm font-medium tracking-tighter peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  FTL (Full Truckload)
                </label>
              </div>
            </div>
            <div class="grid gap-2">
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="loading-zip"
                placeholder="Enter loading ZIP code"
                type="text"
              />
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="unloading-zip"
                placeholder="Enter unloading ZIP code"
                type="text"
              />
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="date"
                placeholder="Enter date"
                type="date"
              />
            </div>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Track
            </button>
            <button onClick={onBackButtonClick}>Back</button>

          </div>
        </div>
      </div>
      </main>
      </div>
    </>
  );
}
