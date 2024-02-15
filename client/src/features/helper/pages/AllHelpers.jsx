import React from 'react';

export default function AllHelpers() {
  return (
    <div>
      <div class="px-4 md:px-6 lg:px-8 py-6 lg:py-12 xl:py-16 space-y-6 lg:space-y-10">
        <div class="flex flex-col gap-2 lg:gap-4">
          <h1 class="text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">
            Rent a Car
          </h1>
          <p class="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Choose from our selection of high-quality rental cars. Whether
            you're looking for a sleek sedan, a spacious SUV, or a sporty
            convertible, we have the perfect vehicle for your next adventure.
          </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="flex flex-col gap-2 rounded-lg border overflow-hidden dark:border-gray-850">
            {/* <img src="/placeholder.svg" alt="Car" width="400" height="225" class="aspect-video overflow-hidden object-cover"> */}
            
            <img
            // alt={car.name}
            className="object-cover w-full h-60"
            height={300}
            src="pickup.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          ></img>
            <div class="grid gap-1 p-4">
              <div class="flex items-center gap-2">
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
                  class="w-4 h-4"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <path d="M9 17h6"></path>
                  <circle cx="17" cy="17" r="2"></circle>
                </svg>
                <div class="text-xl font-semibold">Toyota Corolla</div>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Compact · 4 doors · 5 seats
              </div>
              <div class="text-2xl font-semibold">$50/day</div>
              <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                Rent Now
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-2 rounded-lg border overflow-hidden dark:border-gray-850">
            {/* <img src="/placeholder.svg" alt="Car" width="400" height="225" class="aspect-video overflow-hidden object-cover"> */}
            
            <img
            // alt={car.name}
            className="object-cover w-full h-60"
            height={300}
            src="pickup.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          ></img>
            <div class="grid gap-1 p-4">
              <div class="flex items-center gap-2">
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
                  class="w-4 h-4"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <path d="M9 17h6"></path>
                  <circle cx="17" cy="17" r="2"></circle>
                </svg>
                <div class="text-xl font-semibold">Jeep Wrangler</div>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                SUV · 4 doors · 4 seats
              </div>
              <div class="text-2xl font-semibold">$75/day</div>
              <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                Rent Now
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-2 rounded-lg border overflow-hidden dark:border-gray-850">
            {/* <img src="/placeholder.svg" alt="Car" width="400" height="225" class="aspect-video overflow-hidden object-cover"> */}
           
            <img
            // alt={car.name}
            className="object-cover w-full h-60"
            height={300}
            src="pickup.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          ></img>
            <div class="grid gap-1 p-4">
              <div class="flex items-center gap-2">
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
                  class="w-4 h-4"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <path d="M9 17h6"></path>
                  <circle cx="17" cy="17" r="2"></circle>
                </svg>
                <div class="text-xl font-semibold">Audi A4</div>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Luxury · 4 doors · 5 seats
              </div>
              <div class="text-2xl font-semibold">$100/day</div>
              <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                Rent Now
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-2 rounded-lg border overflow-hidden dark:border-gray-850">
            {/* <img src="/placeholder.svg" alt="Car" width="400" height="225" class="aspect-video overflow-hidden object-cover"> */}
            
            <img
            // alt={car.name}
            className="object-cover w-full h-60"
            height={300}
            src="pickup.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          ></img>
            <div class="grid gap-1 p-4">
              <div class="flex items-center gap-2">
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
                  class="w-4 h-4"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <path d="M9 17h6"></path>
                  <circle cx="17" cy="17" r="2"></circle>
                </svg>
                <div class="text-xl font-semibold">BMW 3 Series</div>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Luxury · 4 doors · 5 seats
              </div>
              <div class="text-2xl font-semibold">$100/day</div>
              <button class="bg-blue-900 text-white p-4  inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   hover:bg-primary/90 h-9 rounded-md ">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
