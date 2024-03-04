import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

export default function Cars() {

    console.log("csss")
  return (
    <div>
      <>
        <Header></Header>

        <main>
          <div className="flex flex-col md:flex-row">
            <Navbar />

            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
              <div className="flex items-center">
                <h1 className="font-semibold text-lg md:text-2xl">Movers</h1>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
                  Add Mover
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
                          Name
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          Contact
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          Availability
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&amp;_tr:last-child]:border-0">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <img
                            src="/placeholder.svg"
                            width="64"
                            height="64"
                            alt="Mover image"
                            className="aspect-square rounded-md object-cover"
                          />
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                          John Doe
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          john@example.com
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          Available
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <img
                            src="/placeholder.svg"
                            width="64"
                            height="64"
                            alt="Mover image"
                            className="aspect-square rounded-md object-cover"
                          />
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                          Alice Smith
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          alice@example.com
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          Busy
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <img
                            src="/placeholder.svg"
                            width="64"
                            height="64"
                            alt="Mover image"
                            className="aspect-square rounded-md object-cover"
                          />
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                          Mike Johnson
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          mike@example.com
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          Available
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <img
                            src="/placeholder.svg"
                            width="64"
                            height="64"
                            alt="Mover image"
                            className="aspect-square rounded-md object-cover"
                          />
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                          Sara Brown
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          sara@example.com
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          Available
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <img
                            src="/placeholder.svg"
                            width="64"
                            height="64"
                            alt="Mover image"
                            className="aspect-square rounded-md object-cover"
                          />
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                          Alex Lee
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          alex@example.com
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          Busy
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </main>
      </>
    </div>
  );
}
