import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import imageCompression from 'browser-image-compression';
import NavBarNew from '../../sheared/components/NavBarNew';
import HeaderNew from '../../sheared/components/HeaderNew';
import {
  useGetCarDetailsQuery,
  useUpdateCarMutation,
} from '../redux/carApiSlice';
import { useParams } from 'react-router-dom';

export default function EditCar() {
  const { id } = useParams();

  const { data: carDetails, error, isLoading } = useGetCarDetailsQuery(id);

  console.log(carDetails);
  const [updateCar] = useUpdateCarMutation();
  const [carData, setCarData] = useState({
    name: '',
    price: '',
    city: '',
    description: '',
    category: '6596b37008b3e679e541b3d0',
  });

  useEffect(() => {
    if (carDetails) {
      setCarData({
        name: carDetails.car.name,
        price: carDetails.car.price,
        city: carDetails.car.city,
        description: carDetails.car.description,
        category: carDetails.car.category,
        image: carDetails.car.image,
      });
    }
  }, [carDetails]);

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
  };

  const handleUpdateCar = async () => {
    try {
      const carId = id;
      // const carData = carData
      await updateCar({ carId, carData });
      console.log('id', id);
      Swal.fire({
        title: 'Update Car',
        text: 'The car details have been updated successfully.',
        icon: 'success',
      });
    } catch (error) {
      console.error('Failed to update car', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to update car.',
        icon: 'error',
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40">
        <div className="hidden border-r border-gray-200 w-60 lg:block dark:border-gray-800">
          <NavBarNew />
        </div>
        <div className="flex-1 flex px-2 flex-col">
          <HeaderNew />

          <div className="flex-1 pt-6 p-16">
            <h1 className="font-semibold text-lg md:text-2xl">Edit Car</h1>

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
                    <label htmlFor="name">Make</label>
                    <input
                      id="name"
                      type="text"
                      value={carData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="price">Price</label>
                    <input
                      id="price"
                      type="number"
                      value={carData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      type="text"
                      value={carData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      value={carData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="image">Image</label>
                    <input id="image" type="file" onChange={handleFileChange} />
                  </div>
                </div>
                <button onClick={handleUpdateCar}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
