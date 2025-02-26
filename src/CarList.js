import React, { useEffect, useState } from "react";
import axios from "./axiosConfig";  

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/carcatalog")  
      .then(response => setCars(response.data))
      .catch(error => {
        console.error("Error fetching cars:", error);
        setError("Failed to load cars. Please try again.");
      });
  }, []);

  return (
    <div>
      <h1>Car List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {cars.length > 0 ? (
          cars.map((car) => (
            <li key={car.id}>
              {car.vehicle} - {car.type} ({car.manufacturer}) - {car.color} - {car.fuel}
            </li>
          ))
        ) : (
          <p>No cars found.</p>
        )}
      </ul>
    </div>
  );
};

export default CarList;

