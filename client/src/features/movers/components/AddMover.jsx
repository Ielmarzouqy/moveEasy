import React, { useState } from 'react'
import Header from '../../adminDashboard/components/Header'
import Navbar from '../../adminDashboard/components/Navbar'
import Swal from 'sweetalert2';
import imageCompression from "browser-image-compression";
import { useCreateMoverMutation } from '../redux/moverApiSlice';


export default function AddMover() {

  const [createMover] = useCreateMoverMutation()

  const [moverData, setMoverData] = useState({
    name: '',
    number: '',
    price: '',
    category: '6596b37008b3e679e541b3d2',
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
    const imageFile = e.target.files[0];

    const compressedImage = await imageCompression(imageFile, {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
    });

    const base64Image = await convertToBase64(compressedImage);

    setMoverData((prevData) => ({
      ...prevData,
      image: base64Image,
    }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setMoverData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleAddMover = async () => {
    try {
      await createMover(moverData);

      console.log(moverData);
      Swal.fire({
        title: 'create car!',
        text: 'The Apartment created.',
        icon: 'success',
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

    <div>

        <Header></Header>
        <Navbar></Navbar>
       <div class="flex flex-1 items-center justify-center p-4">
              <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-[700px]"
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Add a new car
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Fill in the details below to add a new car to the inventory
                  </p>
                </div>
                <div class="p-6 space-y-4">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                        for="make"
                      >
                        Name of team
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="name"
                        placeholder="Enter make"
                        required=""
                        value={moverData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                        for="model"
                      >
                        Model
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="model"
                        placeholder="Enter model"
                        required=""
                        // value={moverData.price}
                        // onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                        for="year"
                      >
                        Number
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="number"
                        placeholder="Enter year"
                        required=""
                        value={moverData.number}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                        for="price"
                      >
                        Price
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="price"
                        placeholder="Enter price"
                        required=""
                        type="number"
                        value={moverData.price}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 form-label"
                      for="image"
                    >
                      Image
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="image"
                      name='image'
                      required=""
                      type="file"
                      onChange={handleFileChange}

                    />
                  </div>
                </div>
                <div class="flex items-center p-6" />
                <button 
                
                onClick={handleAddMover}

                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
                  Save
                </button>
              </div>
            </div>
    </div>
  )
}
