import React, { useEffect, useState } from "react";
import axios from "./axiosConfig";  


const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/cars")
      .then(response => setCars(response.data))
      .catch(error => {
        console.error("Error fetching cars:", error);
        alert("Failed to load cars. Please log in again.");
      });
  }, []);

  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.vehicle} - {car.model} ({car.manufacturer})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;