import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default function Payments() {
  return (
    <div>
        <Header></Header>
        <main>
        <div className="flex flex-col md:flex-row">

       <Navbar/> 
          <section>
            <div
              id="main"
              className="main-content flex-1 bg-gray-100 mt-12 md:mt-12 pb-24 md:pb-5"
            >
              <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                  <h1 className="font-bold pl-2">Payments</h1>
                </div>
              </div>

              
            </div>
          </section> 
          </div>

          </main>
    </div>
  )
}
