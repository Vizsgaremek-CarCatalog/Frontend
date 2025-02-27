import React, { useState, useEffect } from "react";
import axios from "./axiosConfig";  

const CarList = ({ theme }) => {
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
    <div className={`container mt-5 ${theme === "green-white" ? "bg-light" : "bg-dark text-white"}`}>
      <h1 className="text-center mb-4">Car List</h1>
      
      {error && <p className="text-danger text-center">{error}</p>}
      
      {cars.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Type</th>
                <th>Manufacturer</th>
                <th>Color</th>
                <th>Fuel</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.vehicle}</td>
                  <td>{car.type}</td>
                  <td>{car.manufacturer}</td>
                  <td>{car.color}</td>
                  <td>{car.fuel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No cars found.</p>
      )}
    </div>
  );
};

export default CarList;
