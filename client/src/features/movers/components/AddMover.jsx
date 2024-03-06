import React from 'react'
import Header from '../../adminDashboard/components/Header'
import Navbar from '../../adminDashboard/components/Navbar'

export default function AddMover() {
  return (

    <div>

        <Header></Header>
        <Navbar></Navbar>
       <div class="flex flex-1 items-center justify-center p-4">
              <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-[700px]"
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Add a new car
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Fill in the details below to add a new car to the inventory
                  </p>
                </div>
                <div class="p-6 space-y-4">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                        for="make"
                      >
                        Make
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="make"
                        placeholder="Enter make"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                        for="model"
                      >
                        Model
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="model"
                        placeholder="Enter model"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                        for="year"
                      >
                        Year
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="year"
                        placeholder="Enter year"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                        for="price"
                      >
                        Price
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="price"
                        placeholder="Enter price"
                        required=""
                        type="number"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                      for="image"
                    >
                      Image
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="image"
                      required=""
                      type="file"
                    />
                  </div>
                </div>
                <div class="flex items-center p-6" />
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
                  Save
                </button>
              </div>
            </div>
    </div>
  )
}
