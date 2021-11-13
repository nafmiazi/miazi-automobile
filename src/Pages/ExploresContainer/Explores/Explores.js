import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import './Explores.css';

const Explores = () => {
    const [explores, setExplores] = useState([]);
    useEffect( () => {
        fetch('https://sheltered-meadow-11966.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setExplores(data))
    }, [])
    return (
        <div className="bg-light py-4">
            <div className="container">
                <div className="text-center my-md-5">
                    <h1>EXPLORE COLLECTIONS</h1>
                    <p>We have some exciting automobiles on our collections | Lets Explore and Grab them now</p>
                </div>
                <div className="row m-0 mb-5">
                    {
                        explores.map(explore => <Explore explore={explore} key={explore._id} ></Explore>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Explores;