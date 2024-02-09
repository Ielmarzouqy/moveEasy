import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="flex items-center justify-between p-6 bg-orange-500 text-white">
        <div className="flex items-center space-x-2">
          <img
            alt="Logo"
            className="rounded-full"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
          <h1 className="text-2xl font-bold">Truck & Pickup Rental</h1>
        </div>
        <nav className="space-x-4">
          <Link className="hover:underline" href="#">
            Services
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-12 px-6 bg-orange-100 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold">Welcome to our Truck & Pickup Rental Service</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We offer a wide range of trucks and pickups for rent, along with professional helpers to assist with your
              moving needs.
            </p>
            <img
              alt="Trucks and Pickups"
              className="mx-auto rounded-lg"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </section>
        <section className="py-12 px-6" id="services">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-2xl font-bold text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-4 p-6 bg-orange-50 dark:bg-gray-700 rounded-lg">
                <img
                  alt="Truck Rental"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold">Truck Rental</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We offer a variety of trucks for all your moving needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-orange-50 dark:bg-gray-700 rounded-lg">
                <img
                  alt="Pickup Rental"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold">Pickup Rental</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our pickups are perfect for smaller moves or deliveries.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-orange-50 dark:bg-gray-700 rounded-lg">
                <img
                  alt="Helper Services"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold">Helper Services</h3>
                <p className="text-gray-600 dark:text-gray-400">Our professional helpers can assist with your move.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 px-6 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto flex justify-between">
          <div>
            <h3 className="text-lg font-bold">Truck & Pickup Rental</h3>
            <p className="text-sm">© 2024 All rights reserved.</p>
          </div>
          <nav className="space-x-4">
            <Link className="hover:underline" href="#">
              Services
            </Link>
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

