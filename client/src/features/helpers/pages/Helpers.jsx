export default function Helper (){
    return (
        <>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
      <div className="relative group overflow-hidden rounded-lg">
        <address className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </address>
        <img
          alt="Category 1"
          className="object-cover w-full h-60"
          height={300}
          src="helppers.jpg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-semibold text-lg md:text-xl">Category 1</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Category 1 description</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <address className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </address>
        <img
          alt="Category 2"
          className="object-cover w-full h-60"
          height={300}
          src="movers.png"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-semibold text-lg md:text-xl">Category 2</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Category 2 description</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <address className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </address>
        <img
          alt="Category 3"
          className="object-cover w-full h-60"
          height={300}
          src="b.jpg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-semibold text-lg md:text-xl">Category 3</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Category 3 description</p>
        </div>
      </div>
 
    </section>
  
        </>
    )
}