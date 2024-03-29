// import Link from "react-router-dom"
// import { Button } from "../../components/ui/button"
// import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../components/ui/dropdown-menu"

// import { useState } from 'react';
import AddCar from './addCar';
import HeaderNew from '../../sheared/components/HeaderNew';
import NavBarNew from '../../sheared/components/NavBarNew';

export default function SideBarNew() {
  return (
    <>
      <div class="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40">
        <div class="hidden border-r border-gray-200 w-60 lg:block dark:border-gray-800">
          <NavBarNew></NavBarNew>
        </div>
        <div class="flex-1 flex flex-col">
          <HeaderNew></HeaderNew>

          <div class="flex-1 flex flex-col items-start gap-4 p-4 md:gap-8 md:p-6">
            <div class="flex items-center gap-4">
              <h1 class="font-semibold text-lg md:text-2xl"> </h1>
              {/* <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
                Add product
              </button> */}

              <AddCar></AddCar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// function MenuIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }

// function PackageIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </svg>
//   );
// }

// function PlusIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5v14" />
//     </svg>
//   );
// }
