import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect( () => {
        fetch('https://sheltered-meadow-11966.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data.slice(0,6)))
    }, [])
    return (
        <div className="bg-light py-4">
            <div className="container">
                <div className="text-center my-md-5">
                    <h1>CAR COLLECTIONS</h1>
                    <p>We have some exciting automobiles on our collections | Grab it now</p>
                </div>
                <div className="row m-0 mb-5">
                    {
                        cars.map(car => <Car car={car} key={car._id} ></Car>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cars;