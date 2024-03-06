import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { useGetAllBoxesQuery } from '../../boxes/redux/boxApiSlice'

export default function Boxes() {

  const {data} = useGetAllBoxesQuery()

  console.log(data, "box")
  return (
    <div>
        {/* <Header></Header> */}
        <main>
        <div className="flex flex-col md:flex-row">

       <Navbar/> 
          
          
       <main className="flex flex-1 flex-col gap-4 p-16 md:gap-8 md:p-6">
            <div className="flex items-center py-16">
              

              <h1 className="font-semibold text-lg md:text-2xl">Boxes</h1>
              
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
              <a href="/dashboard/box/add-box">
                Add Box
              </a>
              </button>

            </div>
            <div className="border shadow-sm rounded-lg">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Image
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Movers Team
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Numbers of team
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Category
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    {data?.boxes?.map((helper) => ( 
                      <tr
                        key={helper._id}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <img
                            // src="/placeholder.svg"
                            src={helper.image}
                            width="64"
                            height="64"
                            alt="Mover image"
                            className="aspect-square rounded-md object-cover"
                          />
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                          {helper.name}
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          {helper.price}
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          '{helper?.category?.name}'
                        </td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          <h1>boxes</h1>
          </div>

          </main>
    </div>
  )
}
