import React, { useState } from 'react';
import { useCreateCarMutation } from '../redux/carApiSlice';
import Swal from 'sweetalert2';
import imageCompression from 'browser-image-compression';
import Header from '../../sheared/components/Header';
import Navbar from '../../adminDashboard/components/Navbar';
import NavBarNew from '../../sheared/components/NavBarNew';
import HeaderNew from '../../sheared/components/HeaderNew';

export default function AddCar() {
  const [createCar] = useCreateCarMutation();
  const [carData, setCarData] = useState({
    name: '',
    // image: '',
    price: '',
    city: '',
    description: '',
    category: '6596b37008b3e679e541b3d0',
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e) => {
    try {
      
   
    const imageFile = e.target.files[0];

    if (!imageFile) {
      throw new Error('No file selected');
    }
    const compressedImage = await imageCompression(imageFile, {
      // maxSizeMB: 1,
      // maxWidthOrHeight: 800,

      maxWidth: 800,
  maxHeight: 800,

    });
  

    const base64Image = await convertToBase64(compressedImage);

    setCarData((prevData) => ({
      ...prevData,
      image: base64Image,
    }));
  } catch (error) {
    console.error('Error processing file:', error.message);
  
  }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // console.log(...prevData);
  };

  const handleAddCar = async () => {
    try {
      await createCar(carData);

      console.log(carData);
      Swal.fire({
        title: 'create car!',
        text: 'The Apartment created.',
        icon: 'success',
      });
      setCarData({
        name: '',
        price: '',
        city: '',
        description: '',
        category: '6596b37008b3e679e541b3d0',
      });
    } catch (error) {
      console.error('Failed to create car', error);

      Swal.fire({
        title: 'Error',
        text: 'Failed to create car.',
        icon: 'error',
      });
    }
  };

  return (
    <>
   
      <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40">
        <div className="hidden border-r border-gray-200 w-60 lg:block dark:border-gray-800">
          <NavBarNew></NavBarNew>
        </div>
        <div className="flex-1 flex  px-2 flex-col">
          <HeaderNew></HeaderNew>

          <div className="  flex-1 pt-6 p-16">
            <h1 className="font-semibold text-lg md:text-2xl"> </h1>
       

            <div
              className="rounded-lg border bg-blue-400/40 pt-6 px-8 text-card-foreground shadow-sm w-full max-w-3xl"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Car Details
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill in the details of the car.
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="make"
                    >
                      Make
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="name"
                      placeholder="Tesla"
                      value={carData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="price"
                      placeholder="$"
                      type="number"
                      value={carData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="price"
                    >
                      City
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="city"
                      placeholder="City"
                      type="text"
                      value={carData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="price"
                    >
                      Description
                    </label>
                    <textarea
                      className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="description"
                      placeholder="description"
                      type="text"
                      value={carData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="image"
                    >
                      Image
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="image"
                      type="file"
                      name="image"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <button
                  onClick={handleAddCar}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-primary/90 h-11 rounded-md px-8"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
