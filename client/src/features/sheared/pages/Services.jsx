
import { useEffect, useState } from 'react';
import Mover from './Mover';
import TrukAndMover from './TrukAndMover';

export default function Services() {

const [selectedService, setSelectedService] = useState('');
const [serviceSelected, setServiceSelected] = useState(false);


const handleServiceSelect = (service) => {
    setSelectedService(service);
    setServiceSelected(true);

  };
  const handleBackButtonClick = () => {
    setSelectedService(null);
    setServiceSelected(false); 
    
  };

  return (
    <div>
              {!serviceSelected  ? (

      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <div className="container  border grid items-center gap-10 px-4 py-16 text-center md:gap-16 md:px-6 lg:gap-20">
            <div className="space-y-3">
              <h1 className="text-3xl border font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Service Do You Need?
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer professional moving services for your home, apartment,
                or office.
              </p>
            </div>
            <div className="mx-auto grid border max-w-sm gap-4 md:max-w-none md:grid-cols-2">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-4">
                  <h3 className="text-xl font-bold">Movers</h3>
                </div>
                <div className="p-4">
                  <img
                    src="/b.jpg"
                    alt="Movers"
                    width="400"
                    height="200"
                    className="aspect-[2/1] rounded-lg object-cover"
                  />
                </div>
                <div className="flex items-center p-4">
                  <button
                  onClick={()=>{handleServiceSelect('movers')}}
                    className="w-full inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Select
                  </button>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-4">
                  <h3 className="text-xl font-bold">Movers &amp; Truck</h3>
                </div>
                <div className="p-4">
                  <img
                    src="/b4.jpg"
                    alt="Movers &amp; Truck"
                    width="400"
                    height="200"
                    className="aspect-[2/1] rounded-lg object-cover"
                  />
                </div>
                <div className="flex items-center p-4">
                  <button
                  onClick={() =>{handleServiceSelect('moversAndTruck')}}
                    className="w-full inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
      ) : (
      <>
        
        {/* Conditional Rendering based on the selected service */}
        {selectedService === 'movers' && <Mover onBackButtonClick={handleBackButtonClick} />}
      {selectedService === 'moversAndTruck' && <TrukAndMover onBackButtonClick={handleBackButtonClick} /> }
        </>
      )}

    </div>
  );
}
