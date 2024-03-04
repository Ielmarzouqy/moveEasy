import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer className="py-6 px-6 bg-[#173A6C] text-white">
        <div className="max-w-4xl mx-auto flex justify-between">
          <div>
            <h3 className="text-lg font-bold">Truck & Pickup Rental</h3>
            <p className="text-sm">© 2024 All rights reserved.</p>
          </div>
          <nav className="space-x-4">
            <a className="hover:underline" href="#">
              Services
            </a>
            <a className="hover:underline" href="#">
              About
            </a>
            <a className="hover:underline" href="#">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
