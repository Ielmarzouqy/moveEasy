import React, { useState, useEffect } from 'react';

export default function Cart() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations));
    }
  }, []);

  const deleteReservation = (index) => {
    const updatedReservations = [...reservations];
    updatedReservations.splice(index, 1);
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  console.log('cart');

  return (
    <div>
      <div className="flex flex-col md:flex-row bg-[#EBF1FD] text-[#173A6C] min-h-screen">
        <main className="flex-1 p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Place Your Order
          </h1>
          {reservations.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reservations.map((reservation, index) => (
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      Product 1
                    </h3>
                  </div>
                  <div className="p-6">
                    <img
                      src={reservation.image}
                      alt="Product 1"
                      className="w-full h-48 object-cover"
                      width="200"
                      height="200"
                    />
                    <p className="mt-4">
                      This is a description of the product.{' '}
                      <span className="text-gray-400">
                        {reservation.address}
                      </span>
                    </p>
                    <p className="mt-4">
                      Date of reservation:{' '}
                      <span className="text-gray-400">{reservation.date}</span>
                    </p>
                  </div>

                  <div className="flex items-center p-6">
                    <button
                      onClick={() => deleteReservation(index)}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-rose-600 text-white -foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No reservations found.</p>
          )}
        </main>
        {reservations.length > 0 ? (
          <aside className="md:w-80 bg-[#173A6C] text-white p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Order Summary
            </h2>
            {reservations &&
              reservations.map((reservation, index) => (
                // <div >

                <div className="flex gap-8 mb-4 justify-between">
                  <div>
                    <span>Price  : </span>
                    <span>${reservation.price}</span>
                  </div>
                </div>
              ))}

            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-4">
              Place Order
            </button>
            {/* </div> */}
          </aside>
        ) : (
          <p>No reservations found.</p>
        )}
      </div>
    </div>
  );
}
