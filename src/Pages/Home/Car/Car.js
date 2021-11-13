import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css';

const Car = (params) => {
    const{_id, img, name, description, price, condition} = params.car;

    return (
        <div className="cars-card col-md-6 col-lg-4 gy-4 gx-4">
            <div className="card custom-car-card border-0 rounded-0 text-start">
                <img src={img} className="card-img-top rounded-0" height="250px" alt="..." />
                <div className="card-body custom-body bg-white">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-text price mt-4"> <span><i className="fas fa-dollar-sign"></i> {price}/MRP</span> <span className="bg-danger text-white px-2 py-1 rounded small">{condition}</span> </h5>
                    <p className="card-text text-muted my-4">{description.slice(0,100)}...</p>
                    <Link to ={`/order/${_id}`}>
                        <button className="btn w-100 custom-button text-white">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Car;